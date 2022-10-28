import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

export default function Header(){
    const [active, setActive] = useState(false)
    const ToggleMode = () =>{
        setActive(!active)
    }
    return(
        <header className="flex justify-center  items-baseline pt-3 relative">
            <nav>
                <div onClick={ToggleMode} className={`${false ?"" : "absolute mr-[300px] mt-[20px]"} bg-menu w-[50px] h-[50px] bg-cover`}>  
                oi

                </div>
            </nav> 
            <nav>
                <Link href="/">
                    <a>
                        <Image src="/assets/icons/logo.png" alt="" width={115.4} height={54.08}/>
                    </a>
                </Link>
            </nav>
            {/* <div className={active ? "fixed w-full h-[100vh] bg-[rgba(43,43,45,1)] translate-x-[50%] ease-in-out" : " fixed w-full h-[100vh] bg-[rgba(43,43,45,1)] translate-x-[100%] ease-in-out"}>
                <div className=" flex flex-col left-[1%] m-[45px] flex-nowrap text-branco">
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
            </div> */}
        </header>
    )
}