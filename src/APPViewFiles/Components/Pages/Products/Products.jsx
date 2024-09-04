import { React, useState } from 'react'
import './products.css'
import { Col, Container, Row } from 'react-bootstrap'
import ProductsCard from './ProductsCard'
import { useShoppingCart } from '../../../Data/ContextData'



const Products = () => {
  const { products } = useShoppingCart();
  const [value, setValue] = useState('');

  // Filter the products based on the search input
  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <Container className='handlethemargin' style={{ height: "100vh", marginTop: "40%" }}>
      <div className='productsSearch mb-4'>
        <label className="search-label">
          <input 
            type="text" 
            name="text" 
            className="input"  
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            placeholder="Type here..." 
          />
          <kbd className="slash-icon">/</kbd>
        </label>
      </div>
      <Row xl={3} lg={3} md={3} sm={1} xs={1}>
        {filteredProducts.map((product) => (
          <Col key={product.id} className='d-flex align-items-center justify-content-center h-25'>
            <ProductsCard 
              image={product.image} 
              title={product.title}
              description={product.description}
              newPrice={product.price}
              oldPrice={product.price}
              id={product.id}
            />

          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products;
