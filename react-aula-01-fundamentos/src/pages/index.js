import Descricao from "@/components/Descricao";
import Dog from "@/components/Dog";
import MeuComponente from "@/components/MeuComponente";
import User from "@/components/User";
import Contador from "@/components/contador";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao meu primeiro site em React.</p>
      <br />
      <MeuComponente />
      <br />
      <User />
      <br />
      {/* Chamando o componente Descricao e passando dados externos para ele */}
      <Descricao cidade="Registro" idade={18} />

      {/*Desestruturação de Props*/}
      <Dog nome="Rex" raca="Pitbull" idade={4}/>

      {/* Hook useState */}
      <Contador />

      {/* Formulário */}
      <Form />
    </>
  );
}
