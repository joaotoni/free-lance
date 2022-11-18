import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Card from "../components/card/card";
import { useRouter } from 'next/router'

export default function Catalago({numberOfCards, page}){
    const router = useRouter()
    const lastPage = Math.ceil(numberOfCards / 3)
    return(
        <main className="bg-fundo">
            <Header />
               <section className="flex flex-wrap justify-center text-center">
                <Card />
               </section>
               <section className="flex justify-around items-center mt-[22px] mb-[80px]">
                    <button className="border border-azul_letras rounded-[40px] p-1 px-4" onClick={() => router.push(`/catalago?page=${page - 1}`)}
                        disabled={page <= 1}>
                        <p className="text-azul_letras">Anterior</p>
                    </button>
                    <p className="text-azul_letras">2/10</p>
                    <button className="border border-azul_letras rounded-[40px] p-1 px-4" onClick={() => router.push(`/catalago?page=${page + 1}`)}
                        disabled={page >= lastPage}>
                        <p className="text-azul_letras">Próxima</p>
                    </button>
               </section>
               <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mb-[18px]"></hr>
            <Footer />
        </main>
    )
}