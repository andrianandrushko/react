import {useEffect, useState} from "react";


export const useFetch = <T,>(url:string) => {
    const [posts, setPosts] = useState<T[]>([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setPosts(data))
    },[])
    return posts;
}
