import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { WatchlistProvider } from './components/watchlist/WatchList';
import MovieSection from './Pages/moviesection/MovieSection'
import MovieDesc from './Pages/moviedesc/MovieDesc';
import SearchPage from './Pages/search/SearchPage';
import Navbar from './components/navbar/Navbar';
import Home from './Pages/home/Home';

function App(){
    return (
      <>
      
      
        <WatchlistProvider>  
          <Router>
            <Routes>   
                  
              <Route exact path='/' Component={MovieSection}/>
              <Route path='/movie/:id' Component={MovieDesc}/>
              <Route path='/search/:title' Component={SearchPage}/>        
              
            </Routes>
          </Router>
        </WatchlistProvider>  
       </> 
        
           
  )
}
export default App;
