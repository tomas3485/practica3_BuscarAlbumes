'use client'

import { albumById } from "@/lib/api";
import { Album } from "@/type";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import Link from "next/link"
import './dinamico.css'

const InfoAlbum = ()=>{
    const {id} = useParams();
    const [album,setAlbum]=useState<Album|null>(null);

    useEffect(()=>{
        if(!id)return
        albumById(String(id)).then((res)=>{
            setAlbum(res?.data?.results[0])
        })
    },[id])
    if(!album) return <p>cargando...</p>

    return(
        <div className="infoAlbum">
            <div className="home2">
                <Link href='/albums'>
                    <button className="botonHome1">💾</button>
                </Link></div>
            <div className="bodyId">  
                <div className="tituloAlbum">
                    <h1>{album.collectionName}</h1>
                </div>
                <div className="artista">
                    <p>Artista : {album.artistName}</p>
                </div>
                {<img src={album.artworkUrl100}/>}
            </div> 
        </div>
    )
}

export default InfoAlbum;