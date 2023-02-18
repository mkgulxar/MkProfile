import React from 'react'
import { AiFillFlag } from 'react-icons/ai';
import '../Pages/Banner01.css'

function Banner01() {
  return (
    <>
    <div className="banner01bg">
    <div>
      <AiFillFlag/>
      </div>
      <div>
        <h2>Get Started with <span>Eatly</span></h2>
        <p>Discover tips & news for your health from experts and get the best discounts by getting started</p>
        <button>Get Started</button>
      </div>
      </div>
    </>
  )
}

export default Banner01
