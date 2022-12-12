import {useDeferredValue, useEffect, useMemo, useState} from "react";
import {Picture} from "../Types/picture";

const useGettingPictures = (query: string) => {
    const deferredQuery = useDeferredValue(query);
    const [pictures, setPictures] = useState<Picture[]>([]);

    const deferredPictures = useMemo(() => {
        return pictures.filter((picture) => picture.id.toString().startsWith(deferredQuery))
    }, [pictures, deferredQuery])

    useEffect(() => {
        getPictures().then((response) => {
            setPictures(response);
        })
    })

    return deferredPictures;
}

export default useGettingPictures;

async function getPictures(): Promise<Picture[]> {
    return fetch('https://jsonplaceholder.typicode.com/photos?_limit=500').then(res => res.json())
}