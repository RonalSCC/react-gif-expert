export const getImagesAPI = async(search) => {
    try {

        const apiKey = 'kQ956mTijUpEjQjC7MpuB8XWiEHr08St';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${search}&limit=5`);
        const { data } = await resp.json(); 
        const gifs = data.map(img =>(
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        ));
        return  gifs;
    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen';
    }
}



