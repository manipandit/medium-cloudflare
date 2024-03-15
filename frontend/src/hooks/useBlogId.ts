import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../utils/util";


export interface Blog{
    title: string;
    content: string;
    id: string;
    author: {
        name: string;
    }
}

export default function useBlogId({id}: {id:string}){

     const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState<Blog>();

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const {data} = await axios.get(`${backendUrl}/blog/get/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`, 
                }
            });
            setBlog(data.blog);
        } catch (error) {
            throw error;
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogs()
    },[]);

    return {loading, blog};
}