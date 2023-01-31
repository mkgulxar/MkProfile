import React from 'react'

const Paint="https://i.pinimg.com/564x/ba/c8/16/bac816d3c1d91525a047510bca97f4fb.jpg"

const Home = () => {
  return (
  <>
  <div style={{height:'500px', display:'flex', margin:'auto', alignItems:'center',justifyContent:'center' }}>


  <div style={{ textAlign:'right' ,marginTop:'-15pt', width:'50%'}}>
  <h1>BRANDING</h1>
  <h2>unique and recognizable</h2>
  <p >Identity that align with your business needs and are
recognizable as “yours”. Essentially, these graphics will contains all the feature elements that are unique and recognizable for your business</p>
  </div>

  <div style={{width:'30%'}}>
<img src={ Paint} alt="FH Group" style={{height:'500px'}} />
</div>
  </div>
  </>
  )
}

export default Home