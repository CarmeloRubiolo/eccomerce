import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Count from "../Count/Count"
import { Context } from "../../context/filters"
import './ItemDetail.css'
const ItemDetail = ({products}) => {

const { addCart } = Context()

    const onAdd = (count) => {
        addCart({...products, count})
    }
    return (
        <>
        <div className="z-n1 d-flex justify-content-center">

            <Card className="card" maxW='sm'>
                <CardBody className="d-flex flex-column align-items-center">
                    <Image
                    className="img-fluid"
                    width='250px'
                    src={products.image}
                    alt={products.title}
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
                    <Count onAdd={onAdd}/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
        </>
    )
}

export default ItemDetail