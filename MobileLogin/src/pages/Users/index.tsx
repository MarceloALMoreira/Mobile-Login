

import { Container, H1, Image, ContainerItens, Button,User } from './styles'
import PairPrograming from '../../assets/pair_programming.svg'
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState } from 'react';

interface Users {
  id: number
  name: string
  age: number
}
const Users: React.FC=() => {

  const updateUsers = () =>{
  console.log('teste')
  }


  const users: Users[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 28 },
  ];


  return (
    <Container>
      <Image alt='Logo People' src={PairPrograming} />
      <ContainerItens>
        <H1>Usuários</H1>        
      {/* Lista de usuario cadastrado vindo da API */}
    <ul>
      {users.map((user) => (
          <User key={user.id}>
           {user.name} (Age: {user.age})
          </User>
      ))}
   
    </ul>

        <Button  onClick={updateUsers}>             
      <IoArrowForwardOutline />  
          Voltar       
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default Users




// //Mostrando todos os Usuarios na tela
// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/user')
//       const { data: MyUsers } = response

//       setUsers(MyUsers)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   fetchUsers()
// }, [])

// // Funcionalidade que permiti que o user seja deletado quando chamamos o function
// async function deleteUser(userId: number) {
//   await axios.delete(`http://localhost:3001/user/${userId}`)    
//   setUsers(prevUsers => prevUsers.filter(u => u.id !== userId));

  /*         Poderia criar um filtro e depois um setUset com novo arrya de user
      const newUsers = users.filter((user) => user.id !== userId)
      setUsers(newUsers)
  
      */









//   {/* Utilizando o map() para renderizar os itens na tela, pecorrendo no array*/}
//   <ul>
//   {users.map((user) => (
//     <User key={user.id}>
//       <p>{user.name}</p>
//       <p>{user.age}</p>
//       <i onClick={() => deleteUser(user.id)}><IoTrash /></i>
//     </User>
//   ))}
// </ul>




// async function deleteUser(userId: number) {
//     await axios.delete(`http://localhost:3001/user/${userId}`)
//     setUsers(prevUsers => prevUsers.filter(u => u.id !== userId));

//     /*         Poderia criar um filtro e depois um setUset com novo arrya de user
//         const newUsers = users.filter((user) => user.id !== userId)
//         setUsers(newUsers)
    
//         */
//   }