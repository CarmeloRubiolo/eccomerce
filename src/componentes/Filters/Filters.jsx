import { useState, useId } from "react"
import { useFilters } from "../../hooks/useFilters"
import "./Filters.css"

export function Filters () {
    const { setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()



    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }
    
    return (
        <section className="filter-container filters">
            <div >
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input 
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>$ {minPrice}</span>
            </div>
            <div >
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value="men's clothing">Hombre</option>
                    <option value='jewelery'>Joyas</option>
                    <option value='electronics'>Electronica</option>
                    <option value="women's clothing">Mujer</option>
                </select>
            </div>
        </section>
    )
}