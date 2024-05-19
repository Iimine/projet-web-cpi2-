import './css/style.scss';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Inscription from './pages/Inscription';
import Login from './pages/Login';
import Novbare from './pages/Novbare'; 
import Footer from './pages/Footer';
import Home from './pages/Home';

const App = () => {
    return (
        <div className="App">
            <Router>
              <Routes>
              
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Inscription" element={<Inscription />} />
              </Routes>
            
              
              <Novbare/>
              <Home/>
              <Footer/> 

            </Router>
            
        
        </div>
    );
};
export default App;
