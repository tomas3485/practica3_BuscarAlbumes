import axios from "axios";

export const api = axios.create({
    baseURL: "https://itunes.apple.com",
    timeout: 5000,
})

export const getArtistByName = async (artist: string) => {
    const response = await api.get(`/search?term=${artist}&entity=musicArtist&limit=1`);
    return response.data.results[0];
}
export const getAlbumsByArtistId = async (artistId: number) => {
    const response = await api.get(`/lookup?id=${artistId}&entity=album&limit=20`);
    return response.data.results;
}
export const albumById = async(id:string)=>{
    const response = await api.get(`/lookup?id=${id}`);
    console.log(response);
    return response;
}
