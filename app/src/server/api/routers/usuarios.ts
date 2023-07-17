import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { randomBytes } from 'crypto'
import nodemailer from 'nodemailer'
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from '~/env.mjs';

export const usuariosRouter = createTRPCRouter({
  inscripcionSocio: publicProcedure.input(z.object({
    correo: z.string().email(),
    correoRepetido: z.string().email(),
    clave: z.string().min(4),
    claveRepetida: z.string().min(4),
    nombre: z.string(),
    dniPasaporte: z.string(),
    apellidos: z.string(),
    poblacion: z.string(),
    codigoPostal: z.string(),
    telefono: z.string(),
    nickTelegram: z.string(),
    aceptaIncluirseTelegram: z.boolean(),
    condicionesAEPD: z.literal<boolean>(true),
    descripcionVMP: z.string(),
    pagoPor: z.enum(["", "Paypal", "Transferencia", "Bizum"])
}).refine((data) => data.correo === data.correoRepetido, {
  message: "El correo y la confirmación de correo no son iguales",
  path: ["correoRepetido"],
}).refine((data) => data.clave === data.claveRepetida, {
  message: "La clave y la clave repetida no son iguales",
  path: ["claveRepetida"], // path of error
}).refine((data) => data.pagoPor !== "", {
  message: "Se tiene que elegir un tipo de pago valido",
  path: ["pagoPor"], // path of error
})
    ).mutation(async ({input, ctx})=>{
      console.log("Nos inscribimos con el input", input)

      const claveHasheada = await bcrypt.hash(input.clave, 12)
      const tokenCorreo = randomBytes(8).toString('hex')

      try {
        const resultadoInscripcion = await ctx.prisma.inscripcionSocio.create({
          data: {
            correo: input.correo,
            clave: claveHasheada,
            nombre: input.nombre,
            dniPasaporte: input.dniPasaporte,
            apellidos: input.apellidos,
            poblacion: input.poblacion,
            codigoPostal: input.codigoPostal,
            telefono: input.telefono,
            nickTelegram: input.nickTelegram,
            aceptaIncluirseTelegram: input.aceptaIncluirseTelegram,
            condicionesAEPD: input.condicionesAEPD,
            descripcionVMP: input.descripcionVMP,
            pagoPor: input.pagoPor,
            tokenCorreo: tokenCorreo
          }  
        })

        console.log("El resultado de la inscripcion:", resultadoInscripcion)

        enviarCorreoVerificacion(tokenCorreo)

        ctx.prisma.inscripcionSocio.update({
          where: {correo: resultadoInscripcion.correo},
          data: {fechaEnvioCorreo: new Date()} 
        })

      } catch(error) {
        console.log("No se ha podido inscribir", error)
      }
      return true
    })
})

async function enviarCorreoVerificacion(correoInscripcion: string, tokenCorreo: String) {
  const transporter = nodemailer.createTransport({
    host: env.EMAIL_SERVER_HOST,
    port: env.EMAIL_SERVER_PORT,
    secure: false,
    auth: {
      user: env.EMAIL_SERVER_USER,
      pass: env.EMAIL_SERVER_PASSWORD,
    },
  })

  const mailOptions = {
    from: env.EMAIL_FROM,
    to: correoInscripcion,
    subject: 'Verify your email',
    text: 'Please verify your email by clicking on the following link:',
    html: '<p>Please verify your email by clicking on the following link:</p><a href="http://localhost:3000/verify">Verify</a>',
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully');
  } catch (error) {
    console.error(error);
  }
}

/*export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
*/
