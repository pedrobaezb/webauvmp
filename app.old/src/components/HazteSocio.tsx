import { useState, useEffect } from "react"

export default function HazteSocio() {
    const [mostrarModal, setMostrarModal] = useState(false)

    const [graciasAbierto, setGraciasAbierto] = useState(false)

    const [estaEnviando, setEstaEnviando] = useState(false)

    const [errores, setErrores] = useState<string[]| undefined>()

    function hideModal () {
      setMostrarModal(false)
      setGraciasAbierto(false)
    }

    useEffect(() => {
        const handleEsc = (event:any) => {
            if (event.keyCode === 27 || event.key === "Escape")setMostrarModal(false)
        }
        window.addEventListener('keydown', handleEsc)
        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    const formaPago = {
      NINGUNA: "",
      PAYPAL: "Paypal",
      TRANSFERENCIA: "Transferencia",
      BIZUM: "Bizum"} as const

    const [inscripcion, setInscripcion] = useState<any>({
      correo: "",
      correoRepetido: "",
      clave: "",
      claveRepetida: "",
      nombre: "",
      dniPasaporte: "",
      apellidos: "",
      poblacion: "",
      codigoPostal: "",
      telefono: "",
      nickTelegram: "",
      aceptaIncluirseTelegram: false,
      condicionesAEPD: false,
      descripcionVMP: "",
      pagoPor: formaPago.NINGUNA,
    })


    async function enviar(e:any) {
      e.preventDefault()
      setEstaEnviando(true)

      console.debug("recibido para procesar", inscripcion)

      const erroresValidacion: string[] = []

      if(inscripcion.correo!==inscripcion.correoRepetido) erroresValidacion.push("El correo y el correo repetido deben ser iguales")
      if(inscripcion.clave.length<5) erroresValidacion.push("La clave es demasiado corta (al menos 5 caracteres)")
      if(inscripcion.clave!==inscripcion.claveRepetida) erroresValidacion.push("La  clave y la clave repetida deben ser iguales")

      if(erroresValidacion.length>0) {
        setErrores(erroresValidacion)
        setEstaEnviando(false)
        return
      }


      try {
        console.debug("Mandamos la peticion")
        const response = await fetch("https://dummyjson.com/http/201")
        console.debug("Ha ido correcto", response)
        if(response.status!=201) {
          console.debug("El servidor ha mandado otro codigo que no deberia",response)
          throw new Error("Respuesta incorrecta del servidor")
        }
        console.debug("Al final todo ha ido bien")
      } catch (error) {
        erroresValidacion.push("No se ha podido grabar la inscripcion, por favor intentelo de nuevo mas tarde")
        setErrores(erroresValidacion)
        setEstaEnviando(false)
        return
      }


/*      await new Promise((resolve:any) => {
        setTimeout(() => {
          resolve()
        }, 4000)
      })*/

      setEstaEnviando(false)
      setMostrarModal(false)
      setGraciasAbierto(true)

    }

    function borrarTodo(_:any) {
      setInscripcion({
        correo: "",
        correoRepetido: "",
        clave: "",
        claveRepetida: "",
        nombre: "",
        dniPasaporte: "",
        apellidos: "",
        poblacion: "",
        codigoPostal: "",
        telefono: "",
        nickTelegram: "",
        aceptaIncluirseTelegram: false,
        condicionesAEPD: false,
        descripcionVMP: "",
        pagoPor: formaPago.NINGUNA,
      })
    }

    function Gracias() {
      return(<>
        <div id="GraciasModal" className="fixed z-40 left-0 top-0 w-full h-full overflow-auto backdrop-blur-xl" onClick={()=>true}>
          <div className="flex items-center justify-center h-screen">
            <div className="p-4 rounded shadow-lg ring ring-green-600/50 bg-white text-black">
              <div className="flex flex-col items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-4xl font-bold">¡ Gracias !</h1>
                <p>Muchas gracias por inscribirte! Pronto recibirás un correo con la confirmación e instrucciones para terminar la inscripción.</p>
                <a  onClick={hideModal}
                  className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span  className="text-sm font-medium">
                    Volver
                  </span >
                </a>
              </div>
            </div>
          </div>  
        </div>
      </>)
    }
    
    function Errores() {
      return(
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8" role="alert">
          <strong className="font-bold">Problemas encontrados</strong>
          <ul className="list-disc m-4 mb-0">
            {errores?.map((elemento, idx)=><li key={idx}>{elemento}</li>)}
          </ul>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={()=>setErrores(undefined)}>
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>        

      )
    }

    return(<>
                <button className="text-white bg-green-600 rounded-lg p-2 text-2xl m-3" onClick={() => setMostrarModal(true)}>Hazte socio</button>

                {mostrarModal && <>
                    <div id="HazteSocioModal" className="fixed z-40 left-0 top-0 w-full h-full overflow-auto backdrop-blur-xl" onClick={hideModal}>
                        <div className="relative bg-slate-200 text-black my-12 mx-auto p-6 border border-black w-full max-w-5xl" onClick={(e)=>e.stopPropagation()}>
                            <span className="text-gray-400 absolute top-4 right-4 font-bold text-3xl hover:text-black hover:cursor-pointer" onClick={hideModal}>&times;</span>
                            <h1 className="text-3xl font-bold m-4 ml-0">ASÓCIATE A AUVMP</h1>
                            <h2 className="text-2xl m-6 ml-0">Formulario para formalizar el alta como socio en la asociación de usuarios de vehículos de movilidad personal.</h2>
                            {errores && <Errores /> }
                            <form onSubmit={enviar} className="w-full">
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="correo" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo *</label>
                                  <input type="email" name="correo" id="correo" value={inscripcion.correo} placeholder="Tu dirección de correo electrónico" required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, correo:  e.target.value}))} />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="correoRepetido" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Repite correo *</label>
                                  <input type="email" name="correoRepetido" id="correoRepetido" value={inscripcion.correoRepetido}  placeholder="Tu dirección de correo repetida" required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, correoRepetido:  e.target.value}))} />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="clave" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Clave *</label>
                                  <input type="password" name="clave" id="clave" value={inscripcion.clave} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, clave:  e.target.value}))} />
                                  <p className="text-gray-600 text-xs italic">Cuanto mas larga mas segura</p>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="claveRepetida" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Repite clave *</label>
                                  <input type="password" name="claveRepetida" id="claveRepetida" value={inscripcion.claveRepetida} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, claveRepetida:  e.target.value}))} />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="nombre" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre *</label>
                                  <input type="text" name="nombre" id="nombre" value={inscripcion.nombre} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, nombre:  e.target.value}))} />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="dniPasaporte" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">DNI o Pasaporte *</label>
                                  <input type="text" name="dniPasaporte" id="dniPasaporte" value={inscripcion.dniPasaporte} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, dniPasaporte:  e.target.value}))} />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                  <label htmlFor="apellidos" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Apellidos *</label>
                                  <input type="text" name="apellidos" id="apellidos" value={inscripcion.apellidos} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, apellidos:  e.target.value}))} />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="poblacion" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Población *</label>
                                  <input type="text" name="poblacion" id="poblacion" value={inscripcion.poblacion} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, poblacion:  e.target.value}))} />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="codigoPostal" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Código Postal *</label>
                                  <input type="text" name="codigoPostal" id="codigoPostal" value={inscripcion.codigoPostal} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, codigoPostal:  e.target.value}))} />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="telefono" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Teléfono *</label>
                                  <input type="text" name="telefono" id="telefono" value={inscripcion.telefono} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, telefono:  e.target.value}))} />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="nickTelegram" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nick en Telegram *</label>
                                  <input type="text" name="nickTelegram" id="nickTelegram" value={inscripcion.nickTelegram} required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setInscripcion((p:any)=>({...p, nickTelegram:  e.target.value}))} />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label htmlFor="aceptaIncluirseTelegram" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">¿Aceptas entrar en el grupo Telegram de socios AUVMP?</label>
                                  <div className="md:flex md:items-center h-full content-center pb-8">
                                    <input type="checkbox" name="aceptaIncluirseTelegram" id="aceptaIncluirseTelegram" className="block bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-2" checked={inscripcion.aceptaIncluirseTelegram} onChange={(e)=>setInscripcion((p:any)=>({...p, aceptaIncluirseTelegram:  e.target.checked}))} />
                                    <span className="text-sm">Acepto</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                  <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Responsable de los datos: Asociación de Usuarios de Vehículos de Movilidad Personal G88109293. Datos facilitados para la inscripción en libro registro de la Asociación así como para recibir comunicaciones sobre eventos futuros o información de interés de dicha Asociación. Podrás ejercer tus derechos de acceso, rectificación o eliminación de los datos facilitados en este cuestionario enviando un email a admin@auvmp.org *</p>
                                  <div className="md:flex md:items-center mb-1">
                                    <input type="checkbox" name="condicionesAEPD" id="condicionesAEPD" className="block bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-2" required checked={inscripcion.condicionesAEPD} onChange={(e)=>setInscripcion((p:any)=>({...p, condicionesAEPD:  e.target.checked}))} />
                                    <label htmlFor="condicionesAEPD" className="text-sm">Doy mi consentimiento</label>
                                  </div>
                                  <p className="text-gray-600 text-xs italic">Esta es obligatoria por requisito legal</p>
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                  <label htmlFor="descripcionVMP" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Dinos cual es tu VMP *</label>
                                  <input type="text" name="descripcionVMP" id="descripcionVMP" required className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={inscripcion.descripcionVMP} onChange={(e)=>setInscripcion((p:any)=>({...p, descripcionVMP:  e.target.value}))} />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                  <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Voy a realizar el pago de la cuota de 10€ a través de *</p>
                                  <div className="flex flex-wrap justify-around">
                                    <div>
                                      <input type="radio" name="pagoPor" id="pagoPor.paypal" className="mr-2" required checked={inscripcion.pagoPor===formaPago.PAYPAL} onChange={(e)=>setInscripcion((p:any)=>({...p, pagoPor: e.target.checked?formaPago.PAYPAL:""}))} />
                                      <label htmlFor="pagoPor.paypal">Paypal</label>
                                    </div>
                                    <div>
                                      <input type="radio" name="pagoPor" id="pagoPor.transferencia" className="mr-2" required checked={inscripcion.pagoPor===formaPago.TRANSFERENCIA} onChange={(e)=>setInscripcion((p:any)=>({...p, pagoPor: e.target.checked?formaPago.TRANSFERENCIA:""}))} />
                                      <label htmlFor="pagoPor.transferencia">Transferencia</label>
                                    </div>
                                    <div>
                                      <input type="radio" name="pagoPor" id="pagoPor.bizum" className="mr-2" required checked={inscripcion.pagoPor===formaPago.BIZUM} onChange={(e)=>setInscripcion((p:any)=>({...p, pagoPor: e.target.checked?formaPago.BIZUM:""}))} />
                                      <label htmlFor="pagoPor.bizum">Bizum</label>
                                    </div>
                                  </div>
                                  <div className="w-full md:w-1/2 px-3">
                                  </div>
                                  <p className="text-gray-600 text-xs italic mt-2">(Después de enviar el cuestionario te facilitamos los datos para realizar el pago)</p>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <button disabled={estaEnviando} type="reset" className="text-white bg-gray-600 rounded-lg p-2 text-xl m-3" onClick={borrarTodo}>Borrar todo</button>
                                <button disabled={estaEnviando} type="reset" className="text-white bg-gray-600 rounded-lg p-2 text-xl m-3" onClick={()=>{borrarTodo(undefined);hideModal()}}>Cancelar</button>
                                <button disabled={estaEnviando} type="submit" className="text-white bg-green-600 rounded-lg p-2 text-xl m-3">
                                  {estaEnviando && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>} Inscribirse
                                </button>
                              </div>
                            </form>
                        </div>
                    </div>
                </>}

                {(!mostrarModal && graciasAbierto) && <Gracias />}

    </>)
}
