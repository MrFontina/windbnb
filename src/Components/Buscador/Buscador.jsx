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
    const keyword = e.currentTarget.keyword.value;
    const correctKeyword = capitalizeFirstLetter(keyword)
    
    
    navigate(`/resultados/${correctKeyword}`)
   
    
    
  }



  return (
    <form onSubmit={handlerCity}>
      <label>
        <input  type="text" name="keyword" placeholder="city" />
      </label>
      <label>
        <input type="text" placeholder="add guest" />
      </label>
      <button type="submit">buscar</button>
    </form>
  )
}

export default Buscador