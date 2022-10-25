import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <header className="flex justify-center  items-baseline pt-3 relative">
            <button className="absolute mr-[300px] mt-[20px]">
                <Image src="/assets/icons/menu.png" alt="" width={30} height={30}/>
            </button>
            <nav>
                <Link href="/">
                    <a>
                        <Image src="/assets/icons/logo.png" alt="" width={115.4} height={54.08}/>
                    </a>
                </Link>
            </nav>
            
        </header>
    )
}