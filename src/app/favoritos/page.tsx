'use client'

import { useLista } from "@/context/MusicContext";
import Link from "next/link";
import './favoritos.css'

const Favs = () => {
    const { lista, deleteFromList } = useLista();

    return (
        <div className="bodyFav">
            <div className="home3">
                <Link href='/'>
                    <button className="botonHome1">🏠</button>
            </Link></div>
            <div className="tituloFav">
                <h1>Albumes Favoritos</h1>
            </div>
            
            <div className="body">
                {lista.length === 0 ? <p>No tienes favoritos aún.</p>: lista.map((album) => (
                        <div key={album.collectionId} className="portadaAlbum">
                            <img src={album.artworkUrl60} alt={album.collectionName} />
                            <p>{album.collectionName}</p>
                            <button
                                className="botonFav"
                                onClick={() => deleteFromList(album.collectionId)}
                            >Eliminar
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Favs;