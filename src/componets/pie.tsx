import Link from 'next/link';

export default function Pie() {
    return (
        <footer className=" text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>© 2026 Mi Sitio Web &middot; Equipo de Desarrollo  <Link href={'https://www.mendoza.edu.ar/'}  >"Portal Educativo DGE"</Link></p>
            </div>
        </footer>)
}