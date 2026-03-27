'use client'

import { albumById } from "@/lib/api";
import { Album } from "@/type";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import Link from "next/link"

const InfoAlbum = ()=>{
    const {id} = useParams();
    const [album,setAlbum]=useState<Album|null>(null);

    useEffect(()=>{
        if(!id)return
        albumById(String(id)).then((res)=>{
            setAlbum(res?.data?.results[0])
        })
    },[id])
    console.log("p",album)

    if(!album) return <p>cargando...</p>

    return(
        <div className="infoAlbum">
            <h1>{album.collectionName}</h1>
            <p>{album.artistName}</p>
            {<img src={album.artworkUrl60}/>}
            
            <Link href="/albums">Volver</Link>
        </div>
    )
}

export default InfoAlbum;