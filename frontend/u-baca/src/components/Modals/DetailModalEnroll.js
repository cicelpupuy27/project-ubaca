import React from "react";
import "./Modal.css";
import axios from "axios";
import book1 from "../../assets/book1.jpg";
import { useState, useEffect } from "react";
import logo2 from "../../assets/logo_footer2.png";
import ReadPageE from "../../pages/ReadPageEnroll";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

function DetailModalE({ item, onClose }) {
  let thumbnail = item.book.cover;
  const [bookPdf, setBookPdf] = useState();
  //console.log(item)
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  //   let book_id = item.id;
  let sinopsis = item.book.sinopsis;
  let sin = sinopsis.substr(0, 300) + ".....";

  const enroll = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://admin.u-baca.my.id/api/book/enroll-book/get-user`,
        // { book_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setBookPdf(navigate(`/read-pages/${item.book.id}`));
        <ReadPageE item={bookPdf} />;
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
          <h5> {item.book.judul} </h5>
          <p> {item.book.penulis} </p>
          <p> {item.book.penerbit} </p>
          <p> {item.book.tahun} </p>
        </div>
        <div className="buttonRead">
          <button onClick={enroll}>
            <img src={logo2} alt="" />
          </button>
        </div>
        <div className="bookSynopsis">
          <p>{sin}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailModalE;
