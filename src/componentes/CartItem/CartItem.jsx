import './CartItem.css'
import { Context } from '../../context/filters'
import { Button } from '@chakra-ui/react'


const CartItem = ({image, title, price}) => {

    const { count, handleCountSuma, handleCountResta} = Context()
    return(
        <>
        <div className="container-cart">
                <div className="card card-cart">
                    <div className="card-item">
                        <div className="d-flex align-items-center">
                            <Button onClick={handleCountSuma}>+</Button>
                            <p className="text-center"> { count} </p>
                            <Button onClick={handleCountResta}>-</Button>
                        </div>
                        <div>
                            <img className="img-cart-item d-flex align-items-center" src={image} alt={title}></img>
                        </div>
                        <div className="title-cart-item d-flex align-items-center">
                            <p className=" text-center d-flex align-items-center">{title}</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p> $ {price}</p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default CartItem