import logo from  "../../img/logo.png"
import Buscador from "../Buscador/Buscador"
import './navbar.css'


function NavBar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <Buscador/>
        
    </div>
  )
}

export default NavBar