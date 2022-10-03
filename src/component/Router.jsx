import React from "react";
import { Routes, Route} from "react-router-dom";
import Actor from "./Actor";
import Show from "./Show";

function Router(){
    return(
        <>
        <Routes>
        <Route path="/" element={<Actor/>}  />
        <Route path="/Show" element={<Show/>}/>
        </Routes>
      
        </>

    )
}
export default Router;