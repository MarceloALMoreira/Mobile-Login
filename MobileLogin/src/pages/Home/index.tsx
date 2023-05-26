import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User, LinkUser, ContainerButtons } from './styles'
import PairPrograming from '../../assets/pair_programming.svg'
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

      <Image alt='Logo People' src={PairPrograming} />

      <ContainerItens>

        <H1>Bem vindo</H1>

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

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
