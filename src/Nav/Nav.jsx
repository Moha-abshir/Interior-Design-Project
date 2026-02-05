import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Nav.css'
export default function Nav() {
   return (
      <nav>
         <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
            <p>Mwama Graziers</p>
         </NavLink>
         <ul>
               <li><NavLink to="/">Home</NavLink></li>   
               <li><NavLink to="/about">About</NavLink></li>
               <li><NavLink to="/services">Services</NavLink></li>
               <li><NavLink to="/portfolio">Portfolio</NavLink></li>
         </ul>
         <div className="contact">
               <button>Contact</button>
         </div>
      </nav>
   )
}