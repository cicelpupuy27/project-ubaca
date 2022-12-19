import React from "react";
import { useState } from "react";
import UnlockModal from "./Modals/UnlockModal";

function Unlock ({book}){
    const [openModal, setOpenModal] = useState(false)
    const [bookItem,setItem] = useState();

    return(
        <>
        {book.map((item,index)=>{
            return(
                <>
            <div className="card" onClick={() => {setOpenModal(true); setItem(item)}} key={index}>
                <img src={item.cover} alt=""/>
                <div className="bottom">
                    <h3 className="pt-3 book-title">{item.judul}</h3>
                    <button className="mt-1 btn btn-outline-warning btn-rounded btn-sm my-0" id="unlock-button" type="submit">Unlock</button>
                </div>
            </div>
            {openModal && <UnlockModal item={bookItem} onClose={setOpenModal}/>}
            </>
            )})}
        </>
    )
}

export default Unlock;