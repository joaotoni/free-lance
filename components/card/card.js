import Image from "next/image"
import { List_of_perfil } from "../../objects/list_of_perfil";
import Link from "next/link"

export default function Card(){
    return(
        <>
            {List_of_perfil.map((element, index)=>(
                <>
                    <div className="bg-azul_fundo w-[320px] h-[428px] p-4 mb-[18px] " key={element.description +index}>
                        <Image src={element.img} alt="" width={288} height={270}/>
                        <p className=" text-branco text-[15px] font-montserrat leading-[18px]">{element.description}</p>
                        <div className="flex justify-center pt-2 mb-4">
                            <p className="text-[#8E8E93] font-montserrat pr-[12px]">{element.value_original}</p>
                            <p className="text-branco font-montserrat">{element.value_desconto}</p>
                        </div>
                        <Link  href="/perfil">
                            <a className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center">
                                <Image src={element.img2} alt="" width={19} height={19}/>
                            </a>
                        </Link>
                    </div>
                    <div className="bg-azul_fundo w-[320px] h-[428px] p-4 mb-[18px]" key={element.description +index}>
                        <Image src={element.img} alt="" width={288} height={270}/>
                        <p className=" text-branco text-[15px] font-montserrat leading-[18px]">{element.description}</p>
                        <div className="flex justify-center pt-2 mb-4">
                            <p className="text-[#8E8E93] font-montserrat pr-[12px]">{element.value_original}</p>
                            <p className="text-branco font-montserrat">{element.value_desconto}</p>
                        </div>
                        <Link  href="/perfil">
                            <a className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center">
                                <Image src={element.img2} alt="" width={19} height={19}/>
                            </a>
                        </Link>
                    </div><div className="bg-azul_fundo w-[320px] h-[428px] p-4 mb-[18px]" key={element.description +index}>
                        <Image src={element.img} alt="" width={288} height={270}/>
                        <p className=" text-branco text-[15px] font-montserrat leading-[18px]">{element.description}</p>
                        <div className="flex justify-center pt-2 mb-4">
                            <p className="text-[#8E8E93] font-montserrat pr-[12px]">{element.value_original}</p>
                            <p className="text-branco font-montserrat">{element.value_desconto}</p>
                        </div>
                        <Link  href="/perfil">
                            <a className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center">
                                <Image src={element.img2} alt="" width={19} height={19}/>
                            </a>
                        </Link>
                    </div><div className="bg-azul_fundo w-[320px] h-[428px] p-4 mb-[18px]" key={element.description +index}>
                        <Image src={element.img} alt="" width={288} height={270}/>
                        <p className=" text-branco text-[15px] font-montserrat leading-[18px]">{element.description}</p>
                        <div className="flex justify-center pt-2 mb-4">
                            <p className="text-[#8E8E93] font-montserrat pr-[12px]">{element.value_original}</p>
                            <p className="text-branco font-montserrat">{element.value_desconto}</p>
                        </div>
                        <Link  href="/perfil">
                            <a className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center">
                                <Image src={element.img2} alt="" width={19} height={19}/>
                            </a>
                        </Link>
                    </div>
                </>
            ))}
        </>
    )
}