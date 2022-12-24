import React from "react";
import Card from "./Card";
import Category from "./Category";
import { RandomQuote } from "./RandomQuote";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';
import Ranking from "./Ranking";
import landingImg from "../assets/landing1.png";

function Header() {
  const [bookData, setBookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    axios.get("https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/books/").then((res) => {
      setBookData(res.data);
      // console.log(res.data)
    });
  }, []);

  useEffect(() => {
    axios.get("https://62b43ed9a36f3a973d2f885e.mockapi.io/books-data/user").then((res) => {
      setRankData(res.data);
      console.log(res.data);
    });
  });

  function onSearch(e) {
    e.preventDefault();
    axios.get("https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/books?search=" + searchTerm).then((res) => {
      setBookData(res.data);
    });
  }
  return (
    <div id="main">
      <div className="container pt-5">
        <div className="row d-flex mt-5 justify-content-lg-between justify-content-center">
        <div className="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-start">
          <h1>Kasih Tulisan apa kek yang asik hehehe sama tambahin button dibawahnya</h1>
        </div>
        <div className="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center">
          <img src={landingImg} />
        </div>
      </div>
      </div>
      {/* quote section */}
      <section className="pt-4 quote">
        <RandomQuote />
      </section>
 
      {/* searchbar */}
      <div className="container search mt-3">
          <div className="searchbar">
            <form className="form-src d-flex justify-content-center col-12 mb-4" onSubmit={onSearch}>
              <div className="col-6">
              <input
                className=" form-control"
                type="text"
                name=""
                placeholder="Cari Buku"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              </div>
              <button className="btn btn-success rounded-circle" id="src-button" type="submit">
                <FaSearch/>
              </button>
            </form>
        </div>
      </div>
      <h2 className="info"> Newly Added Books </h2>

      <div className="card-container">
        <Card book={bookData} />
      </div>
    <h2 className="info mt-3"> Top Readers </h2>
      <div className="rank-container">
        <Ranking rank={rankData} />
      </div>

        {/* Category book */}
        <div className="ctg">
        <p></p>
        <h2 className="info-2">10 Books in 5 Categories</h2>
        <button type="button" className="btn btn-sm" id="seeCtg">
          See All
        </button>
      </div>

      <div className="card-container">
        <Category />
        <br></br>
      </div>
    </div>
  );
}
export default Header;
