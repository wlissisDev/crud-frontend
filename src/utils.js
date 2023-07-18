import axios from "axios";
const api = axios.create({ baseURL: process.env.URL })


export async function getPosts() {
    const response = await api.get("/");
    const data = response.data;
    return data;
}

export async function getOnePosts(id) {
    const response = await api.get("/" + id);
    const data = response.data;
    return data;
}

export async function createPost({ title, content }) {
    await api.post("/", { title, content });
}

export async function deletePost(id) {
    await api.delete("/" + id);
}

export async function updatePost(id, title, content) {
    await api.put("/" + id, { title, content })
}