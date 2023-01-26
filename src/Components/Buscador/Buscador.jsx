import { useNavigate } from "react-router-dom";


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
    <form onSubmit={handlerCity}>
      <label>
        <input  type="text" name="city" placeholder="city" />
      </label>
      <label>
        <input type="text" name="guests" placeholder="add guest" />
      </label>
      <button type="submit">buscar</button>
    </form>
  )
}

export default Buscador