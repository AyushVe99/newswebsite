import React, { useEffect, useState } from 'react'
import axios from 'axios';
const FetchData = ({cat}) => {
    const [data,setData]=useState();
    const fetchData=async()=>{
        await axios.get(
            cat
            ?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=40888252b26d4beeb76d6b717222d827`
            :"https://newsapi.org/v2/top-headlines?country=in&apiKey=40888252b26d4beeb76d6b717222d827"
        ).then((response)=>setData(response.data.articles))
    };
   useEffect(() => {
    fetchData();
   }, [cat]);
   

    
  return (
    <div className='container my-4'>
      <h2 style={{textAlign:"center"}}><u>LATEST NEWS</u></h2>
      <div className='container my-3 d-flex justify-content-center align-items-center flex-column p-3' tyle={{minHeight:"100vh"}}>{data?data.map((item,index)=><>
      <div className='container my-3' style={{width:"600px" , boxShadow:"2px 2px 10px silver", borderRadius:"10px"}}>
        <h5 className='my-2'>
            {
                item.title
            }
        </h5>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <img alt="title" src={item.urlToImage} className="img-fluid width " style={{width:"100%",height:"300px", objectFit:"cover"}}/>        <p>{item.description}</p>
        </div>
         <p className='my-1'>{item.content}</p>
         <a href={item.url} target="blank" style={{textDecoration: 'none', color:"red"}}>View More...</a>
      </div>
      </>):"loading"}</div>
    </div>
  )
}

export default FetchData
