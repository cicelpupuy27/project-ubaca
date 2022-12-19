import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import foto from "../assets/foto-profil.png";
import foto2 from "../assets/foto-profil-pria.png"
import coint from "../assets/coint.PNG";
import UnlockCard from "./UnlockCard";
import axios from 'axios';

function User() {
    const profil = JSON.parse(localStorage.getItem('profil'))
    const [data, setData] = useState(null)
    const [bookData, setBookData] = useState([])

    useEffect(() => {
        axios.get(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`)
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, [])
    
    useEffect(() => {
        axios.get(
            "https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/locked-books/"
            ).then(res => {
                setBookData(res.data)
                console.log(res.data)
            })
    }, [])

    return(
        <div id="main">
            <h2 className="title"> My Account </h2>
            <center><img src={data?.jenis_kelamin?.toLowerCase() == 'perempuan'?foto:foto2} width={120} height={120} id="foto-profil" alt=""/></center>
            <h4 className="nama">{data?.nama}</h4>

            <div id="point">
                <center><h4 className="point-2"><img src={coint} width={35} alt=""/> {data?.point}</h4></center>
            </div>

            <h4 className="tukar">Tukarkan Points</h4>

            <div className="card-container">
                <UnlockCard book={bookData} />
                <br /><br />
            </div>
        </div>
    )
}

export default User;