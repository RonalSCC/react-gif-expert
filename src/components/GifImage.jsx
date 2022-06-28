import React from 'react'

export const GifImage = ({objItem}) => {
    const {id,title, url} = objItem;
    return (
        <>
            <div className='card DivImage'>
                <img src={url} alt="" />
                <p>{title}</p>
            </div>
        </>
    )
}
