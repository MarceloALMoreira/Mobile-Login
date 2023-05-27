import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User, LinkUser, ContainerButtons } from './styles'
import PairPrograming from '../../assets/pair_programming.svg'
import playGamer from '../../assets/plat_gamer.svg'
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState, useRef } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  age: number | undefined;
}

function Home() {

  // Fazendo o gerenciamento do estado
  const [users, setUsers] = useState<User[]>([]);

  // Pegando os valores atraves da referencia
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);


  // Cadastrando um Usuario
  async function addNewUser() {

    const { data: newUser } = await axios.post('http://localhost:3001/user', {
      name: inputName.current?.value,
      age: inputAge.current?.value,
    })
    // console.log(newUser)
    setUsers([...users, newUser])
  }

  return (
    <Container>

      <Image alt='Logo People' src={playGamer} />

      <ContainerItens>

        <H1>Register</H1>

        <InputLabel>Full name</InputLabel>
        <Input ref={inputName} placeholder='Ex.. Earl J. Smiley' />

        {/* <InputLabel>Email</InputLabel>
        <Input ref={inputName} placeholder='example@gmail.com' /> */}

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder='Exe.. 26'/>

        <ContainerButtons>

          <Button onClick={addNewUser}>
            Cadastrar
            <IoArrowForwardOutline />
          </Button>

          <LinkUser to={'/users'}>
            Ver Users
          </LinkUser>

        </ContainerButtons>

      </ContainerItens>

    </Container>
  )
}

export default Home
