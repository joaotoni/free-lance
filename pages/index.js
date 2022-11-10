import Footer from "../components/foooter/footer";
import Header from "../components/header/Header";
import Image from "next/image"
import Link from "next/link"
import Card from "../components/card/card";

export default function Home(){
    return(
        <main className="bg-fundo">
            <Header />
            <section className="flex justify-center mt-6 ">
                <div className="bg-azul_fundo shadow-md rounded-[40px] text-center m-0 w-[300px] h-[270px] ">
                    <h2 className="mt-[23px] mb-[16px] text-xl font-semibold font-montserrat text-branco leading-[27px]">Compre sua conta <br></br> com o Alado!</h2>
                    <div className="flex p-2 ">
                        <div>
                            <Image src="/assets/icons/safe.png" alt="" width={50} height={50}/>
                            <p className="text-[10px] font-semibold leading-3 font-montserrat text-branco">Compra 100% safe.</p>  
                        </div>
                        <div>
                            <Image src="/assets/icons/venda.png" alt="" width={50} height={50}/>
                            <p className="text-[10px] font-semibold leading-3 font-montserrat text-branco">Mais de 4 mil contas vendidas.</p>  
                        </div>
                        <div>
                            <Image src="/assets/icons/entrega.png" alt="" width={50} height={50}/>
                            <p className="text-[10px] font-semibold leading-3 font-montserrat text-branco">Entrega imediata.</p>  
                        </div>
                    </div>
                    <Link href="/catalago">
                        <button className="mt-[36px] bg-azul_letras rounded-[40px] p-2">
                            <p className="text-branco font-montserrat text-[15px] leading-[18px] font-semibold">Compre já!</p>
                        </button>
                    </Link>
                </div>
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mt-[18px]"></hr>
            <section className="flex justify-center">
                <div className="text-center">
                    <h1 className="text-[22px] text-azul_letras leading-[22px] font-montserrat font-bold mb-[19px] mt-[18px]">Feedbacks</h1>
                    <Image src="/assets/imgs/retangulo.png" alt="" width={320} height={197}/>
                </div>               
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mt-[18px]"></hr>
            <section className="flex flex-wrap justify-center text-center w-fit">
                    <h1 className="text-[22px] text-azul_letras font-montserrat leading-[22px] font-bold mb-[19px] mt-[18px]">Lançamentos</h1>
                    <div className="overflow-x-scroll w-screen">
                        <div className="flex gap-6 w-fit px-6">
                            <Card /> 
                        </div>
                    </div>
                    <button className=" border border-azul_letras rounded-[40px] p-1 px-4 mt-4">
                        <p className="text-azul_letras font-montserrat">Ver todas</p>
                    </button>
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mt-[18px] mb-[18px]"></hr>
            <section className="flex justify-center mt-6 ">
                <div className="bg-azul_fundo shadow-md rounded-[40px] text-center m-0 w-[240px] h-[170px] ">
                    <h2 className="mt-[23px] mb-[6px] text-xl font-semibold font-montserrat text-branco leading-[27px]">Venda sua conta <br></br> com o Alado!</h2>
                    <Link href="/catalago">
                        <button className="mt-[36px] bg-azul_letras rounded-[40px] p-3">
                            <p className="text-branco font-montserrat text-[15px] leading-[18px] font-semibold">Venda já!</p>
                        </button>
                    </Link>
                </div>
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mt-[18px] mb-[18px]"></hr>
            <Footer />   
        </main>
    )
}