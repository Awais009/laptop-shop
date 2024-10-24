// import React from "react";
import React, { useEffect , useRef , useState  } from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
    
    return (
        <>
        <div className="empty-space col-xs-b35 col-md-b70"></div>
        {/* <!-- FOOTER --> */}
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 col-xs-b30 col-md-b0">
                            <img className="footer-logo" src="assets/img/logo.png" alt="" />
                            <div className="empty-space col-xs-b20"></div>
                            <div className="simple-article size-2 light fulltransparent">Integer posuere orci sit amet feugiat pellent que. Suspendisse vel tempor justo, sit amet posuere orci dapibus auctor</div>
                        </div>
                        <div className="col-sm-6 col-md-3 col-xs-b30 col-md-b0">
                            <h6 className="h6 light">queck links</h6>
                            <div className="empty-space col-xs-b20"></div>
                            <div className="footer-column-links">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#">home</a>
                                        <a href="#">about us</a>
                                        <a href="#">products</a>
                                        <a href="#">services</a>
                                        <a href="#">blog</a>
                                        <a href="#">gallery</a>
                                        <a href="#">contact</a>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#">privacy policy</a>
                                        <a href="#">warranty</a>
                                        <a href="#">login</a>
                                        <a href="#">registration</a>
                                        <a href="#">delivery</a>
                                        <a href="#">pages</a>
                                        <a href="#">our stores</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear visible-sm"></div>
                        <div className="col-sm-6 col-md-3 col-xs-b30 col-sm-b0">
                            <h6 className="h6 light">some posts</h6>
                            <div className="empty-space col-xs-b20"></div>
                            <div className="footer-post-preview clearfix">
                                <a className="image" href="#"><img src="assets/img/thumbnail-1.jpg" alt="" /></a>
                                <div className="description">
                                    <div className="date">apr 07 / 15</div>
                                    <a className="title">Fusce tincidunt accumsan pretium sit amet</a>
                                </div>
                            </div>
                            <div className="footer-post-preview clearfix">
                                <a className="image" href="#"><img src="assets/img/thumbnail-2.jpg" alt="" /></a>
                                <div className="description">
                                    <div className="date">apr 07 / 15</div>
                                    <a className="title">Fusce tincidunt accumsan pretium sit amet</a>
                                </div>
                            </div>
                            <div className="footer-post-preview clearfix">
                                <a className="image" href="#"><img src="assets/img/thumbnail-3.jpg" alt="" /></a>
                                <div className="description">
                                    <div className="date">apr 07 / 15</div>
                                    <a className="title">Fusce tincidunt accumsan pretium sit amet</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6 className="h6 light">Contact Us</h6>
                            <div className="empty-space col-xs-b20"></div>
                            <div className="follow">
                                <a className="entry" href="#"><i className="fa fa-facebook"></i></a>
                                <a className="entry" href="#"><i className="fa fa-twitter"></i></a>
                                <a className="entry" href="#"><i className="fa fa-linkedin"></i></a>
                                <a className="entry" href="#"><i className="fa fa-google-plus"></i></a>
                                <a className="entry" href="#"><i className="fa fa-pinterest-p"></i></a>
                            </div>
                            <div className="empty-space col-xs-b20"></div>
                            <div className="footer-contact"><i className="fa fa-mobile" aria-hidden="true"></i> contact us: <a href="tel:+971 50 744 9905 ">+971 50 744 9905 </a></div>
                            <div className="footer-contact"><i className="fa fa-envelope-o" aria-hidden="true"></i> email: 
                            <a href="mailto:bj.laptophub@gmail.com"> bj.laptophub@gmail.com</a></div>
                            <div className="footer-contact"><i className="fa fa-map-marker" aria-hidden="true"></i> address: <a href="#">1st, new york, usa</a></div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-lg-8 col-xs-text-center col-lg-text-left col-xs-b20 col-lg-b0">
                            <div className="copyright">&copy; 2015 All rights reserved. Development by <a href="https://itpowersystems.com/" target="_blank">IT Power Systems</a></div>
                            {/* <div className="follow">
                                <a className="entry" href="#"><i className="fa fa-facebook"></i></a>
                                <a className="entry" href="#"><i className="fa fa-twitter"></i></a>
                                <a className="entry" href="#"><i className="fa fa-linkedin"></i></a>
                                <a className="entry" href="#"><i className="fa fa-google-plus"></i></a>
                                <a className="entry" href="#"><i className="fa fa-pinterest-p"></i></a>
                            </div> */}
                        </div>
                        <div className="col-lg-4 col-xs-text-center col-lg-text-right">
                            <div className="footer-payment-icons">
                                <a className="entry"><img src="assets/img/thumbnail-4.jpg" alt="" /></a>
                                <a className="entry"><img src="assets/img/thumbnail-5.jpg" alt="" /></a>
                                <a className="entry"><img src="assets/img/thumbnail-6.jpg" alt="" /></a>
                                <a className="entry"><img src="assets/img/thumbnail-7.jpg" alt="" /></a>
                                <a className="entry"><img src="assets/img/thumbnail-8.jpg" alt="" /></a>
                                <a className="entry"><img src="assets/img/thumbnail-9.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    <div className="popup-wrapper">
        <div className="bg-layer"></div>

        <div className="popup-content" data-rel="1">
            <div className="layer-close"></div>
            <div className="popup-container size-1">
                <form>
                <div className="popup-align">
                    <h3 className="h3 text-center">Log in</h3>
                    <div className="empty-space col-xs-b30"></div>
                    <input className="simple-input" type="text" value="" placeholder="Your email" />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="password" autoComplete=''  placeholder="Enter password" />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <div className="row">
                        <div className="col-sm-6 col-xs-b10 col-sm-b0">
                            <div className="empty-space col-sm-b5"></div>
                            <a className="simple-link">Forgot password?</a>
                            <div className="empty-space col-xs-b5"></div>
                            <a className="simple-link">register now</a>
                        </div>
                        <div className="col-sm-6 text-right">
                            <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                    <span className="text">submit</span>
                                </span>
                            </a>  
                        </div>
                    </div>
                    <div className="popup-or">
                        <span>or</span>
                    </div>
                    <div className="row m5">
                        <div className="col-sm-4 col-xs-b10 col-sm-b0">
                            <a className="button facebook-button size-2 style-4 block" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                    <span className="text">facebook</span>
                                </span>
                            </a>
                        </div>
                        <div className="col-sm-4 col-xs-b10 col-sm-b0">
                            <a className="button twitter-button size-2 style-4 block" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                    <span className="text">twitter</span>
                                </span>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a className="button google-button size-2 style-4 block" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                    <span className="text">google+</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                </form>
                <div className="button-close"></div>
            </div>
        </div>

        <div className="popup-content" data-rel="2">
            <div className="layer-close"></div>
            <div className="popup-container size-1">
                <form>
                <div className="popup-align">
                    <h3 className="h3 text-center">register</h3>
                    <div className="empty-space col-xs-b30"></div>
                    <input className="simple-input" type="text" value="" placeholder="Your name" />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="text" value="" placeholder="Your email" />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="password" autoComplete='' placeholder="Enter password" />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="password" autoComplete=''  placeholder="Repeat password" />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <div className="row">
                        <div className="col-sm-7 col-xs-b10 col-sm-b0">
                            <div className="empty-space col-sm-b15"></div>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span><a href="#">Privacy policy agreement</a></span>
                            </label>
                        </div>
                        <div className="col-sm-5 text-right">
                            <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                    <span className="text">submit</span>
                                </span>
                            </a>  
                        </div>
                    </div>
                    <div className="popup-or">
                        <span>or</span>
                    </div>
                    <div className="row m5">
                        <div className="col-sm-4 col-xs-b10 col-sm-b0">
                            <a className="button facebook-button size-2 style-4 block" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                    <span className="text">facebook</span>
                                </span>
                            </a>
                        </div>
                        <div className="col-sm-4 col-xs-b10 col-sm-b0">
                            <a className="button twitter-button size-2 style-4 block" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                    <span className="text">twitter</span>
                                </span>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a className="button google-button size-2 style-4 block" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                    <span className="text">google+</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                </form>

                <div className="button-close"></div>
            </div>
        </div>

        <div className="popup-content" data-rel="3">
            <div className="layer-close"></div>
            <div className="popup-container size-2">
                <div className="popup-align">
                    <div className="row">
                        <div className="col-sm-6 col-xs-b30 col-sm-b0">
                            
                            <div className="main-product-slider-wrapper swipers-couple-wrapper">
                                <div className="swiper-container swiper-control-top">
                                   <div className="swiper-button-prev hidden"></div>
                                   <div className="swiper-button-next hidden"></div>
                                   <div className="swiper-wrapper">
                                       <div className="swiper-slide">
                                            <div className="swiper-lazy-preloader"></div>
                                            <div className="product-big-preview-entry swiper-lazy" data-background="assets/img/product-preview-4.jpg"></div>
                                       </div>
                                       <div className="swiper-slide">
                                            <div className="swiper-lazy-preloader"></div>
                                            <div className="product-big-preview-entry swiper-lazy" data-background="assets/img/product-preview-5.jpg"></div>
                                       </div>
                                       <div className="swiper-slide">
                                            <div className="swiper-lazy-preloader"></div>
                                            <div className="product-big-preview-entry swiper-lazy" data-background="assets/img/product-preview-6.jpg"></div>
                                       </div>
                                       <div className="swiper-slide">
                                            <div className="swiper-lazy-preloader"></div>
                                            <div className="product-big-preview-entry swiper-lazy" data-background="assets/img/product-preview-7.jpg"></div>
                                       </div>
                                       <div className="swiper-slide">
                                            <div className="swiper-lazy-preloader"></div>
                                            <div className="product-big-preview-entry swiper-lazy" data-background="assets/img/product-preview-8.jpg"></div>
                                       </div>
                                       <div className="swiper-slide">
                                            <div className="swiper-lazy-preloader"></div>
                                            <div className="product-big-preview-entry swiper-lazy" data-background="assets/img/product-preview-9.jpg"></div>
                                       </div>
                                       <div className="swiper-slide">
                                            <div className="swiper-lazy-preloader"></div>
                                            <div className="product-big-preview-entry swiper-lazy" data-background="assets/img/product-preview-10.jpg"></div>
                                       </div>
                                   </div>
                                </div>

                                <div className="empty-space col-xs-b30 col-sm-b60"></div>

                                <div className="swiper-container swiper-control-bottom" data-breakpoints="1" data-xs-slides="3" data-sm-slides="3" data-md-slides="4" data-lt-slides="5" data-slides-per-view="5" data-center="1" data-click="1">
                                   <div className="swiper-button-prev hidden"></div>
                                   <div className="swiper-button-next hidden"></div>
                                   <div className="swiper-wrapper">
                                       <div className="swiper-slide">
                                            <div className="product-small-preview-entry">
                                                <img src="assets/img/product-preview-4_.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-small-preview-entry">
                                                <img src="assets/img/product-preview-5_.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-small-preview-entry">
                                                <img src="assets/img/product-preview-6_.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-small-preview-entry">
                                                <img src="assets/img/product-preview-7_.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-small-preview-entry">
                                                <img src="assets/img/product-preview-8_.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-small-preview-entry">
                                                <img src="assets/img/product-preview-9_.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-small-preview-entry">
                                                <img src="assets/img/product-preview-10_.jpg" alt="" />
                                            </div>
                                       </div>

                                   </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="simple-article size-3 grey col-xs-b5">SMART WATCHES</div>
                            <div className="h3 col-xs-b25">watch 42mm smartwatch</div>
                            <div className="row col-xs-b25">
                                <div className="col-sm-6">
                                    <div className="simple-article size-5 grey">PRICE: <span className="color">$225.00</span></div>        
                                </div>
                                <div className="col-sm-6 col-sm-text-right">
                                    <div className="rate-wrapper align-inline">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="simple-article size-2 align-inline">128 Reviews</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="simple-article size-3 col-xs-b5">ITEM NO.: <span className="grey">127-#5238</span></div>
                                </div>
                                <div className="col-sm-6 col-sm-text-right">
                                    <div className="simple-article size-3 col-xs-b20">AVAILABLE.: <span className="grey">YES</span></div>
                                </div>
                            </div>
                            <div className="simple-article size-3 col-xs-b30">Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac, efficitur tellus. Phasellus id vulputate erat.</div>
                            <div className="row col-xs-b40">
                                <div className="col-sm-3">
                                    <div className="h6 detail-data-title size-1">size:</div>
                                </div>
                                <div className="col-sm-9">
                                    <select className="SlectBox">
                                        <option disabled="disabled" >Choose size</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row col-xs-b40">
                                <div className="col-sm-3">
                                    <div className="h6 detail-data-title">color:</div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="color-selection size-1">
                                    <div className="entry active" style={{ color: "#a7f050" }}></div>
                                    <div className="entry" style={{ color: "#50e3f0" }}></div>
                                    <div className="entry" style={{ color: "#eee" }}></div>
                                    <div className="entry" style={{ color: "#4d900c" }}></div>
                                    <div className="entry" style={{ color: "#edb82c" }}></div>
                                    <div className="entry" style={{ color: "#7d3f99" }}></div>
                                    <div className="entry" style={{ color: "#3481c7" }}></div>
                                    <div className="entry" style={{ color: "#bf584b" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-xs-b40">
                                <div className="col-sm-3">
                                    <div className="h6 detail-data-title size-1">quantity:</div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="quantity-select">
                                        <span className="minus"></span>
                                        <span className="number">1</span>
                                        <span className="plus"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row m5 col-xs-b40">
                                <div className="col-sm-6 col-xs-b10 col-sm-b0">
                                    <a className="button size-2 style-2 block" href="#">
                                        <span className="button-wrapper">
                                            <span className="icon"><img src="assets/img/icon-2.png" alt="" /></span>
                                            <span className="text">add to cart</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <a className="button size-2 style-1 block noshadow" href="#">
                                    <span className="button-wrapper">
                                        <span className="icon"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span className="text">add to favourites</span>
                                    </span>
                                </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="h6 detail-data-title size-2">share:</div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="follow light">
                                        <a className="entry" href="#"><i className="fa fa-facebook"></i></a>
                                        <a className="entry" href="#"><i className="fa fa-twitter"></i></a>
                                        <a className="entry" href="#"><i className="fa fa-linkedin"></i></a>
                                        <a className="entry" href="#"><i className="fa fa-google-plus"></i></a>
                                        <a className="entry" href="#"><i className="fa fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-close"></div>
            </div>
        </div>

    </div>
        </>
    );
}


export default Footer;