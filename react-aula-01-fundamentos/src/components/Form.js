import {useState} from "react";

const Form = () => {
    // criando os estados
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")

    //criando a função que irá lidar com a submissão do formulário
    const handleSubmit = (evento) =>{

        evento.preventDefault()

        // aqui os dados serão enviados
        console.log(nome);
        console.log(sobrenome);
        console.log(email);
    }


    return(
        <>
            <br />
            <h3>Formulário de cadastro: </h3>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Insira seu nome" 
                value={nome} 
                //"Quando o valor da input mudar, pegue o novo valor (evento.target.value) e atualize o estado com este valor"
                onChange={(evento) => setNome(evento.target.value)} />

                <input type="text" 
                placeholder="Insira seu sobrenome" 
                value={sobrenome} 
                onChange={(evento) => setSobrenome(evento.target.value)} />

                <input type="text" 
                placeholder="Insira seu email" 
                value={email} 
                onChange={(evento) => setEmail(evento.target.value)} />

                <br />

                <button type="submit">Enviar</button>
            </form>
            <br />
            {nome} <br />
            {sobrenome} <br />
            {email} <br />
        </>
    )
}
export default Form;