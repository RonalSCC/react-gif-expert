import { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifImage} from './GifImage'; 

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log(isLoading);
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando</h2>
            }
            <div className='ContainerImageCategory'>
                {
                    images.map((image) => ( 
                        <GifImage key={image.id} objItem={image}></GifImage>
                    ))
                }
            </div>
        </>
    )
}
