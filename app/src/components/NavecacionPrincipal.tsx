import Image from "next/image";
import auvmpLogo from '../recursos/AUVMP_logo.png'
import HazteSocio from '../components/HazteSocio'
import Link from "next/link";
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
                    <Link href="/"><Image className="m-4 h-12 w-56" src={auvmpLogo} alt="AUVMP" priority={true} /></Link>
                </div>
                <div className="navbar-end flex flex-wrap items-center justify-end gap-2">
                    <HazteSocio />
                    <button className="btn btn-secondary text-xl">Entrada socios</button>
                </div>
            </div>
        </nav>
    )
}