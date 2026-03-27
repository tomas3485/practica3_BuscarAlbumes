import axios from "axios";

export const api = axios.create({
    baseURL: "https://itunes.apple.com",
    timeout: 5000,
})

export const albumByArtistName = async (artist: string) => {
    // Paso 1: buscar el artista
    const artistRes = await api.get(`/search?term=${artist}&entity=musicArtist&limit=1`);
    const artistId = artistRes.data.results[0]?.artistId;
    if (!artistId) return null;

    // Paso 2: buscar sus álbumes
    const albumsRes = await api.get(`/lookup?id=${artistId}&entity=album&limit=20`);
    return albumsRes;
}
export const albumById = async(id:string)=>{
    const response = await api.get(`/lookup?id=${id}`);
    console.log(response);
    return response;
}
