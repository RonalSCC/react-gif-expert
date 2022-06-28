import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("");
    const OnInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 0 ) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    }


    return (
        <form style={{width: '100%', display: 'flex'}} onSubmit={onSubmit}>
            <input 
                id='inputNewCategory' 
                type="text" 
                placeholder='Por favor escribe la nueva categoria'
                onChange={OnInputChange}
                value={inputValue}
            />
        </form>
    )
}
