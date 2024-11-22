import axios from 'axios';
import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';
const apiUrl = process.env.REACT_APP_API_URL;


export const DataContext = createContext("");
export const Context = ({ children }) => {

    const [context, setContext] = useState({
        cart: [],
        storagePath: '',
        cartTotalPrice: '',
        product: {},
        token: sessionStorage?.getItem('token') ? sessionStorage?.getItem('token')  : '',
        user: sessionStorage?.getItem('user') ? JSON.parse(sessionStorage?.getItem('user')) : {},
    });

    const fetchCart = async () => {
      try {
        const response = await axios.get(`${apiUrl}/cart/carts`, {
          headers: {
            Authorization: `Bearer ${context.token}`,
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

    const quickView = async (SKU) => {

      try {
          const response = await axios.get(`${apiUrl}/quick-view/${SKU}`);
          setContext({
            ...context,
            product: response.data.product,
            storagePath: response.data.storagePath,
          });

      } catch (error) {
        toast.error("error: "+error);

      }
  };


    const addCart = async (formData) => {
      const toastId = toast.loading('Submitting...');
      try {
          const {data} = await axios.post(
              `${apiUrl}/cart/carts`,
              {
                  // Include relevant item details here
                  product_id: formData.product_id, // or whatever your API expects
                  qty: formData.qty || 1 // Set a default quantity if not provided
              },
              {
                  headers: {
                      Authorization: `Bearer ${context.token}`,
                  },
              }
          );


  if (data.status) {
    // Adding new item to cart

    setContext((prevContext) => ({
      ...prevContext,
      cart: [...prevContext.cart, data.cart],
    }));
    toast.update(toastId, { render: data.message, type: 'success', isLoading: false, autoClose: true });
    
  } else {
    // Updating existing item quantity in cart
    const updatedCarts = context.cart?.map((cart) =>
      cart.id === data.cart.id ? { ...cart, qty: data.cart.qty } : cart
    );
    setContext((prevContext) => ({
      ...prevContext,
      cart: updatedCarts,
    }));
    toast.update(toastId, { render: data.message, type: 'success', isLoading: false, autoClose: true });
  }
} catch (error) {
  const message = error.response?.data?.message || "An error occurred.";
  toast.update(toastId, { render: `Error: ${message}`, type: 'error', isLoading: false, autoClose: true });
}
};

    const deleteCart = async (id) => {
        try {
          await axios.delete(`${apiUrl}/cart/carts/${id}`, {
            headers: {
              Authorization: `Bearer ${context.token}`,
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
        <DataContext.Provider value={{ context, setContext, fetchCart, deleteCart , addCart, quickView }}>
            {children}
        </DataContext.Provider>
    )
}
