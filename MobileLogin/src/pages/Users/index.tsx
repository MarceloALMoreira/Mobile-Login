
  {/* Utilizando o map() para renderizar os itens na tela, pecorrendo no array*/}
  <ul>
  {users.map((user) => (
    <User key={user.id}>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <i onClick={() => deleteUser(user.id)}><IoTrash /></i>
    </User>
  ))}
</ul>




async function deleteUser(userId: number) {
    await axios.delete(`http://localhost:3001/user/${userId}`)
    setUsers(prevUsers => prevUsers.filter(u => u.id !== userId));

    /*         Poderia criar um filtro e depois um setUset com novo arrya de user
        const newUsers = users.filter((user) => user.id !== userId)
        setUsers(newUsers)
    
        */
  }