import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { AiOutlineBars } from "react-icons/ai";
import '../Anim/animations.css'

export default function Navbar(){

    const [searchQuery, setSearchQuery] = useState('')
    const [menu, setMenu] = useState(false)

    

    //for the blur background for navbar
    window.onscroll = () => {
            let blur = document.querySelector('.blur')
        if (window.scrollY >= 50) {
            blur.classList.add('backdrop')
        } else{
            blur.classList.remove('backdrop')
        }
    }

    const handleAnim = () => {
      const el = document.querySelector('.types2')
      el.classList.remove('types')
      el.classList.add('types')
    }

    return(
        <body className="body-nav">
          
            <div className="" id="sticky">
                <h2 className="nav-head">Josh Flix</h2>
                <div className="types">
                    <h6 className="pl-2 pr-4">Movies</h6>
                    <h6 className="pl-2 pr-4">Genre</h6>
                    <h6 className="pl-2 pr-4">Tv Shows</h6>
                </div>

                <div className="search mr-5">
                  <div className='pr-1 pt-2'>
                    <Link to={`/search/${searchQuery}`} className='pl-3 pr-2'>
                      <GoSearch size={20} color="blue"/>
                    </Link>
                  </div>

                  <input type="text" value={searchQuery}                    
                      onChange={(e) => {
                      setSearchQuery(e.target.value)
                    }}
                    placeholder="Search for something"
                    />
                </div>

                <div className="menu">
                    <AiOutlineBars  size={28} onClick={() => {
                      setMenu(!menu)
                      handleAnim()
                    }}/>
                </div>

                <div className="blur backdrop"></div>
            </div>
            
            {menu &&
            <div className="menu-bar">
                        <div className="types2 types">
                          <h6 className="pl-2 pr-4">
                            <Link to={`/search`}>
                              Movies
                            </Link>
                          </h6>
                          <h6 className="pl-2 pr-4">Genre</h6>
                          <h6 className="pl-2 pr-4">Tv Shows</h6>
                        </div>  
                                  
                        <div className="search-div">
                            <div className="search2">
                                <div className='pt-2'>
                                  <Link to={`/home/search/${searchQuery}`} className='pl-3 pr-2'>
                                    <GoSearch size={20} color="blue"/>
                                  </Link>
                                </div>

                                <input type="text" value={searchQuery}                    
                                    onChange={(e) => {
                                    setSearchQuery(e.target.value)}}
                                    placeholder="Search for something"
                                    />
                            </div>
                        </div>                                      
                    </div>}



        <script>

        </script>


        </body>
    )
}