import Link from 'next/link';
import Image from 'next/image';
import SocialBar from './SocialBar';

export default function Cabecera() {
    return (

        <header>

            <nav >
                <div className='container mx-auto '>
                    <div className='flex  justify-between p-4'>
                        <div className='justify-items-start' >

                            <Link href='/'>
                                <Image
                                    src={'/logodge2024enc.png'}
                                    width={160}
                                    height={71}
                                    alt="DGE"
                                />
                            </Link>
                        </div>
                        <SocialBar></SocialBar>
                    </div>

                    <div className='flex justify-end p-2 '>

                        <ul className='flex gap-4 text-black font-bold flex-col sm:flex-row ' >
                            <li className=' hover:text-blue-800'><Link href={'/'}>Inicio</Link></li>
                            <li className=' hover:text-blue-800'><Link href={'/recursos'}>Recursos</Link></li>
                            <li className=' hover:text-blue-800'><Link href={'/institucional,'}>Institucional</Link></li>
                            <li className=' hover:text-blue-800'><Link href={'/Servicios'}>Servicios</Link></li>
                            <li className=' hover:text-blue-800'><Link href={'/novedades'}>Novedades</Link></li>
                            <li className=' hover:text-blue-800'><Link href={'https://www.mendoza.edu.ar/edm-2021/'}>Aulas Virtuales</Link></li>
                            <li className=' hover:text-blue-800'><Link href={'https://dti.mendoza.edu.ar/gem/usuarios/auth_login/login?redirect_url='}>GEI</Link></li>


                        </ul>
                    </div>
                </div>
            </nav>


        </header >

    )
}