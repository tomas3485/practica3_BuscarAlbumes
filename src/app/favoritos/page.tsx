'use client'

import { useLista } from "@/context/MusicContext";
import Link from "next/link";

const Favs = () => {
    const { lista, deleteFromList } = useLista();

    return (
        <div className="bodyFav">
            <h1>Albumes Favoritos</h1>
            <Link href="/">volver</Link>
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