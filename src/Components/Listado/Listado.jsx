import { useState, useEffect } from "react"
import getDataBase from "./stays"
import './listado.css'

function Listado() {
const [ listado, setListado ] = useState([])

  useEffect(
    ()=>{
      getDataBase().then(
        (dataBase) => {
          setListado(dataBase)
        }
      )

  },[])

  return (
    <div className="containerCards">
        {listado.map((item, id) => (
          <div className="card" key={id}>
            <img src={item.photo} alt=""/>
            <div className="misc">
             { (item.superHost) ? (<span className="superHost">Super Host</span>) : null }
              <p>{item.type}</p>
              <span>*{item.rating}</span>
            </div>
            <p>{item.title} </p>
          </div>
          
        ))}
    </div>
  )
}

export default Listado