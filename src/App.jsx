import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { Maps } from './components/Maps'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import Alert from '@mui/material/Alert';

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [search, setSearch] = useState("")


  useEffect(() => {
    api.get(`/character/?page=${page}`).then((response) => {
      console.log(response)
      if(!response.data.results){
        <Alert severity="info">Vazio</Alert>
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        <Alert severity="info">"Esta pagina nao contem este personagem"</Alert>
        console.log("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page])
  useEffect(() => {
    api.get(`/character/?name=${search}`).then((response) => {
      console.log(response)
      if(!response.data.results){
        <Alert severity="info">Vazio</Alert>
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        <Alert severity="info">"Esta pagina nao contem este personagem"</Alert>
        console.log("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [search])


  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.Card2}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} categoria={item.categoria} status={item.status} key={item.id}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div >
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            <div >
               <input type="text" placeholder="search" value={search} onChange={(event) => setSearch(event.target.value)}/>
            </div>

            <div className={style.Card2}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <Card name={item.name} desc={item.species} value={item.gender} image={item.image} />
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
              <Maps></Maps>
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
