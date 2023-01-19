import logo from  "../../img/logo.png"
import Buscador from "../Buscador/Buscador"
import { Link } from "react-router-dom"
import './navbar.css'


function NavBar() {
  return (
    <div className="navbar">
        <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>  
        </div>
        <Buscador/>
        
    </div>
  )
}

export default NavBar