import React, { useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../styles/ReadPage.css'
import Navbar from '../components/NavbarProfil';
import { Button } from 'react-bootstrap';
import RatingModal from "../components/Modals/RatingModal";
import axios from 'axios';
import { useParams } from 'react-router-dom'


export default function ReadPage() {
	const [openModal, setOpenModal] = useState(false)
	const [bookPdf, setBookPdf] = useState(null)
	//console.log(item)
	let {id} = useParams()
	console.log(bookPdf)
	useEffect( () =>{
		axios.get(
			"https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/books/" + id
		).then((res) =>{
			setBookPdf(res.data)
		}).catch((e) => {
			console.log(e)
		})
	}, [id] ) 


	return (
		<>
		<Navbar/>
		
		<section className='judul'>
		{bookPdf?.judul}
		</section>
		
		<div className="read-page">
		<iframe src={bookPdf?.file} width="1100" height="800" allow="autoplay"></iframe>
		</div>

		<section className='under-pdf'>
		<div className="btn" onClick={() => setOpenModal(true)} >
			<Button 
			style={
					{color:"white", 
					background: "#3EB489",
					margin: "4%", 
					border: "none"}
				}
			>Next</Button>
		</div>
		{openModal && <RatingModal onClose={setOpenModal}/>}
		</section>
		</>
	);
}

