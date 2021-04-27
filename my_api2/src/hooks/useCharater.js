import React,{useState,useEffect} from 'react'



const useCharater = url => {
    const [carater,setcarater]= useState([])
    useEffect(()=>{
        fetch(url)
        .then(Response => Response.json())
        .then(data => setcarater(data.results))
    },[url])
    
    return carater
}
export default useCharater