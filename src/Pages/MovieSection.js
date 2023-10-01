import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import Popular from '../components/Popular'
import Footer from '../components/Footer';
import Rated from '../components/Rated'
import UpComing from '../components/UpComing'
import { Link } from 'react-router-dom'; 
import { FaSpinner } from 'react-icons/fa';
import Home from './Home';

export default function MovieSection(){
    
    const [ratedMovies, setRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [popularMovies, setPopularMovies] = useState([])
    const [upComingMovies, setUpComingMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('');//this state is the one that would be going thru the routes and taking along the value searched

    //this is for upcoming movies
    useLayoutEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=543c959c84a2edaf19d168f7a042f6eb")
            .then(response => response.json())
            
            .then(json=> {
                setUpComingMovies(json.results)
                setLoading(false)
            })

            
    }, []);

    //this is for popular movies
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=543c959c84a2edaf19d168f7a042f6eb")
            .then(response => response.json())
            .then(json=> setPopularMovies(json.results))
     
    }, []);

    //this is for top rated movies
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=543c959c84a2edaf19d168f7a042f6eb")
            .then(response => response.json())
            .then(json=> setRatedMovies(json.results))
     
    }, []);

    /*
<div className="container-fluid app">
            <h1 className="movie-head">Josh Flix Unchained</h1>

            <div className="search">
                <Link to={`/search/${searchQuery}`} className='pl-3 pr-2'>
                    <GoSearch size={20} />
                </Link>
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}placeholder="Search for something"/>
            </div>
        </div>
    */
  
   return ( 
    <>
    <Home />
    <body className="body py-2">

        
        <div>

        </div>
        <h5 className="container-fluid genre pl-4 pt-4 pb-1">Upcoming movies</h5>
        
        <div className='db'>
        <AiOutlineLeft className="ar left"/>
            <AiOutlineRight className="ar right"/>
           </div>
            <div className='container-fluid head-app2'>
               
                    {
                        loading ? (
                            <div className=" spins w-100">
                            <FaSpinner spin className='spin' size={25}/>
                           
                            </div>
                        ) : (
                            <div className="app2">
                                <UpComing upComingMovies={upComingMovies} loading={loading}/> 
                             </div>
                        )
                    }
                         
                
            </div>   

         <h5 className="container-fluid genre pl-4 pt-4">Popular Movies</h5>
         <div className='db'>
            <AiOutlineLeft className="ar left"/>
            <AiOutlineRight className="ar right"/>
           </div>
            <div className='container-fluid head-app2'>
                    {
                        loading ? (
                            <div className=" spins w-100">
                            <FaSpinner spin className='spin' size={25}/>
                           
                            </div>
                        ) : (
                            <div className="app2">
                             <Popular popularMovies={popularMovies} loading={loading}/> 
                             </div>
                        )
                    }
            </div>

         <h5 className="container-fluid genre pl-4 pt-4">Top Rated Movies</h5>
           <div className='db'>
            <AiOutlineLeft className="ar left"/>
            <AiOutlineRight className="ar right"/>
           </div>
           
            <div className='container-fluid head-app2'>
                    {
                        loading ? (
                            <div className=" spins w-100">
                            <FaSpinner spin className='spin' size={25}/>
                           
                            </div>
                        ) : (
                            <div className="app2">
                             <Rated ratedMovies={ratedMovies} loading={loading}/> 
                             </div>
                        )
                    }
            </div>


        <Footer />
    </body>
    </>
   )
    }
