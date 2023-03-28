import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/filters"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"



function Cart() {

    const { shoppingCart, getQuantity, getTotal, clearCart } = Context()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      <div className="position">
        <div className="btn-cart-container">
            <button className="position-relative" ref={btnRef} onClick={onOpen}>
                <img className="img-cart" src="../../images/compras.png"/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{getQuantity()} <span class="visually-hidden">unread messages</span></span>
            {/* <span className="cartWidget" class="cartWidget">{getQuantity()}</span> */}
            </button>
        </div>
      </div>
        
        <Drawer
            size='lg'
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Carrito</DrawerHeader>
  
            <DrawerBody>
              {getQuantity() === 0 ? <div>
                <h1 className='dont-element'>No hay elementos en el carrito</h1>
                <div className="btn-buildCardMaster">
                    <button className='btn-buildCard'>
                    </button> 
                </div> 
             </div> : shoppingCart.map(prod =>  <CartItem key={prod.id} {...prod}/>)}
            </DrawerBody>
  
            <DrawerFooter>
            {/* <Button onClick={clearCart()} colorScheme='teal' variant='outline'>
              Vaciar carrito
            </Button>  */}
                <div className="totalPagar">
                    <p className='fs-4'><span className='p-4'>Total a pagar:</span> $ {getTotal()}</p>
                </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default Cart