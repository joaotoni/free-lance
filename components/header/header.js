import Image from "next/image"

export default function Header(){
    return(
        <header className="flex justify-between items-baseline mt-3">
            <nav>
                <button>
                    <Image src="/assets/icons/menu.png" alt="" width={30} height={30}/>
                </button>
            </nav>
            <nav>
                <button>
                    <Image src="/assets/icons/logo.png" alt="" width={115.4} height={54.08}/>
                </button>
            </nav>
            <nav>
                <button>
                    <Image src="/assets/icons/perfil.png" alt="" width={30} height={30}/>
                </button>
            </nav>
        </header>
    )
}