import Header from "../components/header/header"
import Footer from "../components/foooter/footer"
import Image from "next/image"

export default function Catalago(){
    return(
        <main className="bg-[rgba(43,43,45,1)]">
            <Header />
               <section className="flex flex-wrap justify-center text-center">
                <div className="bg-azul_fundo w-[320px] h-[428px] p-4 mb-[13px] mt-[18px]">
                    <Image src="/assets/imgs/image.png" alt="" width={288} height={270}/>
                    <p className=" text-branco text-[15px] font-montserrat leading-[18px]">Calça angelical, top criminal azul,<br></br> 18 passes, etc.</p>
                    <div className="flex justify-center pt-2">
                        <p className="text-[#8E8E93] font-montserrat pr-[12px]">de: R$ 300,00</p>
                        <p className="text-branco font-montserrat">por: R$ 200,00</p>
                    </div>
                    <button className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center mt-4">
                        <Image src="/assets/icons/carrinho.png" alt="" width={19} height={19}/>
                    </button>
                </div>
                <div className="bg-azul_fundo w-[320px] h-[428px] p-4 mb-[13px]">
                    <Image src="/assets/imgs/image.png" alt="" width={288} height={270}/>
                    <p className=" text-branco text-[15px] font-montserrat leading-[18px]">Calça angelical, top criminal azul,<br></br> 18 passes, etc.</p>
                    <div className="flex justify-center pt-2">
                        <p className="text-[#8E8E93] font-montserrat pr-[12px]">de: R$ 300,00</p>
                        <p className="text-branco font-montserrat">por: R$ 200,00</p>
                    </div>
                    <button className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center mt-4">
                        <Image src="/assets/icons/carrinho.png" alt="" width={19} height={19}/>
                    </button>
                </div>
                <div className="bg-azul_fundo w-[320px] h-[428px] p-4 mb-[13px] ">
                    <Image src="/assets/imgs/image.png" alt="" width={288} height={270}/>
                    <p className=" text-branco text-[15px] font-montserrat leading-[18px]">Calça angelical, top criminal azul,<br></br> 18 passes, etc.</p>
                    <div className="flex justify-center pt-2">
                        <p className="text-[#8E8E93] font-montserrat pr-[12px]">de: R$ 300,00</p>
                        <p className="text-branco font-montserrat">por: R$ 200,00</p>
                    </div>
                    <button className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center mt-4">
                        <Image src="/assets/icons/carrinho.png" alt="" width={19} height={19}/>
                    </button>
                </div>
               </section>
               <section className="flex justify-around items-center mt-[22px] mb-[80px]">
                    <button className="border border-azul_letras rounded-[40px] p-1 px-4">
                        <p className="text-azul_letras">Anterior</p>
                    </button>
                    <p className="text-azul_letras">2/10</p>
                    <button className="border border-azul_letras rounded-[40px] p-1 px-4">
                        <p className="text-azul_letras">Próxima</p>
                    </button>
               </section>
               <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mb-[18px]"></hr>
            <Footer />
        </main>
    )
}