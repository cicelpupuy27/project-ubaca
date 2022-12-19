import React from "react";
import './Modal.css';
import coint from "../../assets/coint.PNG";
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UnlockModal({item, onClose}){
    const [bookPdf, setBookPdf] = useState();
    const profil = JSON.parse(localStorage.getItem('profil'))
    const navigate = useNavigate();
    const readPage = () =>{ navigate(`/read-page-premium/${item.id}`)}

    const tukarPoint = () => {
        axios.get(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`)
        .then((res) => {
            console.log(res)
            const resData = res.data
            if (resData.point >= 20) {
                axios.put(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`, {
                    ...resData, 
                    point: resData.point - 20
                })
                .then((resUpdate) => {
                    // window.location.href = "/read-page"
                    setBookPdf(readPage)
                    localStorage.setItem('profil', JSON.stringify(resUpdate.data))
                })
                .catch((eUpdate) => {
                    console.log(eUpdate)
                })
            } else {
                Swal.fire('Point Anda Tidak Cukup')
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={()=> onClose(false)} className="close"> X </button>
                <div className="modalImage">
                    <img src={item.cover} alt=""/>
                </div>
                
                <div className="body">
                    <h5> {item.judul} </h5>
                    <h5 className="pt-2 coint"><img src={coint} width={28} alt=""/> 20</h5>

                    <div className="buttonUnlock">
                        <button type="submit" onClick={tukarPoint}>TUKAR POINT</button>
                    </div>

                    <p> {item.penulis} </p>
                    <p> {item.penerbit} </p>
                    <p> {item.tahun} </p>
                </div>

                <div className="bookSynopsis">
                    <p>{item.sinopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default UnlockModal