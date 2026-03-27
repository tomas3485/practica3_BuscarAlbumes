'use client'

import type { Album } from "@/type";
import { createContext, useContext, useState, type ReactNode } from "react";

type ListaContextType = {
    lista:Album[],
    addToList:(item:Album)=>void,
    deleteFromList:(id:number)=>void,
    isFav: (id: number) => boolean;
};

const ListaContext = createContext<ListaContextType | null>(null);

export const ListaProvider = ({children}:{children:ReactNode})=>{
    const [lista,setLista]=useState<Album[]>([]);

    const addToList = (item:Album)=>{
        setLista([...lista,item])
    };

    const deleteFromList=(id:number)=>{
        setLista(lista?.filter(x=>x.collectionId !== id))
    }
    const isFav = (id: number) => {
        return lista.some(x => x.collectionId === id);
    };

    return (
        <ListaContext.Provider value={{lista,addToList,deleteFromList,isFav}}>
            {children}
        </ListaContext.Provider>
    )
};

export const useLista = () =>{
    const context = useContext(ListaContext);
    if(!context){
        throw new Error ('estas fuera del contexto')
    }
    return context;
}