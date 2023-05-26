import { Container, H1, Image, ContainerItens, Button, User, PaginationContainer, PaginationButton } from './styles';
import PairPrograming from '../../assets/pair_programming.svg';
import { IoArrowForwardOutline } from "react-icons/io5";
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  age: number | undefined;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user');
        const { data: MyUsers } = response;
        setUsers(MyUsers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const deleteUser = async (userId: number) => {
    await axios.delete(`http://localhost:3001/user/${userId}`);
    setUsers(prevUsers => prevUsers.filter(u => u.id !== userId));
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Image alt='Logo People' src={PairPrograming} />
      <ContainerItens>
        <H1>Usuários</H1>
        {/* Lista de usuários cadastrados vindo da API */}
        <ul>
          {currentUsers.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <i><BsPencilSquare /></i>
              <i onClick={() => deleteUser(user.id)}><BsTrash /></i>
            </User>
          ))}
        </ul>

        {/* Paginação */}
        <PaginationContainer>
      {pageNumbers.map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
        </PaginationButton>
      ))}
    </PaginationContainer>
        <Button to={'/'}>
          <IoArrowForwardOutline />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;







// {/* 
//   /*         Poderia criar um filtro e depois um setUset com novo arrya de user
//       const newUsers = users.filter((user) => user.id !== userId)
//       setUsers(newUsers)
  
//       */ */}









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