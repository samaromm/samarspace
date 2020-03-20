import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js'
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/contact';
import Cv from './Components/pages/cv';
import Projects from './Components/pages/projects';
import Home from './Components/pages/home'
import Footer from './Components/footer/footer'


class App extends React.Component{
  render(){
    const classImg = window.innerWidth >= 600 ? "bg" : "smallbg";
    return(
      <div className={classImg}>
        <Router>
           <Header/>
           <Route path='/' exact component={Home}/>
           <Route path='/about' exact component={About}/>
           <Route path='/contact' exact component={Contact}/>
           <Route path='/cv' exact component={Cv}/>
           <Route path='/projects' exact component={Projects}/>
           <Footer/>
        </Router>
      </div>  
    )
  }
}

export default App;
