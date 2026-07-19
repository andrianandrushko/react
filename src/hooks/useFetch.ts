import {useEffect, useState} from "react";


export const useFetch = <T,>(url:string) => {
    const [posts, setPosts] = useState<T>([] as T);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setPosts(data))
    },[url])
    return posts;
}
