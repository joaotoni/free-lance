import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import { lista_texto, lista_check} from "../objects/list_of_cadastro";

export default function Cadastro(){
    return(
        <main className="bg-fundo">
            <Header />
            <section className="text-center p-4">
                <h1 className="text-azul_letras">Cadastre aqui sua conta com o Alado!</h1>
                <for className="flex flex-col p-4 items-center text-branco bg-azul_fundo rounded-lg ">
                    {lista_texto.map((element, index)=> (
                        <div className="p-2 flex flex-col" key={element.text +index}>
                            <label className="text-branco font-montserrat text-[15px] leading-[18px] font-semibold" >{element.text}</label>
                            <input className="rounded-lg" type="text" />
                        </div>
                    ))}   
                     {lista_check.map((element, index)=> (
                        <div className="flex justify-evenly p-2" key={element.check +index}>
                            <label className="text-branco font-montserrat text-[15px] leading-[18px] font-semibold">{element.check}</label>
                            <input type="checkbox" />
                        </div>
                    ))}   
                    <label className="text-branco font-montserrat text-[15px] leading-[18px] font-semibold p-2">Coloque um video mostrando o inventario da sua conta:</label>
                    <input type="file"name="file" formAction="mp4" />
                    <button className="mt-[36px] bg-azul_letras rounded-[40px] p-2 px-4">Enviar</button>
                </for>   
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mt-[10px] mb-[18px]"></hr>
            <Footer />
        </main>
    )
}