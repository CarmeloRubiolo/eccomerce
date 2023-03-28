import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"


const DetailContainer = () => {

    const { id } = useParams();

    const [products, setProducts] = useState({})
    const getProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
       .then(response => response.json())
       .then(res => setProducts(res))
     }

     useEffect(() => {
        getProducts()
     },[])

 

    return(
        <>
            <ItemDetail products={products}/>
        </>
    )
}

export default DetailContainer

