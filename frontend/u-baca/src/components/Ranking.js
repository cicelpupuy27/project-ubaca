import React from "react";
import { useState } from "react";
import { HiStar } from "react-icons/hi";
import { ImTrophy } from "react-icons/im";
import pria from "../assets/foto-profil-pria.png";
import wanita from "../assets/foto-profil.png";
// import DetailModal from "./Modals/DetailModal";
//import { Modal } from 'react-bootstrap';

function Ranking({ rank }) {
  //   const [openModal, setOpenModal] = useState(false);
  // const [numberRank, setNumberRank] = useState([]);

  function profile_picture(param) {
    if (param.picture != null) {
      return param.picture;
    }
    if (param.jenis_kelamin == "perempuan") {
      return pria;
    } else {
      return wanita;
    }
  }

  function newRank(param) {
    let newParam = "";
    let temp = "";
    switch (param) {
      case "1":
        newParam = param + "st";
        temp = param.replace(param, newParam);
        break;
      case "2":
        newParam = param + "nd";
        temp = param.replace(param, newParam);
        break;
      case "3":
        newParam = param + "rd";
        temp = param.replace(param, newParam);
        break;
      case "4":
        newParam = param + "th";
        temp = param.replace(param, newParam);
        break;
      case "5":
        newParam = param + "th";
        temp = param.replace(param, newParam);
        break;

      default:
        break;
    }
    return temp;
  }
  return (
    <>
      {rank.map((item, index) => {
        return (
          <>
            <div className="card2 bg-light rounded-5">
              <div className="">
                <div className="position-relative d-block mb-2">
                  <img className="profile-picture" src={profile_picture(item)} alt="profile" />
                  <span class="position-absolute top-100 start-50 translate-middle badge rounded-pill  bg-secondary ">
                    {newRank(item.rank.toString())}{" "}
                    <span className="text-warning">
                      {" "}
                      <HiStar />
                    </span>
                  </span>
                  <span class="position-absolute top-0 start-100 translate-middle px-2 py-1 badge rounded-pill bg-warning fs-3">{item.rank == 1 ? <ImTrophy /> : ""}</span>
                </div>
                <p className="fw-bold user-name m-0">{item.nama}</p>
                <p className="badge text-bg-danger mx-1">{item.exp} exp</p>
                <p className="badge text-bg-warning text-white mx-1">{item.point} pts</p>
              </div>
            </div>
            {/* {openModal && <DetailModal item={rankItem} onClose={setOpenModal} />} */}
          </>
        );
      })}
    </>
  );
}

export default Ranking;
