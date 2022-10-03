
import React, { useEffect, useState } from "react";
import "./Style.css";

function Show(){
    const [searchShow, setSearchShow] = useState("");
    const [showData, setShowData] = useState([]);
    
    useEffect(()=>{

        const fetchData = async()=>{
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchShow}`);
            const result = await response.json();
            console.log(result);
            setShowData(result);

        }
        fetchData();
            
},[searchShow])

return(
<div>
    <div className="form">
         <div className="input_form">
             <input type="text" placeholder="Search by Shows" value={searchShow} onChange={(e)=>{setSearchShow(e.target.value)}}/>
         </div>
    </div>
        <div className="data_container">
    {showData.map((data)=>{
        return(
            (data.show.image.medium)?
            (<div className="card-container">
                 <img src={data.show.image.medium} />
                    <p>{data.show.name}</p>
            </div>
            ):(<div></div>)
        )
    })}
        </div>
   </div>
   )
   }

export default Show;