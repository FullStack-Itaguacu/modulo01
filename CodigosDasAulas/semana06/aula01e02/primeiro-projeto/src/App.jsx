import './App.css'
import Card from "./components/Card"

function App() {

  const urlFerrari = "https://s2.glbimg.com/WwkvfLhK4mt40-5fkdlWSHbyJqo=/0x0:1280x921/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/0/zLTv6fTfuWwIoCbUdZXA/ferrari-sf90-stradale-2020-1280-05.jpg"

  const urlAudi = "https://quatrorodas.abril.com.br/wp-content/uploads/2021/11/Audi-A3-Sedan-2.0-2022-1.jpg?quality=70&strip=info&w=1024&resize=1200,800"



  const usuario = {
    nome: "Bruno Costa",
    idade: 24,
    profissao: "Dev",
    endereco: {
      logradouro: "Sua rua",
      numero: 45
    }
  }

  const {nome, idade, profissao, endereco} = usuario

  // const logradouro = usuario.endereco.logradouro

  // const {logradouro} = endereco

  nome
  idade
  profissao





  return (
    <div className="App">
      <img src="" alt="" />
      <Card imagem={urlFerrari} width={300} alt="Imagem de um carro Ferrari"/>
      <Card titulo="Carro Audi" imagem={urlAudi} width={500} alt="Imagem de um carro Audi" />
    </div>
  )
}

export default App
