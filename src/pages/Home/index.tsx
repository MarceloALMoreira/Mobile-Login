import { Container, Image, ContainerItens, InputLabel, Input, Button, User, LinkUser, ContainerButtons } from './styles'
import playGamer from '../../assets/plat_gamer.svg'
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { H1 } from '../../components/Title/styles';

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

    try {
      const { data: newUser } = await axios.post('http://localhost:3001/user', {
        name: inputName.current?.value,
        age: inputAge.current?.value,
      })
      // console.log(newUser)
      setUsers([...users, newUser])

      // Limpando os inputs
      if (inputName.current && inputAge.current) {
        inputName.current.value = ''
        inputAge.current.value = ''
      }
      showToastMessage()
    } catch (error) {
      console.log(error)
    }
  }

  //Exibir menssagem de sucesso register user
  const showToastMessage = () =>{
    toast.success('Usuário cadastrado com sucesso!', {
      position: toast.POSITION.TOP_CENTER
    });
  };


  return (
    <Container>

      <Image alt='Logo People' src={playGamer} />

      <ContainerItens>

        <H1>Register</H1>

        <InputLabel>Full name</InputLabel>
        <Input ref={inputName} placeholder='Ex.. Earl J. Smiley' />

       
        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder='Exe.. 26' />

        <ContainerButtons>

          <Button onClick={addNewUser}>
            Cadastrar
            <IoArrowForwardOutline />
            <ToastContainer />

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
