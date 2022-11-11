import Header from "../components/header/Header";

export default function Cadastro(){
    return(
        <main className="bg-[rgba(43,43,45,1)]">
            <Header />
            <section className="text-center p-4">
                <h1 className="text-azul_letras">Cadastre aqui sua conta com o Alado!</h1>
                <for className="flex flex-col p-4 text-branco">
                    <label className="pb-2">Email:</label>
                    <input type="email" />
                    <label className="pb-2">Nome da conta:</label>
                    <input type="text" />
                    <label className="pb-2">Nome:</label>
                    <input type="text" />
                    <label className="pb-2">Nome das suas Skins:</label>
                    <input type="text" />
                    <label className="pb-2">Rank da sua conta:</label>
                    <input type="text" />
                    <label className="pb-2">Level da sua conta</label>
                    <input type="text" />
                    <label className="pb-2">Coloque um video mostrando o inventario da sua conta:</label>
                    <input type="file"name="file" formAction="mp4" />
                </for>
            </section>
        </main>
    )
}