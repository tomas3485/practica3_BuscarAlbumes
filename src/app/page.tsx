

import Link from "next/link";


const App = () => {



  return(
    <>
      <div className="main">
      <h1>ALBUMES DE ITUNES</h1>
      <Link href='/albums'>Buscar Albumes</Link>
      <Link href='/favoritos'>Albumes Favs</Link>
      </div>
    </>
  )
}

export default App;