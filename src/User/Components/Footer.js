// import React from "react";
import React, { useContext,  useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from '../Context';
import Register from './register';
import Login from './login';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {  Navigation, Controller } from 'swiper/modules';

const Footer = () => {
    const [mainSwiper, setMainSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { context, addCart } = useContext(DataContext);
    const [quantity, setQuantity] = useState(1);
   

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
                                            <Link to="/">Home</Link>
                                            <Link to="/about-us">About Us</Link>
                                            <a href="#">products</a>
                                            <Link to="/services">Services</Link>
                                            {/* <a href="#">blog</a> */}
                                            <a href="#">gallery</a>
                                            <Link to="/contact-us">contact</Link>
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
                                    <a className="entry" href="https://www.facebook.com/profile.php?id=61555572504369"><i className="fa fa-facebook"></i></a>
                                    {/* <a className="entry" href="#"><i className="fa fa-twitter"></i></a> */}
                                    <a className="entry" href="https://www.instagram.com/bjlaptophub/"><i className="fa fa-instagram"></i></a>
                                    <a className="entry" href="https://www.linkedin.com/company/104579960/admin/dashboard/"><i className="fa fa-linkedin"></i></a>
                                    {/* <a className="entry" href="#"><i className="fa fa-google-plus"></i></a>
                                    <a className="entry" href="#"><i className="fa fa-pinterest-p"></i></a> */}
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
                            <div className="col-lg-12 col-xs-text-center col-lg-text-left col-xs-b20 col-lg-b0">
                                <div className="copyright">&copy; 2025 All rights reserved. Development by <a href="https://itpowersystems.com/" target="_blank">IT Power Systems</a></div>
                                {/* <div className="follow">
                                <a className="entry" href="#"><i className="fa fa-facebook"></i></a>
                                <a className="entry" href="#"><i className="fa fa-twitter"></i></a>
                                <a className="entry" href="#"><i className="fa fa-linkedin"></i></a>
                                <a className="entry" href="#"><i className="fa fa-google-plus"></i></a>
                                <a className="entry" href="#"><i className="fa fa-pinterest-p"></i></a>
                            </div> */}
                            </div>
                            {/* <div className="col-lg-4 col-xs-text-center col-lg-text-right">
                                <div className="footer-payment-icons">
                                    <a className="entry"><img src="assets/img/thumbnail-4.jpg" alt="" /></a>
                                    <a className="entry"><img src="assets/img/thumbnail-5.jpg" alt="" /></a>
                                    <a className="entry"><img src="assets/img/thumbnail-6.jpg" alt="" /></a>
                                    <a className="entry"><img src="assets/img/thumbnail-7.jpg" alt="" /></a>
                                    <a className="entry"><img src="assets/img/thumbnail-8.jpg" alt="" /></a>
                                    <a className="entry"><img src="assets/img/thumbnail-9.jpg" alt="" /></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>

            <div className="popup-wrapper">
                <div className="bg-layer"></div>

               <Login />

               <Register />

                <div className="popup-content" data-rel="3">
                    <div className="layer-close"></div>
                    <div className="popup-container size-2">
                        <div className="popup-align">
                            <div className="row">
                                <div className="col-sm-6 col-xs-b30 col-sm-b0">

                                <div className="main-product-slider-wrapper swipers-couple-wrapper">
                                    {/* Main Product Slider */}
                                    <Swiper
                                        spaceBetween={10}
                                        controller={{ control: thumbsSwiper }}
                                        modules={[ Navigation,  Controller]}
                                        className="swiper-control-top"
                                        onSwiper={setMainSwiper}
                                    >
                                        {
                                            context.product?.images?.map((image, i) => (
                                                <SwiperSlide key={i}>
                                                    <div
                                                        className="product-big-preview-entry swiper-lazy"
                                                        style={{
                                                            backgroundImage: `url(${context.storagePath}/${image.path})`,
                                                        }}
                                                    ></div>
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>

                                    <div className="empty-space col-xs-b30 col-sm-b60"></div>

                                    {/* Thumbnail Slider */}
                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView={3}
                                        watchSlidesProgress={true}
                                        controller={{ control: mainSwiper }}
                                        modules={[ Navigation,  Controller]}
                                        className="swiper-control-bottom"
                                        onSwiper={setThumbsSwiper}
                                        centeredSlides={true}  
                                        clickable={true}  
                                    >
                                        {
                                            context.product?.images?.map((image, i) => (
                                                <SwiperSlide key={image.id} onClick={() => mainSwiper && mainSwiper.slideTo(i)}>
                                                    <div className="product-small-preview-entry">
                                                        <img
                                                            src={`${context.storagePath}/${image.path}`}
                                                            alt=""
                                                            width={85}
                                                            height={85}
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>
                                </div>

                                </div>
                                <div className="col-sm-6">
                                    <div className="simple-article size-3 grey col-xs-b5">{context.product?.navigation_ite?.title}</div>
                                    <div className="h3 col-xs-b25">{context.product?.title}</div>
                                    <div className="row col-xs-b25">
                                        <div className="col-sm-6">
                                            <div className="simple-article size-5 grey">PRICE: <span className="color">${context.product?.price}</span></div>
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
                                            <div className="simple-article size-3 col-xs-b5">ITEM NO.: <span className="grey">{context.product?.SKU}</span></div>
                                        </div>
                                        <div className="col-sm-6 col-sm-text-right">
                                            <div className="simple-article size-3 col-xs-b20">AVAILABLE.: <span className="grey">{context.product?.status ?' YES' : 'Out of stock'}</span></div>
                                        </div>
                                    </div>
                                    <div className="simple-article size-3 col-xs-b30">{context.product?.description}</div>
                                    
                                  
                                    <div className="row col-xs-b40">
                                        <div className="col-sm-3">
                                            <div className="h6 detail-data-title size-1">quantity:</div>
                                        </div>
                                        <div className="col-sm-9">
                                        <div className="quantity-select">
                                            <span className="minus" onClick={() => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))}></span>
                                            <span className="number">{quantity}</span>
                                            <span className="plus" onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}></span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row m5 col-xs-b40">
                                        <div className="col-sm-6 col-xs-b10 col-sm-b0">
                                            <a className="button size-2 style-2 block" href="javascript:;" onClick={() => addCart({ product_id: context.product?.id, qty: quantity })}>
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