import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:3333" })


export async function getPosts(){
    const response = await api.get("/");
    const data = response.data;
    console.log(data);
    return data;
}

export async function createPost({title, content}) {
    await api.post("/",{title,content});
}

export async function deletePost({id}) {
    await api.delete(`${id}`);
}