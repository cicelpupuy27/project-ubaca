import React, { useState, useEffect } from "react";
import "./QuizModal.css";
import PointModal from "./PointModal";
import axios from "axios";
import { useParams } from "react-router-dom";

function RatingModal({ onClose }) {
  // const stars = Array(5).fill(0);
  // const [currentValue, setCurrentValue] = React.useState(0);
  // const [hoverValue, setHoverValue] = React.useState(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [bookPdf, setBookPdf] = useState(null);
  const token = localStorage.getItem("token");
  let { id } = useParams();
  useEffect(() => {
    axios
      .get("https://admin.u-baca.my.id/api/book/show?id=" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBookPdf(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  // const profil = JSON.parse(localStorage.getItem("profil"));

  // const handleClick = (value) => {
  //   setCurrentValue(value);
  // };

  // const handleMouseOver = (value) => {
  //   setHoverValue(value);
  // };

  // const handleMouseLeave = () => {
  //   setHoverValue(undefined);
  // };

  // const submitReview = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`)
  //     .then((res) => {
  //       console.log(res);
  //       const resData = res.data;
  //       axios
  //         .put(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`, {
  //           ...resData,
  //           point: resData.point + 10,
  //         })
  //         .then((resUpdate) => {
  //           setOpenModal(true);
  //           localStorage.setItem("profil", JSON.stringify(resUpdate.data));
  //         })
  //         .catch((eUpdate) => {
  //           console.log(eUpdate);
  //         });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="modalBackground1">
      <div className="modalContainer1">
        <button onClick={() => onClose(false)} className="close">
          {" "}
          X{" "}
        </button>

        <div class="modalContainer1NoScroll">
          {/* <div className="modalImage">
            <img src={bookPdf?.cover} alt="" />
          </div> */}

          <div className="body">
            <h6> {bookPdf?.judul} </h6>
            <p> {bookPdf?.penulis} </p>
          </div>

          {/* <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return(
                            <FaStar
                                key={index}
                                size={25}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                            />
                        )
                    })}
                </div> */}

          <div>
            <p>
              <strong>Quiz Time</strong>
            </p>
          </div>
        </div>

        <div class="modalContainer1Scroll">
          <div className="soal1">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? <br></br>
            a. lorem ipsum <br></br>
            b. lorem ipsum <br></br>
            c. lorem ipsum <br></br>
          </div>
          <br></br>
          <div>
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit? <br></br>
            a. lorem ipsum <br></br>
            b. lorem ipsum <br></br>
            c. lorem ipsum <br></br>
          </div>
          <br></br>
          <div className="soal1">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? <br></br>
            a. lorem ipsum <br></br>
            b. lorem ipsum <br></br>
            c. lorem ipsum <br></br>
          </div>
          <br></br>
          <div className="soal1">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? <br></br>
            a. lorem ipsum <br></br>
            b. lorem ipsum <br></br>
            c. lorem ipsum <br></br>
          </div>
          <br></br>
          <div className="soal1">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? <br></br>
            a. lorem ipsum <br></br>
            b. lorem ipsum <br></br>
            c. lorem ipsum <br></br>
          </div>
          <br></br>
          <button className="btn btn-outline-warning btn-rounded btn-sm my-0 " id="submitQuiz" type="submit">
            Submit Jawaban
          </button>
        </div>

        {openModal && <PointModal onClose={setOpenModal} />}
      </div>
    </div>
  );
}

// export default RatingModal;

// const RatingModal = ({ onClose }) => {
//   const [open, setOpen] = React.useState(false);

//   const lorem = (
//     <p>
//       Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent rhoncus congue ipsum elementum lobortis. Ut ligula purus, ultrices id condimentum quis, tincidunt quis purus. Proin quis enim metus. Nunc feugiat odio at eros porta,
//       ut rhoncus lorem tristique. Nunc et ipsum eu ex vulputate consectetur vel eu nisi. Donec ultricies rutrum lectus, sit ame feugiat est semper vitae. Proin varius imperdiet consequat. Proin eu metus nisi. In hac habitasse platea
//       dictumst. Vestibulum ac ultrices risus. Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar interdum velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent aliquet justo vitae rutrum volutpat. Ut quis pulvinar est.
//     </p>
//   );

//   return (
//     <>
//       <button className="button" onClick={() => setOpen(true)}>
//         Next
//       </button>

//       <Modal open={open} onClose={() => setOpen(false)}>
//         <h2>Big modal</h2>
//         {lorem}
//         {lorem}
//         {lorem}
//         {lorem}
//         {lorem}
//         {lorem}
//         {lorem}
//         {lorem}
//         {lorem}
//       </Modal>
//     </>
//   );
// };

export default RatingModal;
