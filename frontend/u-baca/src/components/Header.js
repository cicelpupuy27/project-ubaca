import React from "react";
import Card from "./Card";
import Category from "./Category";
import { RandomQuote } from "./RandomQuote";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Ranking from "./Ranking";
import landingImg from "../assets/landing1.png";

function Header() {
  const [bookData, setBookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rankData, setRankData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://admin.u-baca.my.id/api/book`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBookData(res.data.data);
      });
  }, []);

  useEffect(() => {
    axios.get("https://admin.u-baca.my.id/api/user/rank").then((res) => {
      setRankData(res.data.data);
    });
  }, []);

  function onSearch(e) {
    e.preventDefault();
    axios
      .get("https://admin.u-baca.my.id/api/book/search?key=" + searchTerm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBookData(res.data.data);
      }, []);
  }
  return (
    <div id="main">
      <div className="container pt-5">
        <div className="row d-flex mt-5 justify-content-lg-between justify-content-center">
          <div className="col-lg-6 col-12 mt-3 d-flex justify-content-center justify-content-lg-start">
            <h1>Latih minat bacamu sekarang!</h1>
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
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
      <h2 className="info"> Books Collection </h2>

      <div className="card-container">
        <Card book={bookData} />
      </div>
      <h2 className="info mt-3"> Top Readers </h2>
      <div className="rank-container">
        <Ranking rank={rankData} />
      </div>

      {/* Category book */}
      <div className="text-center mt-5 mb-5">
        <p></p>
        <h4 className="text-center">Our Various Books</h4>
        {/* <button type="button" className="btn btn-sm" id="seeCtg">
          See All
        </button> */}
      </div>

      <div className="card-container">
        <Category />
        <br></br>
      </div>
    </div>
  );
}
export default Header;
