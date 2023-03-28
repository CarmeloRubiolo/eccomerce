import { createContext, useContext, useState } from "react";

export const FiltersContext = createContext()

export const Context = () => useContext(FiltersContext)

export function FiltersProvider ({ children }) {

    const [shoppingCart, setShoppingCart] = useState([])

    const addCart = (product) => {
        setShoppingCart([...shoppingCart, product])
        console.log(shoppingCart)
        const idx = shoppingCart.findIndex(prod => prod.id === product.id)
        console.log(idx)

     }

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    const getQuantity = () =>{
        let quantity = 0
        shoppingCart.forEach(prod => {
            quantity += prod.count
        })
        return quantity
    }


    const [count, setCount] = useState(1);

    const initial = 1
    const stock = 5
    const handleCountSuma = () => {
        if(count < stock)
        setCount(count + 1)
    }

    const handleCountResta = () => {
        if(count > initial )
        setCount(count - 1)
    }


    const getTotal = () => {
        let total = 0
        shoppingCart.forEach(prod => {
            total += prod.price * prod.count
        })
        return total.toFixed(2)
    }

    const clearCart = () =>{
        setShoppingCart([])
    }
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters,
            shoppingCart,
            setShoppingCart,
            addCart,
            getQuantity,
            getTotal,
            clearCart,
            count,
            setCount,
            handleCountSuma,
            handleCountResta
            
        }}>
            {children} 
            </FiltersContext.Provider>
    )
}