
import Link from "next/link";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="titulo">
          <h1>ALBUMES DE ITUNES</h1>
        </div>
        <div className="botonesMain">
          <Link href='/albums'>
            <button className="buscar">Buscar Albumes</button>
          </Link>
          <Link href='/favoritos'>
            <button className="favs">Albumes Favoritos</button>
          </Link>
        </div>
      </div>
    </>
  )  
}

export default App;