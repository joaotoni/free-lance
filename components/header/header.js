import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

export default function Header(){
    const [active, setActive] = useState(false)
    return(
        <header className="flex justify-center  items-baseline pt-3 relative">
            <nav>
                <button onClick={() => setActive(!active)} className="absolute mr-[300px] mt-[20px]">
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
            <div className={active ? "fixed w-full h-[100vh] bg-[rgba(43,43,45,1)] translate-x-[50%] ease-in-out" : " fixed w-full h-[100vh] bg-[rgba(43,43,45,1)] translate-x-[100%] ease-in-out"}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/catalago">
                        <a>Catalago</a>
                    </Link>
                    <Link href="/perfil">
                        <a>Perfil</a>
                    </Link> 
                </div>
        </header>
    )
}