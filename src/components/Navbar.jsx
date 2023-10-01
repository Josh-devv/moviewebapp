import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { AiOutlineBars } from "react-icons/ai";
export default function Navbar(){

    const [searchQuery, setSearchQuery] = useState('')

    window.onscroll = () => {
            let blur = document.querySelector('.blur')
        if (window.scrollY >= 50) {
            blur.classList.add('backdrop')
        } else{
            blur.classList.remove('backdrop')
        }
    }

    return(
        <body className="body-nav">
            <div className="" id="sticky">
                <h2 className="nav-head pl-md-5">Josh Flix</h2>

                <div className="search mr-5">
                    <div className='pr-1 pt-2'>
                        <GoSearch size={17} />
                    </div>
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}placeholder="Search for something"/>
                </div>
                <div className="menu">
                    <AiOutlineBars  size={25}/>
                </div>
                <div className="blur backdrop"></div>
            </div>
            
        </body>
    )
}