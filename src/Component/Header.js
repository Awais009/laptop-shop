// import React from "react";
import React, { useEffect , useRef , useState  } from 'react';
import { Link } from "react-router-dom";
 const Header = () => {
    
    return (
        <>
        {/* <!-- HEADER --> */}
        <header>
            <div className="header-top">
                <div className="content-margins">
                    <div className="row">
                        <div className="col-md-5 hidden-xs hidden-sm">
                            <div className="entry"><b>contact us:</b> <a href="tel:+971 50 744 9905">+971 50 744 9905</a></div>
                            <div className="entry"><b>email:</b> <a href="mailto:bj.laptophub@gmail.com">bj.laptophub@gmail.com</a></div>
                        </div>
                        <div className="col-md-7 col-md-text-right">
                            {/* <div className="entry language">
                                <div className="title"><b>en</b></div>
                                <div className="language-toggle header-toggle-animation">
                                    <a href="index1.html">fr</a>
                                    <a href="index1.html">ru</a>
                                    <a href="index1.html">it</a>
                                    <a href="index1.html">sp</a>
                                </div>
                            </div> */}
                            <div className="entry hidden-xs hidden-sm"><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></div>
                            <div className="entry hidden-xs hidden-sm cart">
                                <a href="cart.html">
                                    {/* <b className="hidden-xs">Your bag</b> */}
                                    <span className="cart-icon">
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                        <span className="cart-label">5</span>
                                    </span>
                                    <span className="cart-title hidden-xs">$1195.00</span>
                                </a>
                                <div className="cart-toggle hidden-xs hidden-sm">
                                    <div className="cart-overflow">
                                        <div className="cart-entry clearfix">
                                            <a className="cart-entry-thumbnail" href="#"><img src="assets/img/product-1.png" alt="" /></a>
                                            <div className="cart-entry-description">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="h6"><a href="#">modern beat ht</a></div>
                                                            <div className="simple-article size-1">QUANTITY: 2</div>
                                                        </td>
                                                        <td>
                                                            <div className="simple-article size-3 grey">$155.00</div>
                                                            <div className="simple-article size-1">TOTAL: $310.00</div>
                                                        </td>
                                                        <td>
                                                            <div className="cart-color" style={{ color: "#eee" }}></div>
                                                        </td>
                                                        <td>
                                                            <div className="button-close"></div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                    
                                                </table>
                                            </div>
                                        </div>
                                        <div className="cart-entry clearfix">
                                            <a className="cart-entry-thumbnail" href="#"><img src="assets/img/product-2.png" alt="" /></a>
                                            <div className="cart-entry-description">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="h6"><a href="#">modern beat ht</a></div>
                                                            <div className="simple-article size-1">QUANTITY: 2</div>
                                                        </td>
                                                        <td>
                                                            <div className="simple-article size-3 grey">$155.00</div>
                                                            <div className="simple-article size-1">TOTAL: $310.00</div>
                                                        </td>
                                                        <td>
                                                            <div className="cart-color" style={{ background: "#bf584b" }}></div>
                                                        </td>
                                                        <td>
                                                            <div className="button-close"></div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                   
                                                </table>
                                            </div>
                                        </div>
                                        <div className="cart-entry clearfix">
                                            <a className="cart-entry-thumbnail" href="#"><img src="assets/img/product-3.png" alt="" /></a>
                                            <div className="cart-entry-description">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="h6"><a href="#">modern beat ht</a></div>
                                                            <div className="simple-article size-1">QUANTITY: 2</div>
                                                        </td>
                                                        <td>
                                                            <div className="simple-article size-3 grey">$155.00</div>
                                                            <div className="simple-article size-1">TOTAL: $310.00</div>
                                                        </td>
                                                        <td>
                                                            <div className="cart-color" style={{ background: "#facc22" }}></div>
                                                        </td>
                                                        <td>
                                                            <div className="button-close"></div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                  
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="empty-space col-xs-b40"></div>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <div className="cell-view empty-space col-xs-b50">
                                                <div className="simple-article size-5 grey">TOTAL <span className="color">$1195.00</span></div>
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
                            <div className="entry">
                                <a className="open-popup" data-rel="1"><b>login</b></a>&nbsp; or &nbsp;<a className="open-popup" data-rel="2"><b>register</b></a>
                            </div>
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
                                        <li>
                                            <Link to="/product-list">Laptops</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-list">Chargers</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-list">Battries</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-list">GPU</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-list">Monitors</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-list">HDD</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-list">SSD</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/product-list">Shop Now</Link>
                                            <div className="menu-toggle"></div>
                                            <ul>
                                                <li><Link to="/product-list">Laptop</Link></li>
                                                <li><Link to="/product-list">Accessories</Link></li>
                                            </ul>
                                        </li> */}
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