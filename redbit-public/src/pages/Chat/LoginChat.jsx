import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const LoginChat = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleForm = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const login = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3022/user/login', form)

      navigate('/chat', { state: { id: data.logged.id, token: data.token } })

  } catch (err) {
      console.error(err)
  }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
              <h4 className='card-title'>Login</h4>
            </div>
            <div className='card-body'>
              <form onSubmit={login}>
                <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <input type='text' className='form-control' id='username' placeholder='Enter username'  name='username' onChange={handleForm}/>
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' className='form-control' id='password' placeholder='Password'  name='password' onChange={handleForm}/>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
