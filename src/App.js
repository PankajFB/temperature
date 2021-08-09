/* eslint-disable react/jsx-no-undef */
import logo from "./logo.svg";
import code from "./code.jpg";
import "./App.css";
import React, { useState, useEffect } from "react";


// import { Button } from "react-bootstrap";
import Bootstrap from "react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
   
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState([]);
  const [city,setCity] = useState("paris")
  
  
// console.log(users.temp)

  useEffect(() => {

    const wetapi = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f155dd8ea752a2cfde534d5a93594c78`);
      // setUsers(await response.json());
      const resjson = await response.json();
      setUsers(resjson.main);
      setInfo(resjson.weather);
      // console.log(resjson.main.temp)
      console.log(resjson.weather)
      console.log(resjson.weather);
    
    };

    wetapi();

  
  },[city]) 
  return (
    <React.Fragment>
    <div className="App" >
  
    <form className="form-inline temp3">
     <h1>Search any usa city</h1>
    <input onChange={(e)=> setCity(e.target.value)}  className="form-control  d-lg-inline mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    
  </form>

{/* image  and other animations */}
<div >
  <span style={{color: "yellow" ,fontSize: "15rem" }}>
  <i class="fas fa-sun floating sun" ></i>
  <br />
  </span>

 
 
  <img className="back" src={code} alt="Girl in a jacket" width="100%" height="100%"></img>
  <img className="new" src="lol.jpg" alt="Girl in a jacket" width="100%" height="100%"></img>
  
  </div>

  { !users ?   (
    <h1 className="temp floating display-1" >No city found</h1>
  ) : (
      <div>
<h1 className="temp4 floating">{city}</h1>
<span style={{color: "blue" ,fontSize: "15rem" }}>
  <i class="fas fa-cloud-moon floating sun2 " ></i>
  <br />
  </span>
<h1 className="temp floating display-1 "> Curr. Temp : {users.temp}°Celcius</h1><br />
<h1 className="temp2 floating display-1 " > Max Temp : {users.temp_max}°Celcius</h1>
  {/* {
    
         ( info.map((item, i) =>
          <div>
          
          <h1 className="temp2 display-1">{item.description}</h1><br /><br /><br /><br />
          
         
          </div>
          ))
        } */}
       
    
    </div>
  ) }
   
  
  

    
  </div>
  
   
   </React.Fragment>
  );
} 

export default App;
