import type { Album } from "@/type";
import Link from "next/link";

export const AlbumCard=({album}:{album:Album})=>{
    return(
        <Link href={`/albums/${album.collectionId}`}>
            <div className="portadaAlbum">          
                {<img src={album.artworkUrl60}/>}
                {album.collectionName}
                <button className="botonFav">Favorito</button>
            </div>
        </Link>
    )
}