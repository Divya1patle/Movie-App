
import React from "react"

import "./App.css";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import Router from "./component/Router";

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <NavBar/>
      <Router/>
      
    </div>
    </>
  );
}

export default App;



































































// import React, {useState} from 'react';
// import "./styles.css";
// export default function App() {
//  const [input1data,setinput1data] = useState();
//  const [input2data,setinput2data] = useState();
//  const handleinput1 = (event) =>{
//  setinput2data(Number(event.target.value) +1);
//  };
//  const handleinput2 = (event) =>{
//  setinput1data(Number(event.target.value) - 1);
//  };

//  return (
//  <div className="App">
//  <input type="number" value={input1data} onChange={handleinput1}/>
//  <input type="number" value={input2data} onChange={handleinput2}/>
//  </div>
//  );



//  import React, { useState, useEffect } from "react"; 
//  import axios from "axios"; 
//  import "../index.css"; 
//  const Project = () => { 
//    const [lists1, setLists1] = useState([]); 
//    const [displays1, setDisplays1] = useState([]); 
//    const [lists, setLists] = useState([]); 
//    const [shows, setShows] = useState(""); 
//    const [displays, setDisplays] = useState([]); 
//    const [tick, setTick] = useState(true); 
  
//    useEffect(() => { 
//      axios 
//        .get("https://api.tvmaze.com/search/shows?q=friends") 
//        .then((response) => { 
//          console.log(response.data); 
//          setLists(response.data); 
//        }); 
//    }, []); 
  
//    useEffect(() => { 
//      axios 
//        .get("https://api.tvmaze.com/search/people?q=akon") 
//        .then((response) => { 
//          console.log(response.data); 
//          setLists1(response.data); 
//        }); 
//    }, []); 
//    const submitbutton = () => { 
//      setDisplays( 
//        lists.filter((list) => list.show.name.toLowerCase().includes(shows)) 
//      ); 
//      setDisplays1( 
//        lists1.filter((list1) => list1.person.name.toLowerCase().includes(shows)) 
//      ); 
//    }; 
//    return ( 
//      <> 
//        <div className="main-box"> 
//          <div className="box"> 
//            <h1>TVmaze</h1> 
//            <h2>Search your favourite shows</h2> 
//            <div className="ans"> 
//              <input 
//                className="ans" 
//                type="checkbox" 
//                checked={tick} 
//                onChange={() => setTick(!tick)} 
//              /> 
//              <label>Actors</label> 
//              <input 
//                className="ans" 
//                type="checkbox" 
//                checked={!tick} 
//                onChange={() => setTick(!tick)} 
//              /> 
//              <label>Shows</label> 
//            </div> 
//            <br></br> 
//            <input type="text" onChange={(e) => setShows(e.target.value)} /> 
//            <button onClick={submitbutton}>Submit</button> 
//          </div> 
//          <div className="box1"> 
//            {tick ? ( 
//              <div className="actor"> 
//                {displays1.map((display1) => 
//                  display1.person.image !== null ? ( 
//                    <li> 
//                      <img src={display1.person.image.medium} alt ="NA" /> 
//                      <h4>{display1.person.name}</h4> 
//                      <h7>Birthday : {display1.person.birthday}</h7> 
//                    </li> 
//                     
  
//                  ) : ( 
//                    <></> 
//                  ) 
//                )} 
//              </div> 
//            ) : ( 
//              <div className="show"> 
//                {displays.map((display) => 
//                  display.show.image !== null ? ( 
//                    <li> 
//                      <img src={display.show.image.medium} alt ="NA" /> 
//                      <h4>{display.show.name}</h4> 
//                      <h7>Geners : {display.show.genres}</h7> 
//                    </li> 
//                  ) : ( 
//                    <></> 
//                  ) 
//                )} 
//              </div> 
//            )} 
//          </div> 
//        </div> 
//      </> 
//    ); 
//  }; 
  
//  export default Project;

//  import Project from "./components/Project"; 
  
//  function App() { 
//    return ( 
//      <div className="App"> 
//        <Project /> 
//      </div> 
//    ); 
//  } 
  
//  export default App;




// .App { 
//    text-align: center; 
//  } 
  
  
//  body { 
//    background-image: url("./image.jpg"); 
//    background-size: cover; 
//    background-repeat: no-repeat; 
//  } 
  
//  .box { 
//    position: absolute; 
//    left: 20%; 
//    margin-top: 30px; 
//    width: 50%; 
//    height: 300px; 
//    background-color: black; 
//    padding: 2rem; 
//    opacity: 0.9; 
//  } 
  
//  .show { 
//    display: grid; 
//    grid-template-columns: repeat(4, 1fr); 
//  } 
  
//  h1 { 
//    color: white; 
//    opacity: 1; 
//  } 
  
//  label { 
//    color: white; 
//  } 
  
//  h2 { 
//    margin-bottom: 70px; 
//    color: white; 
//  } 
  
//  .box1 { 
//    position: absolute; 
//    left: 15%; 
//    width: 65%; 
//    top: 450px; 
//    height: fit-content; 
//  } 
  
//  .ans { 
//    margin-bottom: 20px; 
//  } 
  
//  li { 
//    list-style: none; 
//  } 
  
//  h4 { 
//    color: #eeeeee; 
//  } 
//  h7{ 
//    color: #eeeeee; 
//  }