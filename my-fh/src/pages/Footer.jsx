import React from 'react'
import './Footer.css';
export const Footer = () => {
  return (
    <>
      <div className="Footer-Flex">
        <div className='width1'>
          <div>
            <div className="Footer-Heading">
              <h1> services</h1>
            </div>
            <div className="Footer-Heading-Text">
              <p>Print & Electronic Media</p>
              <p>Media Buying and Planning</p>
              <p>Marketing Strategies</p>
              <p>BTL Advertising</p>
              <p>Digital Marketing</p>
              <p>Web & Mobile App Development</p>
            </div>
          </div>
            <div className="Footer-Second-Section">
              <p>Concepts & Content Creation</p>
              <p>In-House Designing</p>
              <p>Animation Cell</p>
              <p>Printing and POS Material</p>
              <p>Sales Promotion and Press Release</p>
            </div>
        </div>
        <div  className='width2'>
          <div className="Footer-Career">
            <h1>CAREER</h1>
          </div>
          <div className="Footer-Career-Text">
            <h2>if you want to builds your career share your details</h2>
            <h3>info@fhgroupoc.com</h3>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer