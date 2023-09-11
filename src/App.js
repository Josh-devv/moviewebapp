import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { WatchlistProvider } from './components/WatchList';
import MovieSection from './Pages/MovieSection'
import MovieDesc from './Pages/MovieDesc';
import SearchPage from './Pages/SearchPage';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

function App(){
    return (
      
        <WatchlistProvider>  
          <Router>
            <Routes>        
              <Route exact path='/' Component={MovieSection}/>
              <Route path='/movie/:id' Component={MovieDesc}/>
              <Route path='/search/:title' Component={SearchPage}/>        
              
            </Routes>
          </Router>
        </WatchlistProvider>  
        
      // <Home />  
           
  )
}
export default App;
