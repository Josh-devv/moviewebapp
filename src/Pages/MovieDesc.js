import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {BiPlayCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { useWatchlist } from '../components/WatchList';
import { IoMdStar } from "react-icons/io";
import { HiOutlinePlus } from 'react-icons/hi'
import { AiOutlineHome } from 'react-icons/ai'
import Footer from "../components/Footer";

export default function MovieDesc(){

    const loc = useLocation()//to bring the location of the page
    const {id} = useParams()//taking the id from the routes using useParams which passed thru the routes
    const [mdetails, setMdetails] = useState([]);
    const [weekly, setWeekly]= useState([])
    
    
    const { watchlist, addToWatchlist } = useWatchlist();

    const handleAddToWatchlist = () => {
        addToWatchlist(mdetails);
      };

    //for all movies for the unique id to be found
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=543c959c84a2edaf19d168f7a042f6eb`)
          .then(response => response.json())
          .then(data => setMdetails(data))
          .catch(error => console.error('Error fetching movie details:', error));
         
      }, [id]);

    //for all weekly rated movies
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=543c959c84a2edaf19d168f7a042f6eb`)
          .then(response => response.json())
          .then(json => setWeekly(json.results))
          .catch(error => console.error('Error fetching movie details:', error));
        
           window.scrollTo(0, 0)//for it to go back to the top of the page onClick of any Link
          
        }, [loc]);//by passing in the useLocation hook
  
     //console.log(watchlist);
  
return(
    <section className=" desc-body" >

        <div className="container-fluid head-desc">
            <div className="desc-img">
                <img src={`https://image.tmdb.org/t/p/w500${mdetails.backdrop_path}`} className="iii" alt=""  />
            </div>
        </div>
             
        <div className="container-fluid desc-info">  
            <div className="descc">
                <h1 className="desc-name">{mdetails.title}</h1>
                    <span>
                        {
                            mdetails.release_date && mdetails.release_date.split("-")[0] 
                                ? (
                                    <small>{mdetails.release_date.split("-")[0]}</small>
                                ) : (
                                    <small className="">Release date not available</small>
                                )
                        }
                            <small className="rating ml-3">
                                {typeof mdetails.vote_average === 'number' ? mdetails.vote_average.toFixed(1) : 'N/A'}
                            </small> 
                    </span> 
                
                    <span className="overview">{mdetails.overview}</span>
                    <span className="tagline mt-3"><i>"{mdetails.tagline}"</i></span>
                    <button className="desc-button"><BiPlayCircle size={20}/> Watch Now</button>
            </div>            
            
            <div className="watchlist d-flex">
                
                <button className="text" onClick={handleAddToWatchlist}><HiOutlinePlus />Add WatchList</button>
                <Link to="/">
                    <button className="ml-2" ><AiOutlineHome size={25} className="home" /></button>
                </Link> 
            </div>
        </div>

        <div>
            <h5 className="container-fluid genre pt-5">Josh's WatchList</h5>
                <div className="head-app2">
                    <div className="app2 container-fluid" >
                        <div>
                        <div className="carou-add color-white" onClick={handleAddToWatchlist}>                                                    
                                <HiOutlinePlus size={100} className="add"/>
                               
                        </div> 
                            <div className="" >
                                <span className=" pl-3">Click here to add</span>
                            </div>
                        </div>

                        {
                            watchlist.map((week)=>(
                                <Link to={{pathname: `/movie/${week.id}`, state:{movie: week}}} key={week.id}>    
                                    <div className="carou-w color-white">                                                    
                                        <img src={`https://image.tmdb.org/t/p/w500${week.poster_path}`} alt="" />
                                    </div> 
            
                                    <div className="head-info" >
                                         <span className="info pl-3">{week.title}</span>
                                            <div className='container-fluid ratings d-flex'>
                                                <small className="d-flex justify-content-center align-items-center">
                                                    <IoMdStar size={20} color="yellow" />{week.vote_average}
                                                </small>
                                                {
                                                    week.release_date && week.release_date.split("-")[0]
                                                     ? (
                                                    <small>{week.release_date.split("-")[0]}</small>
                                                    ) : (
                                                    <small className="d-none">Release date not available</small>
                                                )}
                                            </div>                                        
                                    </div>
                              </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

        <div>
            <h5 className="container-fluid genre pt-5">Weekly Rated Movies</h5>
                <div className="head-app2">
                    <div className="app2 container-fluid" >
                        {
                            weekly.map((week)=>(
                                <Link to={{pathname: `/movie/${week.id}`, state:{movie: week}}} key={week.id}>    
                                    <div className="carou-w color-white">                                                    
                                        <img src={`https://image.tmdb.org/t/p/w500${week.poster_path}`} alt="" />
                                    </div> 
            
                                    <div className="head-info" >
                                         <span className="info pl-3">{week.title}</span>
                                            <div className='container-fluid ratings d-flex'>
                                                <small className="d-flex justify-content-center align-items-center">
                                                    <IoMdStar size={20} color="yellow" />{week.vote_average}
                                                </small>
                                                {
                                                    week.release_date && week.release_date.split("-")[0]
                                                     ? (
                                                    <small>{week.release_date.split("-")[0]}</small>
                                                    ) : (
                                                    <small className="d-none">Release date not available</small>
                                                )}
                                            </div>
                                       
                                        
                                        
                                    </div>
                              </Link>
                            ))
                        }
                    </div>
                </div>
               
        </div>

        <Footer />
    </section>
    )
}
