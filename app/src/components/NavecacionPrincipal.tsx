import Image from "next/image";
import auvmpLogo from '../recursos/AUVMP_logo.png'
import HazteSocio from '../components/HazteSocio'
/*
import iconoPatinete from '../recursos/PATINETEWEB.png'
import iconoPatin from '../recursos/PATIN.png'
import iconoOneWheel from '../recursos/ONEWHEEL.png'
import monociclo from '../recursos/MONOCICLOWEB.png'
*/

export default function NavegacionPrincipal() {
    return (
        <nav className="m-4">
            <div className="navbar bg-primary text-primary-content rounded-box">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {/*<nav className='grid place-items-center' id="navegacionPrincipal">
            <ul className="flex justify-center justify-items-center">
              <li className="grow grid place-items-center mx-4"><Image className="w-8 h-8 mx-auto" src={iconoPatinete} alt="Patinete" />Asociación</li>
              <li className="grow grid place-items-center mx-4"><Image className="w-8 h-8" src={iconoPatin} alt="Patin" />Normativa</li>
              <li className="grow grid place-items-center mx-4"><Image className="w-8 h-8" src={iconoOneWheel} alt="OneWheel" />Eventos y Rutas</li>
              <li className="grow grid place-items-center mx-4"><Image className="w-8 h-8" src={monociclo} alt="Monociclo" />Colaboradores</li>
            </ul>
    </nav>*/}

                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <Image className="m-4 h-12 w-56" src={auvmpLogo} alt="AUVMP" priority={true} />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex flex-wrap items-center justify-end gap-2">
                    <HazteSocio />
                    <button className="btn btn-secondary text-xl">Entrada socios</button>
                </div>
            </div>
        </nav>
    )
}