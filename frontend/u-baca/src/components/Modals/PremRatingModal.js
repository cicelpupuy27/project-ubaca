import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import book1 from "../../assets/book1.jpg";
import './Modal.css';
import PointModal from "./PointModal";
import axios from 'axios';
import { useParams } from 'react-router-dom'

const colors = {
    orange: "#ff8431",
    grey: "#788896"
}

function PremRatingModal({onClose}) {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const [openModal, setOpenModal] = useState(false)
    const [bookPdf, setBookPdf] = useState(null)
    let {premiumid} = useParams()
	console.log(bookPdf)
	useEffect( () =>{
		axios.get(
			"https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/locked-books/" + premiumid
		).then((res) =>{
			setBookPdf(res.data)
		}).catch((e) => {
			console.log(e)
		})
	}, [premiumid] ) 


    const profil = JSON.parse(localStorage.getItem('profil'))

    const handleClick = value => {
        setCurrentValue(value);
    }

    const handleMouseOver = value => {
        setHoverValue(value);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }

    const submitReview = (e) => {
        e.preventDefault()
        axios.get(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`)
        .then((res) => {
            console.log(res)
            const resData = res.data
            axios.put(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`, {
                ...resData, 
                point: resData.point + 10
            })
            .then((resUpdate) => {
                setOpenModal(true)
                localStorage.setItem('profil', JSON.stringify(resUpdate.data))
            })
            .catch((eUpdate) => {
                console.log(eUpdate)
            })
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return(
        
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={()=> onClose(false)} className="close"> X </button>

                <div className="modalImage">
                    <img src={bookPdf?.cover} alt=""/>
                </div>

                <div className="body">
                    <h6> {bookPdf?.judul} </h6>
                    <p> {bookPdf?.penulis} </p>
                </div>
  
                <div style={styles.stars}>
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
                </div>

                <textarea 
                    placeholder="Review Buku"
                    style={styles.textarea}
                />
                <button className="btn btn-outline-warning btn-rounded btn-sm my-0" id="submit" type="submit" onClick={submitReview}>Submit</button>
                {openModal && <PointModal onClose={setOpenModal}/>}
            </div>
        </div>
    )
}

const styles = {
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 340,
        padding: 10,
        margin: "20px, 0",
        minHeight: 115,
        marginTop: 30,
        marginBottom: 15,
    },
}

export default PremRatingModal;