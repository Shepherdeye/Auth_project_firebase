import React, { useState } from 'react'
import { Button, Offcanvas, Card } from 'react-bootstrap';
import { useShoppingCart } from '../../../Data/ContextData';
import CartCard from './CartCard/CartCard';
import FormatCurrency from '../../../Data/HandleCurrency';

const Cart = () => {

  const { handleClose, show, cartItems, getCountOFCartItem, products } = useShoppingCart();

  return (
    <>


      <Offcanvas className="bg-dark text-white" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-success' >
            {
              getCountOFCartItem < 1 ? <h3> Shopping Cart </h3> :
                <div>
                  <strong>Total Price  </strong>
                  {FormatCurrency(cartItems.reduce((total, item) => {
                    const validProduct = products.find((itemval) => itemval.id === item.id);
                    return total + validProduct.price * item.quantity
                  }, 0))}
                </div>
            }

          </Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body>

          {getCountOFCartItem < 1 ?
            <div style={{ fontSize: "60px", textAlign: "center" }} >
              <h3>
                No items in your cart
                <br />
                <i style={{ fontSize: "150px" }} className=" bi bi-cart3"></i>
              </h3>
            </div>
            :
            cartItems.map((item) => {
              return <CartCard key={item.id} id={item.id} quantity={item.quantity} />
            })
          }

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart