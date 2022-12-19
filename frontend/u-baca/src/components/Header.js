import React from "react";
import Card from "./Card";
import Category from "./Category";
import { RandomQuote } from "./RandomQuote";
import { useState, useEffect } from "react";
import axios from 'axios';


function Header(){
    const [bookData, setBookData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    
    useEffect(() => {
        axios.get(
            "https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/books/"
            ).then(res => {
                setBookData(res.data)
                // console.log(res.data)
            })
    }, [])

    function onSearch(e){
        e.preventDefault()
        axios.get(
            "https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/books?search=" + searchTerm
        ).then((res) => {
            setBookData(res.data)
        })
    }
    return(
        <div id="main">

            {/* quote section */}
            <section className="pt-4 quote">
            <RandomQuote/>
            </section>

            {/* searchbar */}
            <div className="container search">
                <div className="d-flex justify-content-center">
                    <div className="searchbar">
                        <form className="form-inline md-form mr-auto mb-4" onSubmit={onSearch}>
                        <input className="search_input " type="text" name="" placeholder="CARI BUKU" onChange={e => {
                            setSearchTerm(e.target.value)
                        }}/>
                        <button className="btn btn-outline-warning btn-rounded btn-sm my-0" id="src-button" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <h2 className="info"> Newly Added Books </h2>
            
            <div className="card-container">
                <Card book={bookData}/>
            </div>


            <div className="ctg">
                <p></p>
                <h2 className="info-2">10 Books in 5 Categories</h2>
                <button type="button" className="btn" id="seeCtg">See All</button>
            </div>

            <div className="card-container">
                <Category/><br></br>
            </div>

        </div>
    )
}
export default Header;