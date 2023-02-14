import auvmpVideo from './recursos/AUVMP-PwP-hoCpIfU.mp4'
import auvmpLogo from './recursos/AUVMP_logo.png'

import p1 from './recursos/PATINETEWEB.png'
import p2 from './recursos/PATIN.png'
import p3 from './recursos/ONEWHEEL.png'
import p4 from './recursos/MONOCICLOWEB.png'

import fotoEjemplo1 from './recursos/foto-ejemplo1.jpg'
import fotoEjemplo2 from './recursos/foto-ejemplo2.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons'

const App = () => {
  return (<>
    <div className="grid grid-flow-row grid-rows-[auto,1fr,auto] min-h-screen">
      <header className='mb-24'>
        <div id="navegacionSuperior" className="flex flex-row justify-between bg-gray-600 h-20 text-white">
          <div id="logo">
            <img className="m-4 h-12" src={auvmpLogo} alt="AUVMP" />
          </div>
          <nav className='grid place-items-center' id="navegacionPrincipal">
            <ul className="flex justify-center justify-items-center w-96">
              <li className="grow grid place-items-center"><img className="h-8 mx-auto" src={p1} alt="Patinete" />Normativa</li>
              <li className="grow grid place-items-center"><img className="h-8" src={p2} alt="Patin" />Lorem1</li>
              <li className="grow grid place-items-center"><img className="h-8" src={p3} alt="OneWheel" />Lorem2</li>
              <li className="grow grid place-items-center"><img className="h-8" src={p4} alt="Monociclo" />Lorem3</li>
            </ul>
          </nav>
          <div id="hazteSocio">
            <button className="text-white bg-green-600 rounded-lg p-2 text-2xl m-3">Hazte socio</button>
          </div>
        </div>
        <div id="presentacionPrincipal" className='relative flex items-center justify-center overflow-hidden h-[50vh] mt-8'>
          <div>
            <p className='relative z-30 p-5 text-2xl text-white bg-green-300 bg-opacity-50 rounded-xl'>¡Bienvenidos al mundo del vmp!</p>
          </div>
          <video autoPlay loop muted className='absolute z-10 w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <source src={auvmpVideo} />
          </video>
        </div>
      </header>
      <div className="w-full flex flex-row">
      <aside className="basis-1/5">
        <div className="w-4/5 h-full mx-auto mt-4">
          <a className="twitter-timeline" data-width="100%" data-height="640px" data-dnt="true" data-theme="light" href="https://twitter.com/auvmp_?ref_src=twsrc%5Etfw">
            Tweets de la Auvmp
          </a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </aside>
      <main className="basis-3/5w-full max-w-6xl mx-auto">
        <article>
          <div className="w-4/5 m-auto mb-24 border-b border-gray-300">
            <div className="opacity-50 text-center ">Acerca de Nosotros</div>
            <div className="my-4 text-3xl leading-10"><br/></div>
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
              <img src={fotoEjemplo1} alt="" />
            </div>
          </article>
        </section>
      </main>
      <div className="basis-1/5"></div>
      </div>
      <footer>
        <div className="w-full bg-slate-300 min-h-min grid grid-flow-row auto-rows-min justify-center place-items-center">
          <p className="text-5xl m-4">Siguenos en nuestras redes sociales:</p>
          <div>
            <ul className="flex justify-center place-items-center m-6">
              <li>
                <a role="button" className="bg-gray-800 hover:bg-gray-600 text-gray-200 text-sm border rounded-full block" href="https://twitter.com/auvmp_" target="_blank"><FontAwesomeIcon aria-hidden="true" title="Twitter" icon={faTwitter} className="w-16 m-4 inline" /></a>
              </li>
              <li>
                <a role="button" className="bg-gray-800 hover:bg-gray-600 text-gray-200 text-sm border rounded-full block" href="https://www.instagram.com/auvmp_/" target="_blank"><FontAwesomeIcon aria-hidden="true" title="Instagram" icon={faInstagram} className="w-16 m-4 inline" /></a>
              </li>
              <li>
                <a role="button" className="bg-gray-800 hover:bg-gray-600 text-gray-200 text-sm border rounded-full block" href="https://www.tiktok.com/@auvmp_" target="_blank"><FontAwesomeIcon aria-hidden="true" title="Tiktok" icon={faTiktok} className="w-16 m-4 inline" /></a>
              </li>
              <li>
                <a role="button" className="bg-gray-800 hover:bg-gray-600 text-gray-200 text-sm border rounded-full block" href="https://t.me/auvmp" target="_blank"><FontAwesomeIcon aria-hidden="true" title="Telegrem" icon={faTelegram} className="w-16 m-4 inline" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-800 text-gray-200 flex justify-center">
          <ul className="flex justify-center place-items-center m-3 space-x-8">
            <li>Copyright © 2023 AUVMP</li>
            <li><a href="mailto:info@auvmp.org">Email de Contacto</a></li>
            <li><a href="./PoliticaDePrivacidad">Politica de privacidad</a></li>
          </ul>
        </div>
      </footer>
    </div>
    
  </>)
}

export default App
