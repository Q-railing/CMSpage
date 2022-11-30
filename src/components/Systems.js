import React from 'react'
import {useContext} from 'react'
import { Langcontext } from './context/Langcontext'

function Systems() {
  const { context, setcontext}= useContext(Langcontext)
  console.log(sessionStorage.getItem("loginname"))
  return (
    <>
    <div>Systems {context}</div>
    <button onClick={()=>setcontext("hello")}>click</button>
    </>
  )
}

export default Systems