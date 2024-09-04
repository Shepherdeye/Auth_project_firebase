import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './productsCard.css';
import { useShoppingCart } from '../../../Data/ContextData';
import { Link } from 'react-router-dom';

const ProductsCard = ({ oldPrice, newPrice, id, title, image }) => {
    const { getItemsQuantity, addItemToCart, removeItemFromCart, deleteItems } = useShoppingCart();
    const quantity = getItemsQuantity(id);
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = (id) => {
        addItemToCart(id);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    };

    return (
        <>
            <div className="product-card">
                <div className='w-100 img-fluid mb-3'>
                    <Link to={`/products/${id}`}>
                        <img src={image} alt={title} className="product-image" />
                    </Link>
                </div>
                <h2 className="product-title">{title}</h2>
                <div className="product-prices">
                    <span className="old-price">${oldPrice}</span>
                    <span className="new-price">${newPrice}</span>
                </div>
                {quantity === 0 ? (
                    <button className="add-to-cart" onClick={() => handleAddToCart(id)}>
                        Add to Cart
                        <i className="m-1 bi bi-cart-plus-fill"></i>
                    </button>
                ) : (
                    <div className="quantity-box">
                        <button className="c-btn" onClick={() => removeItemFromCart(id)}>-</button>
                        <span className="quantity text-dark m-1">{quantity}</span>
                        <button className="c-btn" onClick={() => addItemToCart(id)}>+</button>
                        <button onClick={() => deleteItems(id)} className="bin-button">
                            <i className="bi bi-trash-fill"></i>
                        </button>
                    </div>
                )}
            </div>

            <ToastContainer  position="bottom-end" className="p-3 fixed-bottom ">
                <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide className="custom-toast">
                    <Toast.Header>
                        <strong className="me-auto">Cart Notification</strong>
                    </Toast.Header>
                    <Toast.Body>{title} has been added to your cart!
                    <img src={image} alt={title} className="product-image" />
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default ProductsCard;
