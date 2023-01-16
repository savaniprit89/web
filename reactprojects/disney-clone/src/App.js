import React from 'react';
import Header from './components/Header';
import './App.css';
import Detail from './components/Detail';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter as Router,

  Route,
  
  Switch
} from "react-router-dom";

function App() {
  return (
    
  
    
    
   
  

    

    <Router>
    <div className="app">
   
    <Switch>
      
          <Route path="/">
          <Header />
            <Home />
          </Route>
          <Route path="/detail">
          <Header />
            <Detail />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          
     
    </Switch>
     
    </div>
    </Router>
      
  
    
  );
}

export default App;


//inside router is fix so header will be there
//inside switch any one will be there if home then home and detail then detail



//npm install firebase
//npm install firebase-tools


/*

 <div className="App">
    <Router>
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />}  />
    <Route exact path="/detail" element={<Detail/>}  />
    <Route exact path="/login" element={<Login/>}  />
    </Routes>

    </Router>

      
      
    </div>
    
*/