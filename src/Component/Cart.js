// import React from "react";
import React, { useEffect , useRef , useState  } from 'react';
import { Link } from "react-router-dom";
const Cart = () => {
    
    return (
        <>
        <div className="container">
            <div className="empty-space col-xs-b15 col-sm-b30"></div>
            <div className="breadcrumbs">
                <a href="#">home</a>
                <a href="#">shopping cart</a>
            </div>
            <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100"></div>
            <div className="text-center">
                <div className="simple-article size-3 grey uppercase col-xs-b5">shopping cart</div>
                <div className="h2">check your products</div>
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
                    <tr>
                        <td data-title=" ">
                            <a className="cart-entry-thumbnail" href="#"><img src="assets/img/product-1.png" alt=""/></a>
                        </td>
                        <td data-title=" "><h6 className="h6"><a href="#">modern beat ht</a></h6></td>
                        <td data-title="Price: ">$155.00</td>
                        <td data-title="Quantity: ">
                            <div className="quantity-select">
                                <span className="minus"></span>
                                <span className="number">2</span>
                                <span className="plus"></span>
                            </div>
                        </td>
                        <td data-title="Color: "><div className="cart-color" style={{ background: "#eee" }}></div></td>
                        <td data-title="Total:">$310.00</td>
                        <td data-title="">
                            <div className="button-close"></div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title=" ">
                            <a className="cart-entry-thumbnail" href="#"><img src="assets/img/product-2.png" alt=""/></a>
                        </td>
                        <td data-title=" "><h6 className="h6"><a href="#">sport beat atx</a></h6></td>
                        <td data-title="Price: ">$155.00</td>
                        <td data-title="Quantity: ">
                            <div className="quantity-select">
                                <span className="minus"></span>
                                <span className="number">1</span>
                                <span className="plus"></span>
                            </div>
                        </td>
                        <td data-title="Color: "><div className="cart-color" style={{ background: "#eee" }}></div></td>
                        <td data-title="Total:">$310.00</td>
                        <td data-title="">
                            <div className="button-close"></div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title=" ">
                            <a className="cart-entry-thumbnail" href="#"><img src="assets/img/product-3.png" alt=""/></a>
                        </td>
                        <td data-title=" "><h6 className="h6"><a href="#">hipster beat hr</a></h6></td>
                        <td data-title="Price: ">$155.00</td>
                        <td data-title="Quantity: ">
                            <div className="quantity-select">
                                <span className="minus"></span>
                                <span className="number">1</span>
                                <span className="plus"></span>
                            </div>
                        </td>
                        <td data-title="Color: "><div className="cart-color" style={{ background: "#eee" }}></div></td>
                        <td data-title="Total:">$310.00</td>
                        <td data-title=" ">
                            <div className="button-close"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="empty-space col-xs-b35"></div>
            <div className="row">
                <div className="col-sm-6 col-md-5 col-xs-b10 col-sm-b0">
                    <div className="single-line-form">
                        <input className="simple-input" type="text" value="" placeholder="Enter your coupon code" />
                        <div className="button size-2 style-3">
                            <span className="button-wrapper">
                                <span className="icon"><img src="assets/img/icon-4.png" alt=""/></span>
                                <span className="text">submit</span>
                            </span>
                            <input type="submit" value="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-7 col-sm-text-right">
                    <div className="buttons-wrapper">
                        <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                                <span className="icon"><img src="assets/img/icon-2.png" alt=""/></span>
                                <span className="text">update cart</span>
                            </span>
                        </a>
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
            <div className="row">
                <div className="col-md-6 col-xs-b50 col-md-b0">
                    <h4 className="h4 col-xs-b25">calculate shipping</h4>
                    <select className="SlectBox">
                        <option disabled="disabled" selected="selected">Choose country for shipping</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <div className="empty-space col-xs-b20"></div>
                    <div className="row m10">
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="State / Country" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="Postcode / Zip" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                    </div>
                    <div className="button size-2 style-2">
                        <span className="button-wrapper">
                            <span className="icon"><img src="assets/img/icon-1.png" alt=""/></span>
                            <span className="text">update totals</span>
                        </span>
                        <input type="submit"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className="h4">cart totals</h4>
                    <div className="order-details-entry simple-article size-3 grey uppercase">
                        <div className="row">
                            <div className="col-xs-6">
                                cart subtotal
                            </div>
                            <div className="col-xs-6 col-xs-text-right">
                                <div className="color">$1195.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-details-entry simple-article size-3 grey uppercase">
                        <div className="row">
                            <div className="col-xs-6">
                                shipping and handling
                            </div>
                            <div className="col-xs-6 col-xs-text-right">
                                <div className="color">free shipping</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-details-entry simple-article size-3 grey uppercase">
                        <div className="row">
                            <div className="col-xs-6">
                                order total
                            </div>
                            <div className="col-xs-6 col-xs-text-right">
                                <div className="color">$1195.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="empty-space col-xs-b35 col-md-b70"></div>
            <div className="empty-space col-xs-b35 col-md-b70"></div>
        </div>
        </>
    );
}


export default Cart;