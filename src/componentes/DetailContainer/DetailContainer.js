import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, ButtonGroup, Button, Heading } from '@chakra-ui/react'
import "./DetailContainer.css"
import Count from "../Count/Count"
import { Context } from "../../context/filters"


const DetailContainer = () => {

    const { id } = useParams();

    const { shoppingCart, addCart } = Context();
    console.log(shoppingCart)

    const [products, setProducts] = useState({})
    const getProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
       .then(response => response.json())
       .then(res => setProducts(res))
     }

     const onQuantity = (products, cantidad) => { 
        addCart(products)
     }

     useEffect(() => {
        getProducts()
     },[])

 

    return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-center mt-2">
                <Card maxW='sm'className="card-detail-container">
                    <CardBody>
                        <Image
                        className="img-detail"
                        src={products.image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{products.title}</Heading>
                        <Text>
                            {products.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $ {products.price}
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        <Count onQuantity={onQuantity}/>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>
        </div>
            
        </>
    )
}

export default DetailContainer

