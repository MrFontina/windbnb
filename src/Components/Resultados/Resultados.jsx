import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import getDataBase from "../Listado/stays.js"
import './resultados.css'

function Resultados() {

    let params = useParams();
    let keyword = params.keyword;
    const [ listadoResults, setListadoResults] = useState([]);

    useEffect(()=>{
        getDataBase().then(
            (dataBase) => setListadoResults(dataBase)
        )
    },[])

    const newListado = listadoResults.filter(casa => casa.city === keyword)


  return (

        <>
        {newListado.length > 0 ? 
        <>
        <h2 className="match">Stays in {keyword}</h2>
        <div className="containerCards"> 
        {newListado.map((item, id) => {
            return (
            <div className="card" key={id}>
            <img src={item.photo} alt=""/>
            <div className="misc">
             { (item.superHost) ? (<span className="superHost">Super Host</span>) : null }
              <p>{item.type}</p>
              <span>*{item.rating}</span>
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