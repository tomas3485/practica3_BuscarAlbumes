import { useLista } from "@/context/MusicContext";
import type { Album } from "@/type";
import Link from "next/link";

export const AlbumCard=({album}:{album:Album})=>{

    const {addToList,isFav}= useLista();
    const favorito = isFav(album.collectionId);
    return(
        <div className="portadaAlbum">
            <Link href={`/albums/${album.collectionId}`}>
                <div className="portadaAlbum">          
                    {<img src={album.artworkUrl60}/>}
                    {album.collectionName}
                    
                </div>
            </Link>
            <button className="botonFav"
            onClick={()=>addToList(album)}
            disabled={favorito}
            >Favorito</button>
        </div>
    )
}