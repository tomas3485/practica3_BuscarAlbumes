import axios from "axios";

export const api = axios.create({
    baseURL: "https://itunes.apple.com",
    timeout: 5000,
})

export const albumByName = async(album:string)=>{
    const response  =await api.get(`/search?term=${album}&entity=album&limit=20`);
    console.log("api" , response.data.results);
    return response;
}

export const albumById = async(id:string)=>{
    const response = await api.get(`/lookup?collectionId=${id}&entity=album&limit=20`);
    console.log(response);
    return response;
}
