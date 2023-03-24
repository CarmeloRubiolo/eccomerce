import { Button } from "@chakra-ui/react"
import { useState } from "react"


const Count = ({ onQuantity }) => {

    const [count, setCount] = useState(0);

    const handleCountSuma = () => {
        if(count <= 9)
        setCount(count + 1)
    }

    const handleCountResta = () => {
        if(count >= 1)
        setCount(count - 1)
    }

    return(
        <>
            <Button onClick={handleCountSuma}>+</Button>
            <p>{count}</p>
            <Button onClick={handleCountResta}>-</Button>
            <Button onClick={() => onQuantity(count) } variant='ghost' colorScheme='blue'>
                    Add to cart
            </Button>
        </>
    )
}

export default Count