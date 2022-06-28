import { useState, useEffect } from "react";
import {getImagesAPI} from '../javascript/FetchGifs';

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getImagesAPI(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, [])
    

    return {
        images,
        isLoading
    }
}
