
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from './styles'
import PairPrograming from './assets/pair_programming.svg'
import { IoArrowForwardOutline } from "react-icons/io5";


function App() {

  return (
    <Container>
      <Image alt='Logo People' src={PairPrograming} />
      <ContainerItens>
        <H1>Bem vindo</H1>
        <InputLabel>Nome:</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade:</InputLabel>
        <Input placeholder='Idade' />

        <Button>Cadastrar
          <IoArrowForwardOutline />
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default App
