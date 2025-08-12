import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/icons8-lixo.svg'
import api from '../../services/api'

function Home() {
const [users, setUsers] = useState([])

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }

  async function postUsers() {
    try {
      await api.post('/users', {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value
      })

      getUsers()

    } catch (error) {
      if (error.response.data.mensagem) {
        return alert(error.response.data.mensagem);
      }
      console.error(error);
      }
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()
  }

  useEffect( () => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' placeholder='Nome' ref={inputName}/>
        <input name='age' type='number' placeholder='Idade' ref={inputAge}/>
        <input name='email' type='email' placeholder='E-mail' ref={inputEmail}/>
        <button type="button" onClick={postUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="imagem de lixeira" />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
