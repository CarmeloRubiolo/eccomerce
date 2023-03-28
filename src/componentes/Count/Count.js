import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { Context } from "../../context/filters"


const Count = ({ onAdd }) => {

    const { count, handleCountSuma, handleCountResta } = Context()

    return(
        <>
            <Button onClick={handleCountSuma}>+</Button>
            <p>{count}</p>
            <Button onClick={handleCountResta}>-</Button>
            <Button onClick={() => onAdd(count) } variant='ghost' colorScheme='blue'>
                    Add to cart
            </Button>
        </>
    )
}

export default Count