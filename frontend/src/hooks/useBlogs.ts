import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../utils/util";

interface Blog{
    title: string;
    content: string;
    id: string;
    author: {
        name: string;
    }
}
export function useBlogs() {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const {data} = await axios.get(`${backendUrl}/blog/bulk`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`, 
                }
            });
            setBlogs(data.blogs);
        } catch (error) {
            throw error;
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogs()
    },[]);

    return {loading, blogs};
}