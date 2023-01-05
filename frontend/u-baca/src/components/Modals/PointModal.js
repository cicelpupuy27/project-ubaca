import React from "react";
import "./PointModal.css";
import { useNavigate } from "react-router-dom";
import { FaRegSadCry } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";

function PointModal({ resp, onClose }) {
  const navigate = useNavigate();
  return (
    <div className="modalBackground">
      <div className="p-modalContainer">
        <button onClick={() => navigate("/profil")} className="close">
          {" "}
          X{" "}
        </button>

        <div className="p-body">
          {resp.success == true ? (
            <div>
              {" "}
              <h1> Congratulations </h1>
              <h5>{resp.message}</h5>
              <h6>
                {" "}
                Selamat anda mendapatkan {resp.data.point_get} point <BsCoin className="text-warning" /> dan total xp anda sekarang adalah {resp.data.exp_get} <span className="badge bg-success rounded-pill ">xp</span>{" "}
              </h6>
              <h5> Mari Membaca Lebih Banyak! </h5>
            </div>
          ) : (
            <div>
              <h1>
                {" "}
                Sorry <FaRegSadCry className="text-danger" />{" "}
              </h1>
              <h5>{resp.message}</h5>
            </div>
          )}
        </div>

        <div className="p-buttonRead">
          <button onClick={() => navigate("/")}>NEXT</button>
        </div>
      </div>
    </div>
  );
}

export default PointModal;
