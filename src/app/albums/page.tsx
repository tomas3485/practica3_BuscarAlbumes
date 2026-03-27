'use client'
import { useState } from "react";
import './albums.css'
import Link from "next/link";
import { Album } from "@/type/album";
import { getArtistByName,getAlbumsByArtistId } from "@/lib/api";
import { AlbumCard } from "@/components/AlbumCard";

const Albumes=()=>{
    
    const [buscar,setBuscar]=useState<string>("");
    const [album,setAlbum]=useState<Album[]|null>(null);

    const enseñarAlbum = async () => {
    const artist = await getArtistByName(buscar);
    if (!artist) return;

    const results = await getAlbumsByArtistId(artist.artistId);
    const soloAlbumes = results.filter((e: Album) => e.trackCount >= 4);
    setAlbum(soloAlbumes);
    };

    return(
        <>
            <div className="mainAlbumes">
                <div className="home1">
                <Link href='/'>
                    <button className="botonHome1">🏠</button>
                </Link></div>
                <div className="tituloAlbumes">
                    <h1>Buscar Artista</h1> 
                </div>
                
                <div className="cosas">
                    <input
                    className="input"
                    type="text"
                    placeholder="buscar"
                    value={buscar}
                    onChange={(e)=>setBuscar(e.target.value)}/>
                    <button className="boton" onClick={()=>enseñarAlbum()}>Buscar</button> 
                </div>  
                <div className="body">
                    {album?.map((e)=>(
                    <AlbumCard key={e.collectionId ?? e.collectionName} album={e}/>
                    ))}
                </div> 
            </div>
        </>
    )
}

export default Albumes;




