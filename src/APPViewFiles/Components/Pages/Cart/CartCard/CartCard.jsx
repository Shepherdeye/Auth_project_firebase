import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../../../../Data/ContextData';
import FormatCurrency from '../../../../Data/HandleCurrency';

const CartCard = ({ id, quantity }) => {
    const { products,
        addItemToCart,
        removeItemFromCart,
        deleteItems, } = useShoppingCart();
    const validProduct = products.find((item) => item.id === id);
    return (
        quantity > 0 && <Card className='mb-2 p-1'>
            <Card.Img style={{ height: "150px", width: "100%", objectFit: "contain" }} variant="top" src={validProduct.image} />
            <Card.Body>
                <Card.Title>{validProduct.title}</Card.Title>
                <Card.Title className='text-danger'>{FormatCurrency(validProduct.price * quantity)}</Card.Title>

                <div className='d-flex gap-1 align-items-start justify-content-center'>
                    <Button onClick={() => addItemToCart(id)} className='d-flex  align-items-center justify-content-center' style={{ width: "30px", height: "30px", textAlign: "center" }} variant="primary">+</Button>
                    <h3 variant="primary">{quantity}</h3>
                    <Button onClick={() => removeItemFromCart(id)} className='d-flex  align-items-center justify-content-center' style={{ width: "30px", height: "30px", textAlign: "center" }} variant="primary">-</Button>
                    <Button onClick={() => deleteItems(id)} className='d-flex  align-items-center justify-content-center' style={{ width: "30px", height: "30px", textAlign: "center" }} variant="danger">
                        <i className="bi bi-trash-fill"></i>
                    </Button>

                </div>
            </Card.Body>
        </Card>
    )
}

export default CartCard