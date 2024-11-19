// import React from "react";
import { Link } from "react-router-dom";
import CartItem from './CartItem';
import { useState } from "react";
const Cart = () => {

  const [totalPrice, setTotalPrice] = useState(0);

    return (
        <>
        <div className="container">
          
            <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100"></div>
            <div className="text-center">
                <div className="simple-article size-3 grey uppercase col-xs-b5">shopping cart</div>
                <div className="h2">check your caCarts</div>
                <div className="title-underline center"><span></span></div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th style={{ width: "95px" }}></th>
                        <th>product name</th>
                        <th style={{ width: "150px" }}>price</th>
                        <th style={{ width: "260px" }}>quantity</th>
                        <th style={{ width: "70px" }}>color</th>
                        <th style={{ width: "150px" }}>total</th>
                        <th style={{ width: "70px" }}></th>
                    </tr>
                </thead>
                <tbody>

                 <CartItem setTotalPrice={setTotalPrice} />
                  
                </tbody>
            </table>
            <div className="empty-space col-xs-b35"></div>
            <div className="row">
                <div className="col-sm-6 col-md-5 col-xs-b10 col-sm-b0">
                  
                </div>
                <div className="col-sm-6 col-md-7 col-sm-text-right">
                    <div className="buttons-wrapper">
                    
                        <Link className="button size-2 style-3" to="/checkout">
                            <span className="button-wrapper">
                                <span className="icon"><img src="assets/img/icon-4.png" alt=""/></span>
                                <span className="text">proceed to checkout</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="empty-space col-xs-b35 col-md-b70"></div>
            <div className="row ">
            <div className="col-md-6">
              </div>
                <div className="col-md-6">
                    <h4 className="h4">cart totals</h4>
                    <div className="order-details-entry simple-article size-3 grey uppercase">
                        <div className="row">
                            <div className="col-xs-6">
                                order total
                            </div>
                            <div className="col-xs-6 col-xs-text-right">
                                <div className="color">${totalPrice}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="empty-space col-xs-b35 col-md-b70"></div>
        </div>
        </>
    );
}


export default Cart;