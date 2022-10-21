import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <header className="flex justify-around items-baseline pt-3">
            <nav>
                <button>
                    <Image src="/assets/icons/menu.png" alt="" width={30} height={30}/>
                </button>
            </nav>
            <nav>
                <Link href="/">
                    <a>
                        <Image src="/assets/icons/logo.png" alt="" width={115.4} height={54.08}/>
                    </a>
                </Link>
            </nav>
            <nav>
                <button>
                    <Image src="/assets/icons/perfil.png" alt="" width={30} height={30}/>
                </button>
            </nav>
        </header>
    )
}