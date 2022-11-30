import React, { useEffect, useState } from 'react'
import './Bestseller.css'

function Bestseller(props) {

    let [bestseller, setbestseller] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/text/maintext/'+props.lang)
     
        .then(res=>res.json())
        .then(json=>setbestseller(json))
    },[props.lang])

  return (
    <div>{bestseller}</div>
  )
}

export default Bestseller