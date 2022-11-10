import Header from "../components/header/Header";

export default function Cadastro(){
    return(
        <main>
            <Header />
            <section>
                <h1>Cadastre aqui sua conta com o Alado!</h1>
                <div>
                    <label>Email:</label>
                    <input type="email" />
                    <label>Nome da conta:</label>
                    <input type="text" />
                    <label>Nome:</label>
                    <input type="text" />
                    <label>Nome das suas Skins:</label>
                    <input type="text" />
                    <label>Rank da sua conta:</label>
                    <input type="text" />
                    <label>Level da sua conta</label>
                    <input type="text" />
                    <label>Coloque um video mostrando o inventario da sua conta</label>
                    <input type="" />
                </div>
            </section>
        </main>
    )
}