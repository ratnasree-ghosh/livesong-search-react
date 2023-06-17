import React,{useState, useEffect} from "react";
import "../App.css";


function LiveSearch() {
    let songs = ["Dil Bechara", "I love you", "Ishq", "Tum jo aye", "senorita", "zindegi na mile dobara", "rustum",
    "go down baby", "butter"];

    let [filteredArr, setFilteredArr] = useState(songs);
    let [searchVal, setSearchVal] = useState("");

    useEffect(()=>{
         
        setFilteredArr(songs.filter((song)=> song.toLowerCase().includes(searchVal.toLowerCase().trim())===true ))
    },[searchVal]);



    return (
      <div className="box">
        <h1>Live Search</h1>
        <input type="search" placeholder="Search" onChange={(e)=> setSearchVal(e.target.value)}/>
        {/* <button >Search</button> */}

        {filteredArr.map((song) =>(
            <p>{song}</p>
        ))}
      </div>
    );
  }
  
  export default LiveSearch;