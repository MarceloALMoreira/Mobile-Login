import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from './styles'
import PairPrograming from '../../assets/pair_programming.svg'
import { IoArrowForwardOutline, IoTrash } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';
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


  //Mostrando todos os Usuarios na tela
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user')
        const { data: MyUsers } = response

        setUsers(MyUsers)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [])

  // Funcionalidade que permiti que o user seja deletado quando chamamos o function
  async function deleteUser(userId: number) {
    await axios.delete(`http://localhost:3001/user/${userId}`)    
    setUsers(prevUsers => prevUsers.filter(u => u.id !== userId));

    /*         Poderia criar um filtro e depois um setUset com novo arrya de user
        const newUsers = users.filter((user) => user.id !== userId)
        setUsers(newUsers)
    
        */
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

        <Button onClick={addNewUser}>
          Cadastrar
          <IoArrowForwardOutline />
        </Button>

      
      </ContainerItens>
    </Container>
  )
}

export default Home
