import React from "react";
import { useState } from "react";
import DetailModal from "./Modals/DetailModal";
import { BsFillShieldLockFill } from 'react-icons/bs';
import { BsLockFill } from 'react-icons/bs';

//import { Modal } from 'react-bootstrap';

function Card({ book }) {
  const [openModal, setOpenModal] = useState(false);
  const [premium, setPremium] = useState(null);
  const [bookItem, setItem] = useState();
  const getDetail = () => {
    if (localStorage.getItem("token") != null) {
      setOpenModal(true);
    } else {
      window.location.href = "/sign-in";
    }
  };

  return (
    <>
      {book.map((item, index) => {
        return (
          <>
            <div
              className="card border-0"
              onClick={() => {
                getDetail();
                setItem(item);
              }}
              key={index}
            >{item.is_locked=="1" && 
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle"><span className="badge text-bg-warning fst-italic"><BsFillShieldLockFill/> Premium</span></div>
              </div>
              }
              
              <img className="rounded-2" src={item.cover} alt="" />
              <div className="bottom">
                <button className="pt-3 book-title">{item.judul}</button>
              </div>
            </div>
            {openModal && <DetailModal item={bookItem} onClose={setOpenModal} />}
          </>
        );
      })}
    </>
  );
}

export default Card;
