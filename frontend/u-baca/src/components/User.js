import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import coint from "../assets/coint.PNG";
import UnlockCard from "./UnlockCard";
import axios from 'axios';
import pria from "../assets/foto-profil-pria.png";
import wanita from "../assets/foto-profil.png";

function User() {
    const [profile, setProfile] = useState([])
    const [bookData, setBookData] = useState([])
    const token = localStorage.getItem("token");

    function profile_picture(param) { 
      if(param.picture!= null){
        return param.picture;
      }
      if(param.jenis_kelamin == "perempuan"){
        return pria;
      }else{
        return wanita;
      }
    }
    
    useEffect(() => {
        axios.get(
            "https://admin.u-baca.my.id/api/book/enroll-book/get-user",{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(res => {
                setBookData(res.data.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://admin.u-baca.my.id/api/user/get-user-profile`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            setProfile(res.data.data);
        });
    }, [])

    return(
        <div id="main">
            <h2 className="title"> My Account </h2>
            <center><img src={profile_picture(profile)} width={120} height={120} id="foto-profil" alt=""/></center>
            <h4 className="nama">{profile?.nama}</h4>

            <div id="point">
                <center><h4 className="point-2"><img src={coint} width={35} alt=""/> {profile?.point}</h4></center>
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