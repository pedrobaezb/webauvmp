import auvmpVideo from './recursos/AUVMP-PwP-hoCpIfU.mp4'
import auvmpLogo from './recursos/AUVMP_logo.png'

import p1 from './recursos/PATINETEWEB.png'
import p2 from './recursos/PATIN.png'
import p3 from './recursos/ONEWHEEL.png'
import p4 from './recursos/MONOCICLOWEB.png'

import fotoEjemplo1 from './recursos/foto-ejemplo1.jpg'
import fotoEjemplo2 from './recursos/foto-ejemplo2.jpg'

const App = () => {
  return (<>
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
    <main className="w-full max-w-6xl mx-auto">
      <article>
        <div className="w-4/5 m-auto mb-24 border-b border-gray-300">
          <div className="opacity-50 text-center ">¿Quienes somos?</div>
          <div className="my-4 text-3xl leading-10"><br/></div>
        </div>
      </article>
      <section>
        <article>
          <div className="grid grid-cols-2 gap-4 mb-24">
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d34-e6de2bd7">
              <div className="home-section-wrap">
                <div className="label cc-light">Acerca de</div>
                <h2 className="section-heading">¿Quienes somos?</h2>
                <p className="paragraph-light font-montserrat">La <span className="font-bold">Asociación de Usuarios de Vehículos de Movilidad Personal (AUVMP)</span> es una organización sin ánimo de lucro que agrupa a la mayoría de usuarios de vehículos de movilidad personal, y a otros colectivos de usuarios de vehículos eléctricos.</p>
                <p className="paragraph-light font-montserrat">Desde su creación, la asociación trabaja para mejorar las condiciones de transporte de los ciudadanos, a través del fomento de la movilidad eléctrica.</p>
                <p className="paragraph-light font-montserrat">La AUVMP desarrolla proyectos e iniciativas de todo tipo, alternando siempre la propuesta y la negociación con las autoridades locales. Más allá de sus órganos directivos (la Junta Directiva), la Asociación se organiza en torno a diferentes áreas de trabajo, en las que participan las asociaciones federadas y otras entidades asociadas. Además la AUVMP organiza regularmente rutas para disfrutar y sacar todo el rendimiento posible a nuestro vehículo de movilidad personal.</p>
              </div>
              <a href="/about" className="button w-inline-block">
                <div>Learn More</div>
              </a>
            </div>
            <img src={fotoEjemplo1} alt="" />
          </div>
        </article>
        <article>
          <div className="grid grid-cols-2 gap-4 mb-24">
          <img src={fotoEjemplo2} alt="" />
            <div id="w-node-_86e64837-0616-515b-4568-76c147234d41-e6de2bd7">
              <div className="home-section-wrap">
                <div className="label cc-light">Team</div>
                <h2 className="section-heading">What we do</h2>
                <p className="paragraph-light">Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</p>
              </div>
              <a href="/team" className="button w-inline-block">
                <div>Learn More</div>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  </>)
}

export default App

/*
          .about-grid {
    margin-bottom: 80px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-column-gap: 80px;
    grid-row-gap: 30px;
    grid-template-areas: ". .";
    -ms-grid-columns: 1fr 80px 2fr;
    grid-template-columns: 1fr 2fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
}
.w-layout-grid {
    display: -ms-grid;
    display: grid;
    grid-auto-columns: 1fr;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
}
*/
//<div class="divider"></div><div class="home-content-wrap"><div class="w-layout-grid about-grid"><div id="w-node-_86e64837-0616-515b-4568-76c147234d34-e6de2bd7"><div class="home-section-wrap"><div class="label cc-light">About</div><h2 class="section-heading">Who we are</h2><p class="paragraph-light">Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</p></div><a href="/about" class="button w-inline-block"><div>Learn More</div></a></div><img src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5cdc00bd9bd8ea70674d1cbf_placeholder%203.svg" id="w-node-_86e64837-0616-515b-4568-76c147234d3f-e6de2bd7" alt=""></div><div class="w-layout-grid about-grid cc-about-2"><div id="w-node-_86e64837-0616-515b-4568-76c147234d41-e6de2bd7"><div class="home-section-wrap"><div class="label cc-light">Team</div><h2 class="section-heading">What we do</h2><p class="paragraph-light">Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</p></div><a href="/team" class="button w-inline-block"><div>Learn More</div></a></div><img src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5cdc00be4b4caf93455d66a1_placeholder%201.svg" id="w-node-_86e64837-0616-515b-4568-76c147234d4c-e6de2bd7" alt=""></div></div>-->