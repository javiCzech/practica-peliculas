import { useState } from "react"

export const InputCategories = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() <= 1) return;
        onNewCategory(inputValue.trim())
        setinputValue('');
    }
    const handleOnChange = ({target}) => {
        setinputValue(target.value);
    }
    
  return <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="Ingrese el nombre de una pelicula"
    value={inputValue}
    onChange={handleOnChange}
    />
    </form>
}
