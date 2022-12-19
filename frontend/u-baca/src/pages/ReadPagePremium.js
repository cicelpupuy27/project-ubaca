import React, { useState, useEffect } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../styles/ReadPage.css'
import Navbar from '../components/NavbarProfil';
import { Button } from 'react-bootstrap';
import PremRatingModal from '../components/Modals/PremRatingModal';
import axios from 'axios';
import { useParams } from 'react-router-dom'


export default function ReadPagePremium() {
	const [openModal, setOpenModal] = useState(false)
	const [bookPdf, setBookPdf] = useState(null)
	//console.log(item)
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
		{openModal && <PremRatingModal onClose={setOpenModal}/>}
		</section>
		</>
	);
}

