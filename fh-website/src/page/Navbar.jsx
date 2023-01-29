import React from 'react'

const Navbar = () => {
  return (
   <>
   <div style={{display:'flex',justifyContent:'space-between', margin:'2px'}}>
    <div>
<h1>FH</h1>
    </div>
    
    <div style={{display:'flex', width:'250px', justifyContent:'space-between',marginTop:'5px', alignContent:'start'}}>
    <h4>Home</h4>
    <h4>services</h4>
    <h4>contact</h4>
    <h4>abou</h4>
    </div>
   </div>
   </>
  )
}

export default Navbar