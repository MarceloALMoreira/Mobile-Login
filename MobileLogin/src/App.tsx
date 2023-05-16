import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from './styles'
import PairPrograming from './assets/pair_programming.svg'
import { IoArrowForwardOutline, IoTrash } from "react-icons/io5";
import { useState, useRef } from 'react';

interface User {
  id: number;
  name: string;
  age: number | undefined;
}

function App() {

  // Fazendo o gerenciamento do estado
  const [users, setUsers] = useState<User[]>([]);

  // Pegando os valores atraves da referencia
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);

  // Garatindo que vamos receber os tipos corretos e passar para nosso objeto:
  function addNewUser() {
    if (inputName.current && inputAge.current && inputAge.current.value) {
      const newUser: User = {
        id: Math.random(),
        name: inputName.current.value,
        age: Number(inputAge.current.value),
      };

      // usando o spreed para add em nossa lista baixo do cadastro!
      setUsers(prevUsers => [...prevUsers, newUser]);
      inputName.current.value = '';
      inputAge.current.value = '';
    }
  }

  // Funcionalidade que permiti que o user seja deletado quando chamamos o function
  function deleteUser(userId: Number) {
    setUsers(prevUsers => prevUsers.filter(u => u.id !== userId));
    /*
         Poderia criar um filtro e depois um setUset com novo arrya de user
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

        {/* Utilizando o Ma() para renderizar os itens na tela, pecorrendo no array*/}
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <i onClick={() => deleteUser(user.id)}><IoTrash /></i>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App
