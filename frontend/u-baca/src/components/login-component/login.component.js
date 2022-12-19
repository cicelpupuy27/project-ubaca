import React, { useState } from 'react'
import image2 from '../../images/read-books.png'
import logo from '../../images/logo2.png'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  function masuk(e){ 
    e.preventDefault()
    axios.get(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users`)
    .then((res) => {
        let result = null
        result = res.data.find(item => {
          if (item.email == data.email && item.password == data.password) {
            return item
          }
        })
     
        if (result) {
          setData({
            email: "",
            password: "",
          })
          localStorage.setItem('profil', JSON.stringify(result))
          localStorage.setItem('token', `token-${result.id}`)
         navigate("/")
        } else {
          alert('akun tidak terdaftar')
        }
    })
    .catch((e) => {
        console.log(e)
    })
  }

  return (
    <>
    <div className='container kotak'>
        <div className='row'>
            <div className='col-12 ps-1 pt-2'>
            <Link to="/"><img src={logo} width="150" /></Link>
            </div>
        </div>
    
    <div className='row d-flex pt-5 justify-content-center'>
    <div className='col-5 pt-5'>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form className='formlogin'  method='post' onSubmit={masuk}>
            <h3 className='mb-2'>Log In</h3>
            <h6 className='mb-4 text-dark'>Belum ada akun? <Link to='/sign-up' id="link">Daftar</Link></h6>
            <div className="mb-4">
              <input
                onChange={e => {
                  setData({...data,email:e.target.value})
                }}
                type="text"
                className="mail Input text-black"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={e => {
                  setData({...data,password:e.target.value})
                }}
                type="password"
                className="password text-black"
                placeholder="Password"
              />
            </div>
            
            <div className='d-flex justify-content-end'>
              <div className="d-grid">
                <button type="submit" className="btn btn-success px-4">
                  Login
                </button>
              </div>
            </div>
          </form >
        </div>
      </div>

      </div>
      <div className='col-7 pt-2 login-kanan' style={{overflow:'hidden'}}>
        <img src={image2} className="login-kanan" width="auto" height="auto" />
      </div>

    </div>
    </div>
    </>
  )
}

export default Login