import Footer from "../components/foooter/footer";
import Header from "../components/header/Header";
import Image from "next/image"
import { List_of_perfil } from "../objects/list_of_perfil";

export default function Perfil(){
    return(
        <main className="bg-[rgba(43,43,45,1)]">
            <Header />
            <section className="flex flex-wrap justify-center text-center mb-[60px] mt-[40px]">
                {List_of_perfil.map((element, index) =>(
                    <>
                        <div className="bg-azul_fundo w-[320px] h-[400px] p-4 mb-[13px] " key={element.description + index}>
                            <Image src={element.img} alt="" width={288} height={270}/>
                            <div className="flex justify-center pt-2">
                                <p className="text-[#8E8E93] font-montserrat pr-[12px]">{element.value_original}</p>
                                <p className="text-branco font-montserrat">{element.value_desconto}</p>
                            </div>
                            <button className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center mt-4">
                                <Image src={element.img2} alt="" width={19} height={19}/>
                            </button>
                        </div>
                        <p className=" text-branco text-[20px] font-montserrat max-w-[273.22px] mb-[18px]  max-h-[36px] leading-[18px]">{element.description}</p>
                        <div className="bg-azul_fundo w-[320px] h-[400px] p-4 mb-[13px] " key={element.description + index}>
                            <Image src={element.img} alt="" width={288} height={270}/>
                            <div className="flex justify-center pt-2">
                                <p className="text-[#8E8E93] font-montserrat pr-[12px]">{element.value_original}</p>
                                <p className="text-branco font-montserrat">{element.value_desconto}</p>
                            </div>
                            <button className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center mt-4">
                                <Image src={element.img2} alt="" width={19} height={19}/>
                            </button>
                        </div>
                        <p className=" text-branco text-[20px] font-montserrat  mb-[18px]  max-h-[36px] max-w-[273.22px] leading-[18px]">{element.description}</p>
                    </>
                ))}
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mb-[18px]"></hr>
            <Footer />
        </main>
    )
}