import axios, { Axios } from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Cart from "../Components/Pages/Cart/Cart";
import { reducer } from "./ContextReducer";
const initialvalue = [];


const shoppingCartContext = createContext();


const ShopingProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((data) => {
            setProducts(data.data)

            console.log(products);

        }).catch((error) => {
            console.log(error);

        })
    }, [])



    const [cartItems, setCartItems] = useState([]);
    const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id == id)?.quantity || 0
    }
    const addItemToCart = (id) => {
        setCartItems((currentItems) => {
            const currentItem = currentItems.find((item) => item.id === id);
            if (currentItem) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currentItems, { id, quantity: 1 }];

            }
        });
    }
    const removeItemFromCart = (id) => {
        setCartItems((currentItems) => {
            const currentItem = currentItems.find((item) => item.id === id);
            if (currentItem) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                    } else {
                        return item;
                    }
                })
            } else {
                return false
            }
        })
    }
    const deleteItems = (id) => {
        return setCartItems((currentItems) => {
            return currentItems.filter((item) => item.id !== id)
        })
    }
    const getCountOFCartItem = cartItems.reduce((totalcount, item) => {
        return totalcount + item.quantity
    }, 0)



    // view the cart 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // the reducer data 

    const [state, dispatch] = useReducer(reducer, initialvalue)

    return (
        <shoppingCartContext.Provider value={{
            products,
            cartItems,
            getItemsQuantity,
            addItemToCart,
            removeItemFromCart,
            deleteItems,
            handleShow,
            show,
            handleClose,
            getCountOFCartItem,
            state,
            dispatch
        }} >
            {children}
            <Cart />
        </shoppingCartContext.Provider>
    )
}

export default ShopingProvider
const useShoppingCart = () => {
    return useContext(shoppingCartContext)
}
export { useShoppingCart };