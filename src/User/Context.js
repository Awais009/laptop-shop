import axios from 'axios';
import React, { createContext, useState } from 'react'

export const DataContext = createContext("");
export const Context = ({ children }) => {

    const [context, setContext] = useState({
        cart: [],
        storagePath: '',
        cartTotalPrice: '',
    });

    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost/laptop-backend/api/cart/carts`, {
          headers: {
            Authorization: `Bearer 3|BW05sBS54RQekpRWwRaljHwymjD5gQzKnvGJYrr230b926e7`,
          },
        });

        setContext({
          ...context,
          cart: response.data.cart,
          storagePath: response.data.storagePath,
        });
        
        // Calculate the total price on initial load


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const addCart = async (data) => {
      try {
          const response = await axios.post(
              `http://localhost/laptop-backend/api/cart/carts`,
              {
                  // Include relevant item details here
                  product_id: data.product_id, // or whatever your API expects
                  qty: data.qty || 1 // Set a default quantity if not provided
              },
              {
                  headers: {
                      Authorization: `Bearer 3|BW05sBS54RQekpRWwRaljHwymjD5gQzKnvGJYrr230b926e7`,
                  },
              }
          );


           const cartData = response.data;

  if (cartData.status) {
    // Adding new item to cart

    setContext((prevContext) => ({
      ...prevContext,
      cart: [...prevContext.cart, cartData.cart],
    }));
  } else {
    // Updating existing item quantity in cart
    const updatedCarts = context.cart.map((cart) =>
      cart.id === cartData.cart.id ? { ...cart, qty: cartData.cart.qty } : cart
    );

    setContext((prevContext) => ({
      ...prevContext,
      cart: updatedCarts,
    }));
  }
} catch (error) {
  if (error.response?.data?.errors?.qty) {
    console.error("Error response data:", error.response.data.errors['qty']);
  } else {
    console.error("Error message:", error.message);
  }
}
};

    const deleteCart = async (id) => {
        try {
          await axios.delete(`http://localhost/laptop-backend/api/cart/carts/${id}`, {
            headers: {
              Authorization: `Bearer 3|BW05sBS54RQekpRWwRaljHwymjD5gQzKnvGJYrr230b926e7`,
            },
          });
    
          setContext((prevContext) => ({
            ...prevContext,
            cart: prevContext.cart.filter(cart => cart.id !== id),
          }));
        //   setTotalPrice(calculateTotalPrice(updatedCarts));
        } catch (error) {
          console.error("Error deleting cart:", error.message);
        }
      };

     

    return (
        <DataContext.Provider value={{ context, setContext, fetchCart, deleteCart , addCart }}>
            {children}
        </DataContext.Provider>
    )
}
