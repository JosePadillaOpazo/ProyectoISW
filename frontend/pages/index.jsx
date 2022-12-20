import React,{useState} from "react"

function Datepick (){
  const [date, setDate]=useState();

  return (
    <>
    <h1>Select date</h1>
    <input type={'date'} onChange={e=>setDate(e.target.value)}></input>
    </>
  )
}

export default Datepick