import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import "./product.css"
import { useShoppingCart } from '../../../../Data/ContextData';

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({});
  const { getItemsQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteItems } = useShoppingCart();
  const quantity = getItemsQuantity(id)
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((respone) => {
      setProduct(respone.data);
      setLoading(false)

    }).catch((error) => {
      console.log(error);

    })
  }, [product])
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <Container  className="productContainer bg-white">
      <Row>
        <Col md={6}>
          <div className='w-50 d-flex align-items-center justify-content-around ' >
            <Image style={{ height: "300px" }} className='object-fit-contain w-100' src={product.image} />

          </div >
        </Col>
        <Col md={6}>
          <h2 >{product.title} </h2>
          <p className="text-muted">Category</p>
          <h4 >${product.price}</h4>
          <p>
            {product.description}
          </p>

          {quantity > 0 ? <div className='d-flex gap-1 align-items-start justify-content-center'>
            <Button onClick={() => addItemToCart(product.id)} className='d-flex  align-items-center justify-content-center' style={{ width: "30px", height: "30px", textAlign: "center" }} variant="primary">+</Button>
            <h3 className='text-dark' variant="primary">{quantity}</h3>
            <Button onClick={() => removeItemFromCart(product.id)} className='d-flex  align-items-center justify-content-center' style={{ width: "30px", height: "30px", textAlign: "center" }} variant="primary">-</Button>
            <Button onClick={() => deleteItems(product.id)} className='d-flex  align-items-center justify-content-center' style={{ width: "30px", height: "30px", textAlign: "center" }} variant="danger">
              <i className="bi bi-trash-fill"></i>
            </Button>

          </div> : <Button variant="primary" onClick={() => addItemToCart(product.id)}>Add to Cart</Button>
          }


        </Col>
      </Row>
    </Container>
  )
}

export default Product