// import React from "react";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { DataContext } from '../Context';
import axios from 'axios';
import { toast } from 'react-toastify';
const apiUrl = process.env.REACT_APP_API_URL;

const Header = () => {

    const { context, setContext, fetchCart, deleteCart } = useContext(DataContext);
    const [navigations, setNavigations] = useState([])
    const calculateTotalPrice = (updatedCarts) => {
        return updatedCarts.reduce((sum, cart) => sum + cart.product.price * cart.qty, 0);
    };

    const logout = async () => {

        try {
            const response = await axios.post(`${apiUrl}/logout`, null, {
                headers: { Authorization: `Bearer ${context.token}` },
            });

            sessionStorage.clear()
            setContext({
                ...context,
                token: '',
                user: {}
            })
            toast.success(response.data.message || "Logged out successfully.");

        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed. Please try again.");
        }


    }

    const fetchNavigations = async () => {

        try {
            const response = await axios.get(`${apiUrl}/navigations`, {
            });
            setNavigations(response.data.navigations)


        } catch (error) {
            console.error(error.response?.data?.message || "Logout failed. Please try again.");
        }

    }

    useEffect(() => {
        if(context.token){

            fetchCart();
        }
        fetchNavigations()
    }, [context.token]);



    return (
        <>
            {/* <!-- HEADER --> */}
            <header>
                <div className="header-top">
                    <div className="content-margins">
                        <div className="row">
                            <div className="col-md-5 hidden-xs hidden-sm">
                                <div className="entry"><b>contact us:</b> <a href="tel:+971 50 744 9905">{context.user.id} +971 50 744 9905</a></div>
                                <div className="entry"><b>email:</b> <a href="mailto:bj.laptophub@gmail.com">bj.laptophub@gmail.com</a></div>
                            </div>
                            <div className="col-md-7 col-md-text-right">

                                {
                                    context.token ?
                                        <>
                                            <div className="entry hidden-xs hidden-sm"><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></div>

                                            <div className="entry hidden-xs hidden-sm cart">
                                                <Link to="/shopping-cart">
                                                    {/* <b className="hidden-xs">Your bag</b> */}
                                                    <span className="cart-icon">
                                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                        <span className="cart-label">{context?.cart.length}</span>
                                                    </span>
                                                    <span className="cart-title hidden-xs">${calculateTotalPrice(context?.cart)}</span>
                                                </Link>
                                                <div className="cart-toggle hidden-xs hidden-sm">
                                                    <div className="cart-overflow">
                                                        {context?.cart.map((cart, i) => {
                                                            return (
                                                                <div className="cart-entry clearfix" key={i}>
                                                                    <Link className="cart-entry-thumbnail" to={`/product/${cart.product.SKU}`}><img src={context?.storagePath + '/' + cart.product.image.path} width={85} height={85} alt="" /></Link>
                                                                    <div className="cart-entry-description">
                                                                        <table>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div className="h6"><Link to={`/product/${cart.product.SKU}`}>{cart?.product?.title}</Link></div>
                                                                                        <div className="simple-article size-1">QUANTITY: {cart?.qty}</div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="simple-article size-3 grey">${cart?.product?.price}</div>
                                                                                        <div className="simple-article size-1">TOTAL: ${cart?.product?.price * cart?.qty}</div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="cart-color" style={{ color: "#eee" }}></div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="button-close" onClick={() => deleteCart(cart.id)}></div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>

                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}


                                                    </div>
                                                    <div className="empty-space col-xs-b40"></div>
                                                    <div className="row">
                                                        <div className="col-xs-6">
                                                            <div className="cell-view empty-space col-xs-b50">
                                                                <div className="simple-article size-5 grey">TOTAL <span className="color">${calculateTotalPrice(context?.cart)}</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 text-right">
                                                            <Link className="button size-2 style-3" to="/checkout">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                                                    <span className="text">proceed to checkout</span>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>

                                        :
                                        ''
                                }

                                {context?.token ?
                                    <div className="entry">
                                        <a href='javascript:;' onClick={() => logout()}><b>logout</b></a>
                                    </div>
                                    :

                                    <div className="entry">
                                        <a className="open-popup" data-rel="1"><b>login</b></a>&nbsp; or &nbsp;<a className="open-popup" data-rel="2"><b>register</b></a>
                                    </div>
                                }

                                <div className="hamburger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="content-margins">
                        <div className="row">
                            <div className="col-xs-3 col-sm-1">
                                <a id="logo" href="index1.html"><img src="assets/img/logo.png" alt="" /></a>
                            </div>
                            <div className="col-xs-9 col-sm-11 text-right">
                                <div className="nav-wrapper">
                                    <div className="nav-close-layer"></div>
                                    <nav>
                                        <ul>
                                            <li className="active">
                                                <Link to="/">Home</Link>
                                                {/* <div className="menu-toggle"></div>
                                            <ul>
                                                <li className="active"><a href="index1.html">Homepage 1</a></li>
                                                <li><a href="index2.html">Homepage 2</a></li>
                                                <li><a href="index3.html">Homepage 3</a></li>
                                                <li><a href="index4.html">Homepage 4</a></li>
                                                <li><a href="index5.html">Homepage 5</a></li>
                                                <li><a href="index6.html">Homepage 6</a></li>
                                            </ul> */}
                                            </li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/services">Services</Link>
                                            </li>

                                            {navigations?.map((navigation, i) => (
                                                <li key={i}>
                                                    <Link to={`/${navigation.title}/product-list`}>{navigation.title}</Link>
                                                    {navigation.items.length > 0 ? (
                                                        <>
                                                            <div className="menu-toggle"></div>
                                                            <ul>
                                                                {navigation.items.map((item, itemKey) => (
                                                                    <li key={itemKey}>
                                                                        <Link to={`/${navigation.title}/${item.title}/product-list`}>{item.title}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </>
                                                    ) : null}
                                                </li>
                                            ))}

                                            <li><Link to="/contact-us">contact</Link></li>
                                        </ul>
                                        <div className="navigation-title">
                                            Navigation
                                            <div className="hamburger-icon active">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                {/* <div className="header-bottom-icon toggle-search"><i className="fa fa-search" aria-hidden="true"></i></div> */}
                                <div className="header-bottom-icon visible-rd"><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                                <div className="header-bottom-icon visible-rd">
                                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                    <span className="cart-label">5</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="header-search-wrapper">
                        <div className="header-search-content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                                        <form>
                                            <div className="search-submit">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                                <input type="submit"/>
                                            </div>
                                            <input className="simple-input style-1" type="text" value="" placeholder="Enter keyword" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="button-close"></div>
                        </div>
                    </div> */}
                    </div>
                </div>

            </header>
            <div className="header-empty-space"></div>
        </>
    );
}

export default Header;