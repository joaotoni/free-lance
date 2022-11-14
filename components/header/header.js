import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

export default function Header(){
    const [active, setActive] = useState(false)
    const ToggleMode = () =>{
        setActive(!active)
    }
    return(
        <header className="flex justify-center items-center  pt-3 relative">
            <nav className="absolute mr-[300px] mt-[20px]">
                <button onClick={ToggleMode} className={`${active ?"" : ""} bg-menu w-[30px] h-[30px] bg-contain`}>  
                </button>
            </nav> 
            <nav>
                <Link href="/">
                    <a>
                        <Image src="/assets/icons/logo.png" alt="" width={115.4} height={54.08}/>
                    </a>
                </Link>
            </nav>
            <nav className={`${active ? "w-[150px] h-[100vh] bg-[rgba(43,43,45,1)] translate-x-[120%] ease-in-out" : "w-full h-[100vh] bg-[rgba(43,43,45,1)] translate-x-[100%] ease-in-out"} flex fixed flex-col items-start `}>
                <div className=" flex flex-col left-[1%] flex-nowrap text-azul_letras">
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
            </nav>
        </header>
    )
}