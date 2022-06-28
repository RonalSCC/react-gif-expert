import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['Development']);
    const onAddCategory  = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // categories.push(valueInput);
    }

    return (
        <>
            {/* TITULO */}
            <h1 className='TitleApp'>GifExpertApp</h1>

            {/* INPUT - Button */}
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{width: '80%', display: 'flex'}}>
                    {/* INPUT */}
                    <AddCategory 
                        onNewCategory={onAddCategory}
                    />
                </div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                    <button onClick={onAddCategory} className='BtnAgregar'>Agregar</button>
                </div>
            </div>

            {/* LIST DE GIF */}
            { 
                categories.map((category) => ( 
                    <GifGrid key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
