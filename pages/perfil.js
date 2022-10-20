import Footer from "../components/foooter/footer";
import Header from "../components/header/Header";
import Image from "next/image"

export default function Perfil(){
    return(
        <main className="bg-[rgba(43,43,45,1)]">
            <Header />
            <section className="flex flex-wrap justify-center text-center mb-[60px] mt-[40px]">
                <div className="bg-azul_fundo w-[320px] h-[400px] p-4 mb-[13px] ">
                    <Image src="/assets/imgs/image.png" alt="" width={288} height={270}/>
                    <div className="flex justify-center pt-2">
                        <p className="text-[#8E8E93] font-montserrat pr-[12px]">de: R$ 300,00</p>
                        <p className="text-branco font-montserrat">por: R$ 200,00</p>
                    </div>
                    <button className="border-azul_letras border px-2 py-1 bg-azul_letras rounded-full text-center mt-4">
                        <Image src="/assets/icons/carrinho.png" alt="" width={19} height={19}/>
                    </button>
                </div>
                <p className=" text-branco text-[20px] font-montserrat leading-[18px]">Calça angelical, top criminal azul,<br></br> 18 passes, etc.</p>
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mb-[18px]"></hr>
            <Footer />
        </main>
    )
}