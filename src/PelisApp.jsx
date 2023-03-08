import { useState } from "react"
import { InputCategories } from "./components/InputCategories";
import { MoviesGrid } from "./components/MoviesGrid";

export const PelisApp = () => {
    const [categories, setcategories] = useState(['One Piece']);
    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return
        setcategories([ newCategory ], ...categories );
    }

  return <>
    <h1 className="h1"> PelisApp</h1>
    <h2 className="h2">Busca tu pelicula aqui</h2>
    <InputCategories onNewCategory={onAddCategory}/>
          
    {
        categories.map( category => (
          <MoviesGrid key={category} category={category}/>
        ))
        }  
    </>
}
