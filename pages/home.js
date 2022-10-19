import Footer from "../components/foooter/footer";
import Header from "../components/header/Header";
import Image from "next/image"

export default function Home(){
    return(
        <main className="bg-[rgba(43,43,45,1)]">
            <Header />
            <section className="flex justify-center mt-6 ">
                <div className="bg-[rgba(25,182,229,0.5)] shadow-md rounded-[40px] text-center m-0 w-[300px] h-[262px]">
                    <h2 className="mt-[23px] mb-[16px] text-xl font-semibold text-[#FFFFFF] leading-[27px]">Compre sua conta <br></br> com o Alado!</h2>
                    <div className="flex ">
                        <div>
                            <Image src="/assets/icons/safe.png" alt="" width={50} height={50}/>
                            <p className="text-[10px] font-semibold leading-3 text-[#FFFFFF]">Compra 100% safe.</p>  
                        </div>
                        <div>
                            <Image src="/assets/icons/venda.png" alt="" width={50} height={50}/>
                            <p className="text-[10px] font-semibold leading-3 text-[#FFFFFF]">Mais de 4 mil contas vendidas.</p>  
                        </div>
                        <div>
                            <Image src="/assets/icons/entrega.png" alt="" width={50} height={50}/>
                            <p className="text-[10px] font-semibold leading-3 text-[#FFFFFF]">Entrega imediata.</p>  
                        </div>
                    </div>
                    <button className="mt-[36px] bg-[#19B6E5] rounded-[40px] p-2">
                        <p className="text-[#FFFFFF] text-[15px] leading-[18px] font-semibold">Compre já!</p>
                    </button>
                </div>
            </section>
            <hr className="bg-[#19B6E5]  border-solid mt-[18px]"></hr>
            <section className="flex justify-center">
                <div className="text-center">
                    <h1 className="text-[22px] text-[#19B6E5] leading-[22px] font-bold mb-[19px] mt-[18px]">Feedbacks</h1>
                    <Image src="/assets/imgs/retangulo.png" alt="" width={320} height={197}/>
                </div>               
            </section>
            <hr className="bg-[#19B6E5]  border-solid mt-[18px]"></hr>
            <section className="flex justify-center">
                <div className="text-center">
                    <h1 className="text-[22px] text-[#19B6E5] leading-[22px] font-bold mb-[19px] mt-[18px]">Lançamentos</h1>
                    <div>
                        <div className="bg-[rgba(25,182,229,0.5)] w-[320px] h-[428px]">
                            <Image src="/assets/imgs/image.png" alt="" width={288} height={270}/>
                            <p className=" text-[#FFFFFF] text-[15px] leading-[18px]">Calça angelical, top criminal azul,<br></br> 18 passes, etc.</p>
                            <div className="flex justify-center">
                                <p>de: R$ 300,00</p>
                                <p>por: R$ 200,00</p>
                            </div>
                            <button className="border-[#19B6E5] border px-2 py-1 bg-[#19B6E5] rounded-full text-center">
                                <Image src="/assets/icons/carrinho.png" alt="" width={18.75} height={18.75}/>
                            </button>
                        </div>
                    </div>
                    <button>
                        <p>Ver todas</p>
                    </button>
                </div>
            </section>
            <Footer />   
        </main>
    )
}