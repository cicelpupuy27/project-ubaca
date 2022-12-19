import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarProfil from "../components/NavbarProfil";

function Home(){
    return(
        <>
            {localStorage.getItem('token') != null? (
                <NavbarProfil />
            ): (
                <Navbar />
            )}
            
            <Header />
            <Footer />
        </>
    )
}

export default Home;