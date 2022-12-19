import React, { useState, Component, setDate } from 'react'
import logo from '../../images/logo2.png'
import axios, { Axios } from 'axios'
import { useNavigate, Link } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
        confirm_pass: "",
        nama: "",
        tgl_lahir: "",
        jenis_kelamin: "",
        point: 0
    });

    function registration(e){ 
        e.preventDefault()
        if(data.password === data.confirm_pass) {
            delete data.confirm_pass
            axios.post(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users`, data)
            .then((res) => {
                console.log(res)
                setData({
                    email: "",
                    password: "",
                    confirm_pass: "",
                    nama: "",
                    tgl_lahir: "",
                    jenis_kelamin: ""
                })
                navigate("/sign-in")
            })
            .catch((e) => {
                console.log(e)
            })
        } else {
            alert('Password tidak sesuai')
        }
    }
    
    return (
        <>
        <div className='container kotak'>
            <div className='row'>
                <div className='col-12 ps-1 pt-2'>
                <Link to='/'><img src={logo} width="150" /></Link>
                </div>
            </div>

            <div className='row d-flex pt-4 justify-content-center'>
            <div className='col-9'>
            <form className="formlogin Buat Akun" method='post' onSubmit={registration}>
                <h3 className='mb-2'>Buat Akun</h3>
                <div className="mb-4">
                    <input 
                        onChange={e => {
                            setData({...data,email:e.target.value})
                        }}
                        type="email"
                        className="mail text-black"
                        placeholder="Email"
                        value={data.email}
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
                        value={data.password}
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={e => {
                            setData({...data,confirm_pass:e.target.value})
                        }}
                        type="password"
                        className="password text-black"
                        placeholder="Konfimasi Password"
                        value={data.confirm_pass}
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={e => {
                            setData({...data,nama:e.target.value})
                        }}
                        type="nama lengkap"
                        className="user text-black"
                        placeholder="Nama Lengkap"
                        value={data.nama}
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={e => {
                            setData({...data,tgl_lahir:e.target.value})
                        }}
                        type="date"
                        className="date text-black"
                        placeholder="Tanggal Lahir"
                        value={data.tgl_lahir}
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={e => {
                            setData({...data,jenis_kelamin:e.target.value})
                        }}
                        type="jenis kelamin"
                        className="gender jenis kelamin text-black"
                        placeholder="Jenis Kelamin"
                        value={data.jenis_kelamin}
                    />
                </div>

                <div className="d-flex justify-content-end align-items-center mb-4">
                    <h6 className="forgot-password pt-2 pe-4">
                        Sudah ada akun? <Link to="/sign-in" id="link">Log in</Link>
                    </h6>
                    <button type="submit" className="btn btn-success px-4">
                        Daftar
                    </button>
                </div>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}

export default SignUp