import React from "react";
import "./Modal.css";
import axios from "axios";
import book1 from "../../assets/book1.jpg";
import { useState, useEffect } from "react";
import logo2 from "../../assets/logo_footer2.png";
import ReadPage from "../../pages/ReadPage";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

function DetailModal({ item, onClose }) {
  let thumbnail = item.cover;
  const [bookPdf, setBookPdf] = useState();
  //console.log(item)
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let book_id = item.id;

  const enroll = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://admin.u-baca.my.id/api/book/enroll-book`,
        { book_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setBookPdf(navigate(`/read-page/${item.id}`));
        <ReadPage item={bookPdf} />;
        console.log("pp", res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="modalBackground1">
      <div className="modalContainer">
        <button onClick={() => onClose(false)} className="close">
          {" "}
          X{" "}
        </button>
        <div className="modalImage">
          <img src={thumbnail} alt="" />
        </div>
        <div className="body">
          <h5> {item.judul} </h5>
          <p> {item.penulis} </p>
          <p> {item.penerbit} </p>
          <p> {item.tahun} </p>
        </div>
        <div className="buttonRead">
          <button onClick={enroll}>
            <img src={logo2} alt="" />
          </button>
        </div>
        <div className="bookSynopsis">
          <p>{item.sinopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
