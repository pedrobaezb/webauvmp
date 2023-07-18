import Image from "next/image"
import  fotoGeneralMiembrosAuvmp from '../recursos/foto_general_miembros_auvmp.jpg'


import NavegacionPrincipal from "@/components/NavecacionPrincipal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons'

export default Index

function Index() {
  return(<>
      <header>
        <NavegacionPrincipal />
        <div className="container mx-auto px-8">
          <div className="hero" style={{backgroundImage: 'url(/AUVMP_intro_imagen.jpg)'}}>
            <div className="hero-overlay bg-opacity-60">
              <video autoPlay loop muted>
                <source src="/AUVMP_intro.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <h1 className="mb-5 text-5xl font-bold">Bienvenido a la <span className="text-gray-900 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">AU</span><span className="text-green-600">VMP</span></h1>
              </div>
            </div>
          </div>
        </div>
      </header>
        <div className="container mx-auto my-8 px-8 flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow w-9/12">
            <main>
              <article>
                <div className="w-4/5 m-auto mb-24 border-b border-gray-300">
                  <h2 className="text-3xl text-center">Acerca de Nosotros</h2>
                  <div className="my-1 text-3xl leading-10"><br/></div>
                </div>
              </article>
              <section>
                <article>
                  <div className="grid grid-cols-2 gap-4 mb-24">
                    <div id="w-node-_86e64837-0616-515b-4568-76c147234d34-e6de2bd7">
                      <div className="home-section-wrap">
                        <h2 className="section-heading mb-4">¿Quienes somos?</h2>
                        <p className="paragraph-light font-montserrat">La <span className="font-bold">Asociación de Usuarios de Vehículos de Movilidad Personal (AUVMP)</span> es una organización sin ánimo de lucro que agrupa a la mayoría de usuarios de vehículos de movilidad personal, y a otros colectivos de usuarios de vehículos eléctricos.</p>
                        <p className="paragraph-light font-montserrat">Desde su creación, la asociación trabaja para mejorar las condiciones de transporte de los ciudadanos, a través del fomento de la movilidad eléctrica.</p>
                        <p className="paragraph-light font-montserrat">La AUVMP desarrolla proyectos e iniciativas de todo tipo, alternando siempre la propuesta y la negociación con las autoridades locales. Más allá de sus órganos directivos (la Junta Directiva), la Asociación se organiza en torno a diferentes áreas de trabajo, en las que participan las asociaciones federadas y otras entidades asociadas. Además la AUVMP organiza regularmente rutas para disfrutar y sacar todo el rendimiento posible a nuestro vehículo de movilidad personal.</p>
                      </div>
                    </div>
                    <Image src={fotoGeneralMiembrosAuvmp} alt="" priority={false} />
                  </div>
                </article>
              </section>
            </main>
          </div> 
          <div className="divider lg:divider-horizontal" /> 
          <div className="grid flex-grow w-3/12">
            <aside>
              <p>Siguenos en nuestras redes sociales:</p>
              <ul className="flex flex-wrap items-center gap-2 place-items-center m-6 justify-around">
                <li>
                  <a role="button" className="bg-gray-800 hover:bg-gray-600 text-gray-200 text-sm border rounded-full block" href="https://t.me/auvmp" target="_blank"><FontAwesomeIcon aria-hidden="true" title="Telegram" titleId="IconoTelegram" icon={faTelegram} className="w-16 m-4 inline" /></a>
                </li>
                <li>
                  <a role="button" className="bg-gray-800 hover:bg-gray-600 text-gray-200 text-sm border rounded-full block" href="https://www.tiktok.com/@auvmp_" target="_blank"><FontAwesomeIcon aria-hidden="true" title="Tiktok" titleId="IconoTiktok" icon={faTiktok} className="w-16 m-4 inline" /></a>
                </li>
                <li>
                  <a role="button" className="bg-gray-800 hover:bg-gray-600 text-gray-200 text-sm border rounded-full block" href="https://www.instagram.com/auvmp_/" target="_blank"><FontAwesomeIcon aria-hidden="true" title="Instagram" titleId="IconoInstagram" icon={faInstagram} className="w-16 m-4 inline" /></a>
                </li>
                <li>
                  <a role="button" className="bg-gray-800 hover:bg-gray-600 text-gray-200 text-sm border rounded-full block" href="https://twitter.com/auvmp_" target="_blank"><FontAwesomeIcon aria-hidden="true" title="Twitter" titleId="iconoTwitter" icon={faTwitter} className="w-16 m-4 inline" /></a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2023 Asociación de Usuarios de Vehículos de Movilidad Personal - AUVMP Todos los derechos reservados.</p>
            <p><a className="link" href="mailto:info@auvmp.org">Email de Contacto</a> <a className="link" href="./PoliticaDePrivacidad">Politica de privacidad</a></p>
          </div>
        </footer>
  </>)
}
