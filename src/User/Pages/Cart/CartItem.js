import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CartItem = ({ setTotalPrice }) => {
  const [carts, setCarts] = useState([]);
  const [storagePath, setStoragePath] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL; // Or use a config file

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost/laptop-backend/api/cart/carts`, {
          headers: {
            Authorization: `Bearer 3|BW05sBS54RQekpRWwRaljHwymjD5gQzKnvGJYrr230b926e7`,
          },
        });
        setCarts(response.data.cart);
        setStoragePath(response.data.storagePath);
        
        // Calculate the total price on initial load
        calculateTotalPrice(response.data.cart);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const calculateTotalPrice = (updatedCarts) => {
    const total = updatedCarts.reduce((sum, cart) => sum + cart.product.price * cart.qty, 0);
    setTotalPrice(total);
  };

  const cartUpdate = async (id, qty) => {
    try {
      const response = await axios.put(
        `http://localhost/laptop-backend/api/cart/carts/${id}`,
        { qty },
        {
          headers: {
            Authorization: `Bearer 3|BW05sBS54RQekpRWwRaljHwymjD5gQzKnvGJYrr230b926e7`,
          },
        }
      );

      setCarts((prevCarts) =>
        prevCarts.map(cart => 
          cart.id === id ? { ...cart, qty: response.data.cart.qty } : cart
        )
      );
      
      // Recalculate the total price after updating cart quantity
      calculateTotalPrice(
        carts.map(cart => (cart.id === id ? { ...cart, qty: response.data.cart.qty } : cart))
      );
    } catch (error) {
      console.error("Error updating cart:", error.message);
    }
  };

  const deleteCart = async (id) => {
    try {
      await axios.delete(`http://localhost/laptop-backend/api/cart/carts/${id}`, {
        headers: {
          Authorization: `Bearer 3|BW05sBS54RQekpRWwRaljHwymjD5gQzKnvGJYrr230b926e7`,
        },
      });
  
      setCarts((prevCarts) => {
        const updatedCarts = prevCarts.filter(cart => cart.id !== id);
        calculateTotalPrice(updatedCarts); // Recalculate total price after deletion
        return updatedCarts;
      });
    } catch (error) {
      console.error("Error deleting cart:", error.message);
    }
  };

  return (
    <>
      {carts && carts.map((cart) => (
        <tr key={cart.id}>
          <td data-title=" ">
            <a className="cart-entry-thumbnail" href="#">
              <img src={`${storagePath}/${cart.product.image?.path}`} width="85" height="85" alt=""/>
            </a>
          </td>
          <td data-title=" "><h6 className="h6"><a href="#">{cart.product.title}</a></h6></td>
          <td data-title="Price: ">${cart.product.price}</td>
          <td data-title="Quantity: ">
            <div className="quantity-select">
              <span className="minus" onClick={() => cartUpdate(cart.id, --cart.qty)}></span>
              <span className="number">{cart.qty}</span>
              <span className="plus" onClick={() => cartUpdate(cart.id, ++cart.qty)}></span>
            </div>
          </td>
          <td data-title="Color: "><div className="cart-color" style={{ background: "#eee" }}></div></td>
          <td data-title="Total:">${cart.product.price * cart.qty}</td>
          <td data-title="">
            <div className="button-close" onClick={() => deleteCart(cart.id)}></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartItem;
