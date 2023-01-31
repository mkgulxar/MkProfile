import React from 'react'

const Paint="https://i.pinimg.com/280x280_RS/3b/ec/85/3bec85299109b0f5560bebbee751c6fc.jpg"
const ldeco ={ listStyle:'none'};
const TexD ={  textDecoration:'none', color:'#424242' };

export const top = () => {
  return (
    <>
<nav style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:"center",alignItems:'center'}}>
  <img src={Paint} style={{height:'auto', width:'70pt'}}/>
  {/* <a style={TexD} href="/">Stie Name</a> */}

  <ul style={{ display:'flex', flexDirection:'row', width:'250px',justifyContent:'space-around' }}>

    <li style={ldeco}><a style={TexD}  href="/home">home</a></li>
    <li style={ldeco}><a style={TexD} href="/about">about</a></li>
    <li style={ldeco}><a style={TexD} href="/contact">contact</a></li>
    <li style={ldeco}><a style={TexD} href="/service">service</a></li>
    
  </ul>
</nav>
    </>
  )
}
export default top;