import Image from "next/image";

export default function Footer(){
    return(
        <footer>
            <section className="ml-[30px]">
                <h3 className="font-[Montserrat] not-italic font-medium text-xl text-[#FFFFFF]">Meios de pagamento</h3>
                <div>
                    <Image src="/assets/icons/picpay.png" alt="" width={80} height={40}/>
                    <Image src="/assets/icons/pix.png" alt="" width={80} height={40}/>
                </div>
            </section>
            <section className="ml-[30px]">
                <h3 className="font-[Montserrat] not-italic font-medium text-xl text-[#FFFFFF]">Fale conosco</h3>
                <div className="flex gap-[5px] mt-[5px]">
                    <Image src="/assets/icons/email.png" alt="" width={30} height={30}/>
                    <p className="text-[#FFFFFF]">aladofreefire7@gmail.com</p>
                </div>
                <div className="flex gap-[5px]">
                    <Image src="/assets/icons/whats.png" alt="" width={30} height={30}/>
                    <p className="text-[#FFFFFF]">+55 (88) 9 9419-2307</p>
                </div>
            </section>
            <section className="ml-[30px] mt-[20px]">
                <h3 className="text-[#FFFFFF] mb-[6px] font-[Montserrat] not-italic font-medium text-xl">Siga o alado</h3>
                <button>
                    <Image src="/assets/icons/instagram.png" alt="" width={40} height={40}/>
                </button>
                <button>
                    <Image src="/assets/icons/tiktok.png" alt="" width={40} height={40}/>
                </button>
                <button>
                    <Image src="/assets/icons/youtube.png" alt="" width={40} height={40}/>
                </button>
            </section>
            <hr className=" bg-[#19B6E5] border-[1px] border-solid border-[#19B6E5] mt-[20px] mb-[17.5px]"></hr>
            <section className="font-[Montserrat] not-italic font-medium text-center text-[#FFFFFF] ">
                <h3>Alado Vendas - CNPJ: 46.254.296/0001-78 (c)<br></br> Todos os direitos reservados. 2022</h3>
            </section>
        </footer>
    )
}