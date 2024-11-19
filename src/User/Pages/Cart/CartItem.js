import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context';
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;


const CartItem = ({ setTotalPrice }) => {
  const { context, deleteCart , setContext } = useContext(DataContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setCarts(context?.cart);
    setTotalPrice(calculateTotalPrice(context?.cart));
  }, [context?.cart, setTotalPrice]);

  const calculateTotalPrice = (updatedCarts) => {
    return updatedCarts.reduce((sum, cart) => sum + cart.product.price * cart.qty, 0);
  };
  const cartUpdate = async (id, qty) => {
    try {
      const response = await axios.put(
        `${apiUrl}/cart/carts/${id}`,
        { qty },
        {
          headers: {
            Authorization: `Bearer ${context.token}`,
          },
        }
      );

      const updatedCarts = carts.map(cart =>
        cart.id === id ? { ...cart, qty: response.data.cart.qty } : cart
      );

      setCarts(updatedCarts);
      setContext(prevContext => ({
        ...prevContext,
        cart: updatedCarts,
      }));

      // Update total price in the parent component
      setTotalPrice(calculateTotalPrice(updatedCarts));
    } catch (error) {
      console.error("Error updating cart:", error.message);
    }
  };

 

  return (
    <>
      {carts?.map((cart) => (
        <tr key={cart.id}>
          <td data-title=" ">
            <Link className="cart-entry-thumbnail" to={`/product/${cart.product.SKU}`}>
              <img src={`${context?.storagePath}/${cart.product.image?.path}`} width="85" height="85" alt="" />
            </Link>
          </td>
          <td data-title=" ">
            <h6 className="h6"><Link to={`/product/${cart.product.SKU}`}>{cart.product.title}</Link></h6>
          </td>
          <td data-title="Price: ">${cart.product.price}</td>
          <td data-title="Quantity: ">
            <div className="quantity-select">
              <span className="minus" onClick={() => cart.qty > 1 && cartUpdate(cart.id, cart.qty - 1)}></span>
              <span className="number">{cart.qty}</span>
              <span className="plus" onClick={() => cartUpdate(cart.id, cart.qty + 1)}></span>
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
