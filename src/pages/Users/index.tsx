import { Container, Image, H1, ContainerItens, Button, User, PaginationContainer, PaginationButton, UserParagrf, ContainerModal, InputModal, ContainerButton, H2, ButtonModalSalve, ButtonModalCancel, EditUserIcon, DeleteUserIcon } from './styles';
import playGamer from '../../assets/plat_gamer.svg'
import { IoArrowForwardOutline } from "react-icons/io5";
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, ModalContent } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Usuarios } from '../../interface';
// import { H1 } from '../../components/Title/styles';

// interface User {
//   id: number;
//   name: string;
//   age: number | undefined;
// }

const Users = () => {

  const [users, setUsers] = useState<Usuarios[]>([]);
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

    try {
      await axios.delete(`http://localhost:3001/user/${userId}`);
      setUsers(prevUsers => prevUsers.filter(u => u.id !== userId));

      showToastMessage()
    } catch (error) {
      console.log(error)
    }
  };

  //Exibir menssagem de error delete user
  const showToastMessage = () => {
    toast.error('Usuário deletado com sucesso!', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Implementando um controler de estado para o modal
  const [editeModalOpen, setEditeModalOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

  // function que abre o modal quando receber o click do icon
  const openModal = (userId: number) => {
    setSelectedUserId(userId)
    setEditeModalOpen(true)
  }

  //Controle de inpurt
  const [name, setName] = useState('')
  const [age, setAge] = useState<number | undefined>(undefined)

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  }

  //Logica de salvar ou cancelar Edição
  const handleSave = async () => {
    if (!selectedUserId) return
    try {
      await axios.put(`http://localhost:3001/user/${selectedUserId}`, { name, age })

      //atualizando os dados do usuarios na lista
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === selectedUserId ? { ...user, name, age } : user)
      )
      setEditeModalOpen(false)

      showToastMessageSalve()

    setName('')
    setAge(undefined)

    } catch (error) {
      console.log(error)
    }
  }

  const handleCancel = () => {
    setEditeModalOpen(false)
  }

  //Exibir menssagem de Save user
  const showToastMessageSalve = () => {
    toast.success('Usuário atualizado com sucesso!', {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <Container>

      <Image alt='Logo People' src={playGamer} />
      <ContainerItens>
        <H1>Usuários</H1>
        {/* Lista de usuários cadastrados vindo da API */}
        <ul>
          {currentUsers.map((user) => (
            <User key={user.id}>

              <UserParagrf>
                <p>{user.name}</p>
                <p>{user.age}</p>
              </UserParagrf>
              <EditUserIcon onClick={() => openModal(user.id)}>
                <i>
                  <BsPencilSquare />
                </i>
              </EditUserIcon>
              <DeleteUserIcon onClick={() => deleteUser(user.id)}>
                <ToastContainer />
                <i>
                  <BsTrash />
                </i>
              </DeleteUserIcon>
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

      {/* Modal de Edição */}
      <Modal isOpen={editeModalOpen} onClose={handleCancel}>
        <ModalContent>
          <ContainerModal>
            <H2>Editar Usuário</H2>
            <InputModal>
              <input
                placeholder="Nome"
                value={name}
                onChange={handleChangeName}
              />
              <input
                placeholder="Idade"
                type="number"
                value={age ?? ''}
                onChange={handleChangeAge}
              />
            </InputModal>

            <ContainerButton>
              <ButtonModalSalve onClick={handleSave}>
                Salvar
              </ButtonModalSalve>
              <ToastContainer />

              <ButtonModalCancel onClick={handleCancel}>
                Cancelar
              </ButtonModalCancel>
            </ContainerButton>

          </ContainerModal>
        </ModalContent>
      </Modal>

    </Container>
  );
};

export default Users;