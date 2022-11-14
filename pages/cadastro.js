import Footer from "../components/foooter/footer";
import Header from "../components/header/Header";
import { lista_texto, lista_check} from "../objects/list_of_cadastro";

export default function Cadastro(){
    return(
        <main className="bg-[rgba(43,43,45,1)]">
            <Header />
            <section className="text-center p-4">
                <h1 className="text-azul_letras">Cadastre aqui sua conta com o Alado!</h1>
                <for className="flex flex-col p-4 text-branco">
                    {lista_texto.map((element, index)=> (
                        <div className="pb-2 flex flex-col" key={element.text +index}>
                            <label >{element.text}</label>
                            <input className="rounded-lg" type="text" />
                        </div>
                    ))}   
                     {lista_check.map((element, index)=> (
                        <div className="flex justify-evenly" key={element.check +index}>
                            <label className="">{element.check}</label>
                            <input type="checkbox" />
                        </div>
                    ))}   
                    <label className="pb-2">Coloque um video mostrando o inventario da sua conta:</label>
                    <input type="file"name="file" formAction="mp4" />
                </for>   
            </section>
            <hr className="bg-azul_letras border-[1px] border-solid border-azul_letras mt-[10px] mb-[18px]"></hr>
            <Footer />
        </main>
    )
}