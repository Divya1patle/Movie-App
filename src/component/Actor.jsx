
import React, { useEffect } from "react";
import { useState } from "react";
import "./Style.css";

function Actor(){
  const [searchData, setSearchData] = useState("");
  const [actorData, setActorData] = useState([]);
  const [actorMovieData, setActorMovieData] = useState([]);

  useEffect(()=>{
   const fetchData = async()=>{
    const response = await fetch(`https://api.tvmaze.com/search/people?q=${searchData}`);
    const result = await response.json();
    console.log(result);
  setActorData(result);
 }
fetchData();
  },[searchData]);

  useEffect(()=>{
    const fetchDatas = async()=>{
       if(actorData.length!==0){
        console.log(actorData[0].person.id);
        if(searchData===""){
            setActorMovieData([]);
        }else{
            const response = await fetch(`https://api.tvmaze.com/people/${actorData[0]?.person?.id}/castcredits?embed=show`);
            const result = await response.json();
            console.log(result);
            setActorMovieData(result);
        }
       }
    }
    fetchDatas();
  },[searchData,actorData]);

    return(
        <div>
            <div className="form">
                <div className="input_form">
                    <input type="text" placeholder="Search by Actor name" value={searchData} onChange={(e)=>{setSearchData(e.target.value)}}/>
                </div>
            </div>
            <div className="data_container">
                {actorMovieData.map((data,index)=>{
                    return(
                        (data._embedded.show.image?.medium)?
                        
                        (<div key={index} className="card-container">
                            <img src={data._embedded.show.image?.medium}/>
                                <p>{data._embedded.show.name}</p>
                        </div>
                        ):(<div></div>)

                    )
                })}
                </div>
            </div>
    )
}
export default Actor;