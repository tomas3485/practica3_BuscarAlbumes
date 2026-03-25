'use client'
import { useState } from "react";
import './albums.css'
import Link from "next/link";
import { Album } from "@/type/album";
import { albumById, albumByName } from "@/lib/api";
import { AlbumCard } from "@/components/AlbumCard";

const Albumes=()=>{
    
    const [buscar,setBuscar]=useState<string>("");
    const [album,setAlbum]=useState<Album[]|null>(null);

    const enseñarAlbum = async ()=>{
        const res=await albumByName(buscar);
        setAlbum(res?.data.results);
        console.log(res?.data?.results)
    }

    //const filtrar=album ? album.filter((c)=>c.collectionName.toLowerCase().includes(buscar.toLowerCase())):null;

    return(
        <>
            <div className="mainAlbumes">
                <h1>Buscar Albumes</h1> 
                <Link href='/'>Home</Link>
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




