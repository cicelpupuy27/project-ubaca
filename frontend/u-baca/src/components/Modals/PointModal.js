import React from "react";
import './PointModal.css';
// import book1 from "../../assets/book1.jpg";
import logo from "../../images/10 point.png";
import { useNavigate } from "react-router-dom";

function PointModal({onClose}){
    const navigate = useNavigate();
    return(
        <div className="modalBackground">
            <div className="p-modalContainer">
                <button onClick={() => navigate("/profil")} className="close"> X </button>
                
                <div className="p-body">
                    <h1> Congratulations </h1>
                    <img src={logo} width="200px" />
                    <h5> Mari Membaca Lebih Banyak! </h5>
                </div>

                <div className="p-buttonRead">
                    <button onClick={() => navigate("/")}>NEXT</button>
                </div>
            </div>
        </div>
    )
}

export default PointModal

