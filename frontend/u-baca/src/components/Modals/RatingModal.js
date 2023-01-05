import React, { useState, useEffect } from "react";
import "./QuizModal.css";
import PointModal from "./PointModal";
import axios from "axios";
import { useParams } from "react-router-dom";

function RatingModal({ onClose }) {
  const [openModal, setOpenModal] = useState(false);
  const [bookPdf, setBookPdf] = useState(null);
  const [resp, setResp] = useState(null);
  const [data, setData] = useState({
    answer: ["", "", "", "", ""],
  });
  const answer = data.answer;
  console.log(data);
  const token = localStorage.getItem("token");
  let { id } = useParams();
  const book_id = id;
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

  const submitQuiz = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://admin.u-baca.my.id/api/book/check-answer`,
        { book_id, answer },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setOpenModal(true);
        setResp(res.data);
        console.log("pp", res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="modalBackground1">
      {" "}
      {openModal && <PointModal resp={resp} onClose={setOpenModal} />}
      <div className="modalContainer1">
        <button onClick={() => onClose(false)} className="close">
          {" "}
          X{" "}
        </button>

        <div class="modalContainer1NoScroll">
          <div>
            <p>
              <strong>Quiz Time</strong>
            </p>
            <p>Jawablah semua pertanyaan di bawah ini agar mendapat point</p>
          </div>
        </div>

        <form class="modalContainer1Scroll ps-4">
          {bookPdf?.quiz?.map((item, index) => (
            <div className="overflow-wrap break-word text-start ">
              <p className="d-block" key={index}>
                {index + 1}. {item.question}
              </p>

              <div className="ps-4">
                {item.answer?.map((items, indexs) => (
                  <div>
                    <input
                      onChange={(e) => {
                        let temp = data.answer;
                        temp[index] = e.target.value;
                        setData({ ...data, answer: temp });
                      }}
                      id={`${index + 1}${String.fromCharCode(indexs + 1 + 64)}`}
                      type="radio"
                      value={String.fromCharCode(indexs + 1 + 64)}
                      checked={data.answer[index] === String.fromCharCode(indexs + 1 + 64)}
                      required
                    />
                    <label className="ms-1" for={`${index + 1}${String.fromCharCode(indexs + 1 + 64)}`}>
                      {String.fromCharCode(indexs + 1 + 64)}. {items.answer}
                    </label>
                  </div>
                ))}
              </div>
              <br></br>
            </div>
          ))}

          <button className="btn btn-outline-warning btn-rounded btn-sm my-0 " id="submitQuiz" type="submit" onClick={submitQuiz}>
            Submit Jawaban
          </button>
        </form>
      </div>
    </div>
  );
}

export default RatingModal;
