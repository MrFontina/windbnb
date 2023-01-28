import { useNavigate } from "react-router-dom";
import './buscador.css'


function Buscador() {

  function capitalizeFirstLetter(string) {
    return string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
  }
 
  const navigate = useNavigate()
  const handlerCity = e => {
    e.preventDefault();
    const city = e.currentTarget.city.value;
    const guests = e.currentTarget.guests.value;
    const correctCity = capitalizeFirstLetter(city)   
    navigate(`/resultados/${correctCity}/${guests}`)  
  }



  return (
    <form onSubmit={handlerCity} className="buscador">
      <label>
        <input  type="text" name="city" placeholder="city" className="cityBuscador"/>
      </label>
      <span className="separador"></span>
      <label>
        <input type="text" name="guests" placeholder="Add guest" className="guestBuscador"/>
      </label>
      <span className="separador"></span>
        <button type="submit" className="boton"><span className="material-symbols-outlined">
search
</span></button>
      
      
    </form>
  )
}

export default Buscador