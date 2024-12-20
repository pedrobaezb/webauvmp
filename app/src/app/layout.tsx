import '@/app/globals.css'
import Link from 'next/link'
import NavegacionPrincipal from "@/components/NavecacionPrincipal"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
        <head>
            <title>AUVMP</title>
            <link rel="icon" type="image/png" href="/auvmp_icono.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
        </head>
        <body>
          <header>
            <NavegacionPrincipal />
          </header>
            {children}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
              <p>Copyright © 2025 Asociación de Usuarios de Vehículos de Movilidad Personal - AUVMP Todos los derechos reservados.</p>
              <p><a className="link" href="mailto:info@auvmp.org">Email de Contacto</a> <Link className="link" href="/PoliticaDePrivacidad">Politica de privacidad</Link></p>
            </div>
          </footer>
        </body>
    </html>
  )
}
