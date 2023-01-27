import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import getDataBase from "../Listado/stays.js"
import './resultados.css'

function Resultados() {

    const { city, guests } = useParams();
   
    const [ listadoResults, setListadoResults] = useState([]);

    let guestsNumber = parseFloat(guests)

    useEffect(()=>{
        getDataBase().then(
            (dataBase) => setListadoResults(dataBase)
        )
    },[])

    const newListado = listadoResults.filter(casa => (casa.city === city || casa.country === city ) &&  casa.maxGuests <= guestsNumber )


  return (

        <>
        {newListado.length > 0 ? 
        <>
        <div className="match">
          <h2 className="city">Stays in {city}</h2>  
          <h4 className="stays">{newListado.length}+ stays</h4>
        </div>
        
        <div className="containerCards"> 
        {newListado.map((item, id) => {
            return (
            <div className="card" key={id}>
            <img src={item.photo} alt=""/>
            <div className="misc">
             { (item.superHost) ? (<span className="superHost">Super Host</span>) : null }
              <p>{item.type}</p>
              <div>
                <span className="material-symbols-outlined">star</span>
                
                <span className="rate">{item.rating}</span>
              </div>
            </div>
            <p>{item.title} </p>
          </div>)            
        })}    
        </div>
        </>
        
    
        
        :
        <h2  className="match">No se encontraron resultados</h2>
        } 
        </>



    // <div className="containerCards">
    //    {newListado.length > 0 ?
       
    //    newListado.map((item, id) => (
    //     <div className="card" key={id}>
    //     <img src={item.photo} alt=""/>
    //     <div className="misc">
    //      { (item.superHost) ? (<span>Super Host</span>) : null }
    //       <p>{item.type}</p>
    //       <span>*{item.rating}</span>
    //     </div>
    //     <p>{item.title} </p>
    //   </div>
        
        
        ) 
        
        
    
    }



export default Resultados