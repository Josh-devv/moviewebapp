import React from "react";
import Navbar from "../components/Navbar";
import ppp from '../Assets/mob-bg.png'


export default function Home(){
    return(
        <>
            <Navbar />
            <section className="home-banner">
               <div className="home-page">
                    <div>
                        <h1 className="">Discover free Movies</h1>
                        <p>Thousands of movie & TV shows available just for you!</p>
                        <button>Explore</button>
                    </div>
                    
                    <div>
                        <img src={ppp} alt="img"/>
                    </div>
               </div>
               
            </section>
        </>
    )
}