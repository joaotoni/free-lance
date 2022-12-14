import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import Card_perfil from "../components/card/card_perfil";

export default function Perfil(){
    return(
        <main className="bg-fundo">
            <Header />
            <section className="flex flex-wrap justify-center text-center mb-[60px] mt-[40px]">
                <Card_perfil />
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mb-[18px]"></hr>
            <Footer />
        </main>
    )
}