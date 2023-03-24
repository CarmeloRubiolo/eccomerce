import { createContext, useContext, useState } from "react";

export const FiltersContext = createContext()

export const Context = () => useContext(FiltersContext)

export function FiltersProvider ({ children }) {

    const [shoppingCart, setShoppingCart] = useState([])

    const addCart = (product) => {
        setShoppingCart([...shoppingCart, product])
        console.log(shoppingCart)
     }

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters,
            shoppingCart,
            setShoppingCart,
            addCart
        }}>
            {children} 
            </FiltersContext.Provider>
    )
}