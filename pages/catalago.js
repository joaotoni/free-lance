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
                    <a className="text-azul_letras">2/10</a>
                    <button className="border border-azul_letras rounded-[40px] p-1 px-4" onClick={() => router.push(`/catalago?page=${page + 1}`)}
                        disabled={page >= lastPage}>
                        <a className="text-azul_letras">Próxima</a>
                    </button>
               </section>
               <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mb-[18px]"></hr>
            <Footer />
        </main>
    )
}
export async function getServerSideProps({ query: {page= 1} }) {
    const { API_URL } = process.env

    const start = +page === 1 ? 0 : (+page - 1) * 3

    const numberOfCardsResponse = await fetch(`${API_URL}/movies/count`)
    const numberOfCards = await numberOfCardsResponse.json()

    const res = await fetch(`${API_URL}/movies?_limit=3&_start=${start}`)
    const data = await res.json()
    return {
        props: {
            movies: data,
            page: +page,
            numberOfCards
        }
    }
}