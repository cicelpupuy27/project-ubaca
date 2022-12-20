import React from "react";
import { useState } from "react";
// import DetailModal from "./Modals/DetailModal";
//import { Modal } from 'react-bootstrap';

function Ranking({ rank }) {
  //   const [openModal, setOpenModal] = useState(false);
  const [rankItem, setRankItem] = useState();

  return (
    <>
      {rank.map((item, index) => {
        return (
          <>
            <div
              className="card2"
              onClick={() => {
                // getDetail();
                setRankItem(item);
              }}
              key={index}
            >
              <img src={item.avatar} alt="" />
              <div className="rank-desc">
                <p className="fw-bold">1</p>
              </div>
              <div className="bottom">
                <button className="pt-3 fw-bold user-name">{item.name}</button>
                <p>{item.point}</p>
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
