import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  // const [click, setClick] = useState{false}
  return (
    <>
    <nav className='navbar'>
    <div className='menu-icon'>
        <ul>
          <li>
         <Link> home</Link>
          </li>
        </ul>
        </div>

    </nav>
    </>
  )
}

export default Navbar