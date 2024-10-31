// import React from "react";
import React, { useEffect , useRef , useState  } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Lazy, Parallax } from 'swiper';

// Install Swiper modules
// SwiperCore.use([Pagination, Navigation, Lazy, Parallax]);
export default function Home() {
    
    return (
        <>
        <div className="slider-wrapper">
            <div className="swiper-button-prev visible-lg"></div>
            <div className="swiper-button-next visible-lg"></div>
            <Swiper
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
            pagination={{ clickable: true }}
            lazy={true}
            parallax={true}
            autoHeight={true}
            className="swiper-container"
            >
                <SwiperSlide>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="cell-view page-height">
                                    <div className="col-xs-b40 col-sm-b80"></div>
                                    <div data-swiper-parallax-x="-600">
                                        <div className="simple-article grey size-5">BEST PRICE <span className="color">$199.00</span></div>
                                        <div className="col-xs-b5"></div>
                                    </div>
                                    <div data-swiper-parallax-x="-500">
                                        <h1 className="h1">smartphone x transform</h1>
                                        <div className="title-underline left"><span></span></div>
                                    </div>
                                    <div data-swiper-parallax-x="-400">
                                        <div className="simple-article size-4 grey">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                        <div className="col-xs-b30"></div>
                                    </div>
                                    <div data-swiper-parallax-x="-300">
                                        <div className="buttons-wrapper">
                                            <a className="button size-2 style-2" href="#">
                                                <span className="button-wrapper">
                                                    <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                    <span className="text">Learn More</span>
                                                </span>
                                            </a>
                                            <a className="button size-2 style-3" href="#">
                                                <span className="button-wrapper">
                                                    <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                    <span className="text">Add To Cart</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-b40 col-sm-b80"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-product-preview">
                            <div className="product-preview-shortcode">
                                <div className="preview">
                                    <div className="swiper-lazy-preloader"></div>
                                    <div className="entry full-size swiper-lazy active" data-background="assets/img/product-preview-1.jpg"></div>
                                    <div className="entry full-size swiper-lazy" data-background="assets/img/product-preview-2.jpg"></div>
                                    <div className="entry full-size swiper-lazy" data-background="assets/img/product-preview-3.jpg"></div>
                                </div>
                                <div className="sidebar valign-middle" data-swiper-parallax-x="-300">
                                    <div className="valign-middle-content">
                                        <div className="entry active"><img src="assets/img/product-4.png" alt="" /></div>
                                        <div className="entry"><img src="assets/img/product-5.png" alt="" /></div>
                                        <div className="entry"><img src="assets/img/product-6.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="empty-space col-xs-b80 col-sm-b0"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-6">
                                <div className="cell-view page-height">
                                    <div className="col-xs-b40 col-sm-b80"></div>
                                    <div data-swiper-parallax-x="-600">
                                        <div className="simple-article grey size-5">BEST PRICE <span className="color">$199.00</span></div>
                                        <div className="col-xs-b5"></div>
                                    </div>
                                    <div data-swiper-parallax-x="-500">
                                        <h1 className="h1">smartphone x transform</h1>
                                        <div className="title-underline left"><span></span></div>
                                    </div>
                                    <div data-swiper-parallax-x="-400">
                                        <div className="simple-article size-4 grey">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                        <div className="col-xs-b30"></div>
                                    </div>
                                    <div data-swiper-parallax-x="-300">
                                        <div className="buttons-wrapper">
                                            <a className="button size-2 style-2" href="#">
                                                <span className="button-wrapper">
                                                    <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                    <span className="text">Learn More</span>
                                                </span>
                                            </a>
                                            <a className="button size-2 style-3" href="#">
                                                <span className="button-wrapper">
                                                    <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                    <span className="text">Add To Cart</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-b40 col-sm-b80"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-product-preview align-left">
                            <div className="product-preview-shortcode">
                                <div className="preview">
                                    <div className="swiper-lazy-preloader"></div>
                                    <div className="entry full-size swiper-lazy active" data-background="assets/img/product-preview-1.jpg"></div>
                                    <div className="entry full-size swiper-lazy" data-background="assets/img/product-preview-2.jpg"></div>
                                    <div className="entry full-size swiper-lazy" data-background="assets/img/product-preview-3.jpg"></div>
                                </div>
                                <div className="sidebar valign-middle" data-swiper-parallax-x="-300">
                                    <div className="valign-middle-content">
                                        <div className="entry active"><img src="assets/img/product-4.png" alt="" /></div>
                                        <div className="entry"><img src="assets/img/product-5.png" alt="" /></div>
                                        <div className="entry"><img src="assets/img/product-6.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="empty-space col-xs-b80 col-sm-b0"></div>
                    </div>
                </SwiperSlide>

            {/* Add more SwiperSlides here similar to the above */}

            </Swiper>
        </div>

        <div className="grey-background">
            <div className="empty-space col-xs-b40 col-sm-b80"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-md-push-3">
                        <div className="tabs-block">
                            <div className="tabulation-menu-wrapper text-center">
                                <div className="tabulation-title simple-input">all</div>
                                <ul className="tabulation-toggle">
                                    <li><a className="tab-menu active">all</a></li>
                                    <li><a className="tab-menu">top 10</a></li>
                                    <li><a className="tab-menu">gadgets</a></li>
                                    <li><a className="tab-menu">laptops</a></li>
                                    <li><a className="tab-menu">accessories</a></li>
                                </ul>
                            </div>
                            <div className="empty-space col-xs-b30"></div>
                            <div className="tab-entry visible">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-7.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-8.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-9.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4"><span className="color">$630.00</span>&nbsp;&nbsp;&nbsp;<span className="line-through">$350.00</span></div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-10.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-11.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-12.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-entry">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-7.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-9.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-11.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-entry">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-8.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-10.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-12.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-entry">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-7.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-8.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-11.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-12.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-entry">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-10.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-12.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="empty-space col-xs-b35 col-md-b70"></div>

                        <div className="swiper-container arrows-align-top" data-breakpoints="1" data-xs-slides="1" data-sm-slides="3" data-md-slides="4" data-lt-slides="4" data-slides-per-view="4">
                            <div className="h4 swiper-title">our best categories</div>
                            <div className="empty-space col-xs-b20"></div>
                            <div className="swiper-button-prev style-1"></div>
                            <div className="swiper-button-next style-1"></div>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-13.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-17.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-14.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-18.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-15.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-19.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-16.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-20.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-15.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-16.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-13.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                    <a className="product-shortcode style-2" href="#">
                                        <span className="preview"><img src="assets/img/product-14.png" alt="" /></span>
                                        <span className="description">
                                            <span className="h6 animate-to-green">smart watches</span>
                                            <span className="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-pagination relative-pagination visible-xs"></div>
                        </div>

                        <div className="empty-space col-xs-b35 col-md-b70"></div>

                        <div className="swiper-container arrows-align-top">
                            <div className="h4 swiper-title">people choice</div>
                            <div className="empty-space col-xs-b20"></div>
                            <div className="swiper-button-prev style-1"></div>
                            <div className="swiper-button-next style-1"></div>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="banner-shortcode style-1">
                                        <div className="background" style={{ backgroundImage: "url(assets/img/thumbnail-10.jpg)" }}></div>
                                        <div className="description valign-middle">
                                            <div className="valign-middle-content">
                                                <div className="simple-article size-3 light fulltransparent">DON'T MISS!</div>
                                                <div className="banner-title color">UP TO 70%</div>
                                                <div className="h4 light">best android tv box</div>
                                                <div className="empty-space col-xs-b25"></div>
                                                <a className="button size-1 style-3" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                                        <span className="text">learn more</span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="empty-space col-xs-b60 col-sm-b0"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-shortcode style-1">
                                        <div className="background" style={{ backgroundImage: "url(assets/img/thumbnail-14.jpg);" }}></div>
                                        <div className="description valign-middle">
                                            <div className="valign-middle-content">
                                                <div className="simple-article size-3 light fulltransparent">DON'T MISS!</div>
                                                <div className="banner-title color">UP TO 70%</div>
                                                <div className="h4 light">best android tv box</div>
                                                <div className="empty-space col-xs-b25"></div>
                                                <a className="button size-1 style-3" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                                        <span className="text">learn more</span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="empty-space col-xs-b60 col-sm-b0"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination visible-xs"></div>
                        </div>

                        <div className="empty-space col-xs-b35 col-md-b70"></div>

                        <div className="swiper-container arrows-align-top" data-breakpoints="1" data-xs-slides="1" data-sm-slides="2" data-md-slides="2" data-lt-slides="2" data-slides-per-view="2">
                            <div className="h4 swiper-title">hot proposes</div>
                            <div className="empty-space col-xs-b20"></div>
                            <div className="swiper-button-prev style-1"></div>
                            <div className="swiper-button-next style-1"></div>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="product-shortcode style-3">
                                        <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                        <div className="products-line col-xs-b25">
                                            <div className="line col-xs-b10"><div className="fill" style={{ width: "55%" }}></div></div>
                                            <div className="row">
                                                <div className="col-xs-6 text-left">
                                                    <div className="simple-article size-1">AVAILABLE: <span className="grey">21</span></div>
                                                </div>
                                                <div className="col-xs-6 text-right">
                                                    <div className="simple-article size-1">SOLD: <span className="grey">14</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-container" data-loop="1" data-touch="0">
                                            <div className="swiper-button-prev style-1"></div>
                                            <div className="swiper-button-next style-1"></div>
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img src="assets/img/product-21.jpg" alt="" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <img src="assets/img/product-23.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="empty-space col-xs-b20"></div>
                                        <div className="h6 animate-to-green"><a href="#">smartphone VIBE S1</a></div>
                                        <div className="empty-space col-xs-b10"></div>
                                        <div className="description">
                                            <div className="simple-article size-2">Penatibus nec consequat at In feugiat mole stie tortor a malesuada natoque penatibus</div>
                                        </div>
                                        <div className="empty-space col-xs-b20"></div>
                                        <div className="countdown-wrapper">
                                            <div className="countdown" data-end="Sep,1,2017"></div>
                                        </div>
                                        <div className="preview-buttons">
                                            <div className="buttons-wrapper">
                                                <a className="button size-2 style-2" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                        <span className="text">Learn More</span>
                                                    </span>
                                                </a>
                                                <a className="button size-2 style-3" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                        <span className="text">Add To Cart</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="product-shortcode style-3">
                                        <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                        <div className="products-line col-xs-b25">
                                            <div className="line col-xs-b10"><div className="fill" style={{ width: "55%" }}></div></div>
                                            <div className="row">
                                                <div className="col-xs-6 text-left">
                                                    <div className="simple-article size-1">AVAILABLE: <span className="grey">21</span></div>
                                                </div>
                                                <div className="col-xs-6 text-right">
                                                    <div className="simple-article size-1">SOLD: <span className="grey">14</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-container" data-loop="1" data-touch="0">
                                            <div className="swiper-button-prev style-1"></div>
                                            <div className="swiper-button-next style-1"></div>
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img src="assets/img/product-22.jpg" alt="" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <img src="assets/img/product-24.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="empty-space col-xs-b20"></div>
                                        <div className="h6 animate-to-green"><a href="#">smartphone VIBE S1</a></div>
                                        <div className="empty-space col-xs-b10"></div>
                                        <div className="description">
                                            <div className="simple-article size-2">Penatibus nec consequat at In feugiat mole stie tortor a malesuada natoque penatibus</div>
                                        </div>
                                        <div className="empty-space col-xs-b20"></div>
                                        <div className="countdown-wrapper">
                                            <div className="countdown" data-end="Sep,1,2017"></div>
                                        </div>
                                        <div className="preview-buttons">
                                            <div className="buttons-wrapper">
                                                <a className="button size-2 style-2" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                        <span className="text">Learn More</span>
                                                    </span>
                                                </a>
                                                <a className="button size-2 style-3" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                        <span className="text">Add To Cart</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="product-shortcode style-3">
                                        <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                        <div className="products-line col-xs-b25">
                                            <div className="line col-xs-b10"><div className="fill" style={{ width: "55%" }}></div></div>
                                            <div className="row">
                                                <div className="col-xs-6 text-left">
                                                    <div className="simple-article size-1">AVAILABLE: <span className="grey">21</span></div>
                                                </div>
                                                <div className="col-xs-6 text-right">
                                                    <div className="simple-article size-1">SOLD: <span className="grey">14</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-container" data-loop="1" data-touch="0">
                                            <div className="swiper-button-prev style-1"></div>
                                            <div className="swiper-button-next style-1"></div>
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img src="assets/img/product-21.jpg" alt="" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <img src="assets/img/product-23.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="empty-space col-xs-b20"></div>
                                        <div className="h6 animate-to-green"><a href="#">smartphone VIBE S1</a></div>
                                        <div className="empty-space col-xs-b10"></div>
                                        <div className="description">
                                            <div className="simple-article size-2">Penatibus nec consequat at In feugiat mole stie tortor a malesuada natoque penatibus</div>
                                        </div>
                                        <div className="empty-space col-xs-b20"></div>
                                        <div className="countdown-wrapper">
                                            <div className="countdown" data-end="Sep,1,2017"></div>
                                        </div>
                                        <div className="preview-buttons">
                                            <div className="buttons-wrapper">
                                                <a className="button size-2 style-2" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                        <span className="text">Learn More</span>
                                                    </span>
                                                </a>
                                                <a className="button size-2 style-3" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                        <span className="text">Add To Cart</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="product-shortcode style-3">
                                        <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                        <div className="products-line col-xs-b25">
                                            <div className="line col-xs-b10"><div className="fill" style={{ width: "55%" }}></div></div>
                                            <div className="row">
                                                <div className="col-xs-6 text-left">
                                                    <div className="simple-article size-1">AVAILABLE: <span className="grey">21</span></div>
                                                </div>
                                                <div className="col-xs-6 text-right">
                                                    <div className="simple-article size-1">SOLD: <span className="grey">14</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-container" data-loop="1" data-touch="0">
                                            <div className="swiper-button-prev style-1"></div>
                                            <div className="swiper-button-next style-1"></div>
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img src="assets/img/product-22.jpg" alt="" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <img src="assets/img/product-24.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="empty-space col-xs-b20"></div>
                                        <div className="h6 animate-to-green"><a href="#">smartphone VIBE S1</a></div>
                                        <div className="empty-space col-xs-b10"></div>
                                        <div className="description">
                                            <div className="simple-article size-2">Penatibus nec consequat at In feugiat mole stie tortor a malesuada natoque penatibus</div>
                                        </div>
                                        <div className="empty-space col-xs-b20"></div>
                                        <div className="countdown-wrapper">
                                            <div className="countdown" data-end="Sep,1,2017"></div>
                                        </div>
                                        <div className="preview-buttons">
                                            <div className="buttons-wrapper">
                                                <a className="button size-2 style-2" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                        <span className="text">Learn More</span>
                                                    </span>
                                                </a>
                                                <a className="button size-2 style-3" href="#">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                        <span className="text">Add To Cart</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination relative-pagination visible-xs"></div>
                        </div>

                        <div className="empty-space col-xs-b35 col-md-b70"></div>

                        <div className="tabs-block">
                            <div className="row">
                                <div className="col-lg-4 col-xs-b15 col-lg-b0">
                                    <div className="h4">best proposes</div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="tabulation-menu-wrapper col-lg-text-right">
                                        <div className="tabulation-title simple-input">all</div>
                                        <ul className="tabulation-toggle">
                                            <li><a className="tab-menu active">all</a></li>
                                            <li><a className="tab-menu">featured</a></li>
                                            <li><a className="tab-menu">on sale</a></li>
                                            <li><a className="tab-menu">top rated</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="empty-space col-xs-b15 col-sm-b30"></div>
                            <div className="tab-entry visible">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-25.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="color-selection">
                                                    <div className="entry active" style={{ color: "#a7f050" }}></div>
                                                    <div className="entry" style={{ color: "#50e3f0" }}></div>
                                                    <div className="entry" style={{ color: "#eee" }}></div>
                                                </div>
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-26.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-27.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="color-selection">
                                                    <div className="entry active" style={{ color: "#d0c45c" }}></div>
                                                    <div className="entry" style={{ color: "#000" }}></div>
                                                    <div className="entry" style={{ color: "#eee" }}></div>
                                                </div>
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-entry">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-26.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-27.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="color-selection">
                                                    <div className="entry active" style={{ color: "#d0c45c" }}></div>
                                                    <div className="entry" style={{ color: "#000" }}></div>
                                                    <div className="entry" style={{ color: "#eee" }}></div>
                                                </div>
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-entry">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-25.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="color-selection">
                                                    <div className="entry active" style={{ color: "#a7f050" }}></div>
                                                    <div className="entry" style={{ color: "#50e3f0" }}></div>
                                                    <div className="entry" style={{ color: "#eee" }}></div>
                                                </div>
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-26.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-entry">
                                <div className="row nopadding">
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-25.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="color-selection">
                                                    <div className="entry active" style={{ color: "#a7f050" }}></div>
                                                    <div className="entry" style={{ color: "#50e3f0" }}></div>
                                                    <div className="entry" style={{ color: "#eee" }}></div>
                                                </div>
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-27.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="color-selection">
                                                    <div className="entry active" style={{ color: "#d0c45c" }}></div>
                                                    <div className="entry" style={{ color: "#000" }}></div>
                                                    <div className="entry" style={{ color: "#eee" }}></div>
                                                </div>
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-shortcode style-1">
                                            <div className="title">
                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                            </div>
                                            <div className="preview">
                                                <img src="assets/img/product-26.jpg" alt="" />
                                                <div className="preview-buttons valign-middle">
                                                    <div className="valign-middle-content">
                                                        <Link className="button size-2 style-2" to="/product">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                <span className="text">Learn More</span>
                                                            </span>
                                                        </Link>
                                                        <a className="button size-2 style-3" href="#">
                                                            <span className="button-wrapper">
                                                                <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                <span className="text">Add To Cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <div className="simple-article size-4 dark">$630.00</div>
                                            </div>
                                            <div className="description">
                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                <div className="icons">
                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                    <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="empty-space col-xs-b35 col-md-b70"></div>
                    </div>
                    <div className="col-md-3 col-md-pull-9">

                        <div className="h4 col-xs-b25">popular categories</div>
                        <ul className="categories-menu">
                            <li>
                                <a href="#">laptops &amp; computers</a>
                                <div className="toggle"></div>
                                <ul>
                                    <li>
                                        <a href="#">laptops &amp; computers</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">laptops &amp; computers</a>
                                            </li>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">video &amp; photo cameras</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">smartphones</a>
                                    </li>
                                    <li>
                                        <a href="#">tv &amp; audio</a>
                                    </li>
                                    <li>
                                        <a href="#">gadgets</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">video &amp; photo cameras</a>
                                <div className="toggle"></div>
                                <ul>
                                    <li>
                                        <a href="#">laptops &amp; computers</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">laptops &amp; computers</a>
                                            </li>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">video &amp; photo cameras</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">laptops &amp; computers</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">smartphones</a>
                                    </li>
                                    <li>
                                        <a href="#">tv &amp; audio</a>
                                    </li>
                                    <li>
                                        <a href="#">gadgets</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">smartphones</a>
                                <div className="toggle"></div>
                                <ul>
                                    <li>
                                        <a href="#">laptops &amp; computers</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">laptops &amp; computers</a>
                                            </li>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">video &amp; photo cameras</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">smartphones</a>
                                    </li>
                                    <li>
                                        <a href="#">tv &amp; audio</a>
                                    </li>
                                    <li>
                                        <a href="#">gadgets</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">tv &amp; audio</a>
                                <div className="toggle"></div>
                                <ul>
                                    <li>
                                        <a href="#">laptops &amp; computers</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">laptops &amp; computers</a>
                                            </li>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">video &amp; photo cameras</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">smartphones</a>
                                    </li>
                                    <li>
                                        <a href="#">tv &amp; audio</a>
                                    </li>
                                    <li>
                                        <a href="#">gadgets</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">gadgets</a>
                                <div className="toggle"></div>
                                <ul>
                                    <li>
                                        <a href="#">laptops &amp; computers</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">laptops &amp; computers</a>
                                            </li>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">video &amp; photo cameras</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">smartphones</a>
                                    </li>
                                    <li>
                                        <a href="#">tv &amp; audio</a>
                                    </li>
                                    <li>
                                        <a href="#">gadgets</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">car electronics</a>
                                <div className="toggle"></div>
                                <ul>
                                    <li>
                                        <a href="#">laptops &amp; computers</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">laptops &amp; computers</a>
                                            </li>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">video &amp; photo cameras</a>
                                        <div className="toggle"></div>
                                        <ul>
                                            <li>
                                                <a href="#">video &amp; photo cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">smartphones</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">smartphones</a>
                                    </li>
                                    <li>
                                        <a href="#">tv &amp; audio</a>
                                    </li>
                                    <li>
                                        <a href="#">gadgets</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">video games &amp; consoles</a>
                            </li>
                            <li>
                                <a href="#">software</a>
                            </li>
                            <li>
                                <a href="#">offeci accessories</a>
                            </li>
                            <li>
                                <a href="#">accessories</a>
                            </li>
                        </ul>

                        <div className="empty-space col-xs-b25 col-sm-b50"></div>

                        <div className="row">
                            <div className="col-sm-6 col-md-12">
                                <div className="swiper-container banner-shortcode style-2">
                                    <div className="swiper-button-prev hidden"></div>
                                    <div className="swiper-button-next hidden"></div>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="banner-shortcode style-2">
                                                <div className="content">
                                                    <div className="background" style={{ backgroundImage: 'url(assets/img/thumbnail-11.jpg);' }}></div>
                                                    <div className="description valign-middle">
                                                        <div className="valign-middle-content">
                                                            <div className="simple-article size-1 color"><a href="#">GADGETS</a></div>
                                                            <div className="h4 light"><a href="#">cool sport gadget</a></div>
                                                            <div className="banner-title color">- 35% OFF</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="banner-shortcode style-2">
                                                <div className="content">
                                                    <div className="background" style={{ backgroundImage: 'url(assets/img/thumbnail-11.jpg);' }}></div>
                                                    <div className="description valign-middle">
                                                        <div className="valign-middle-content">
                                                            <div className="simple-article size-1 color"><a href="#">GADGETS</a></div>
                                                            <div className="h4 light"><a href="#">cool sport gadget</a></div>
                                                            <div className="banner-title color">- 35% OFF</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="banner-shortcode style-2">
                                                <div className="content">
                                                    <div className="background" style={{ backgroundImage: 'url(assets/img/thumbnail-11.jpg);' }}></div>
                                                    <div className="description valign-middle">
                                                        <div className="valign-middle-content">
                                                            <div className="simple-article size-1 color"><a href="#">GADGETS</a></div>
                                                            <div className="h4 light"><a href="#">cool sport gadget</a></div>
                                                            <div className="banner-title color">- 35% OFF</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="banner-shortcode style-2">
                                                <div className="content">
                                                    <div className="background" style={{ backgroundImage: 'url(assets/img/thumbnail-11.jpg);' }}></div>
                                                    <div className="description valign-middle">
                                                        <div className="valign-middle-content">
                                                            <div className="simple-article size-1 color"><a href="#">GADGETS</a></div>
                                                            <div className="h4 light"><a href="#">cool sport gadget</a></div>
                                                            <div className="banner-title color">- 35% OFF</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>

                                <div className="empty-space col-xs-b25 col-sm-b50"></div>
                            </div>
                            <div className="col-sm-6 col-md-12">
                                <div className="h4 col-xs-b25">most viewed</div>
                                <div className="product-shortcode style-4 clearfix">
                                    <a className="preview" href="#"><img src="assets/img/product-28.jpg" alt="" /></a>
                                    <div className="description">
                                        <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                                        <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                                        <div className="simple-article dark">$98.00</div>
                                    </div>
                                </div>
                                <div className="col-xs-b10"></div>
                                <div className="product-shortcode style-4 clearfix">
                                    <a className="preview" href="#"><img src="assets/img/product-29.jpg" alt="" /></a>
                                    <div className="description">
                                        <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                        <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                                        <div className="simple-article dark">$12.00</div>
                                    </div>
                                </div>
                                <div className="col-xs-b10"></div>
                                <div className="product-shortcode style-4 clearfix">
                                    <a className="preview" href="#"><img src="assets/img/product-30.jpg" alt="" /></a>
                                    <div className="description">
                                        <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                        <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                                        <div className="simple-article dark">$4.00</div>
                                    </div>
                                </div>
                                
                                <div className="empty-space col-xs-b25 col-sm-b50"></div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-md-12">
                                <div className="h4 col-xs-b25">feature products</div>
                                <div className="swiper-container">
                                    <div className="swiper-button-prev hidden"></div>
                                    <div className="swiper-button-next hidden"></div>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="product-shortcode style-1 text-center">
                                                <div className="title">
                                                    <div className="simple-article size-1 color col-xs-b5"><a href="#">LAPTOPS</a></div>
                                                    <div className="h6 animate-to-green"><a href="#">high-end spectre x360</a></div>
                                                </div>
                                                <div className="preview">
                                                    <img src="assets/img/product-26.jpg" alt="" />
                                                    <div className="preview-buttons valign-middle">
                                                        <div className="valign-middle-content">
                                                            <a className="button size-2 style-2" href="#">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                    <span className="text">Learn More</span>
                                                                </span>
                                                            </a>
                                                            <a className="button size-2 style-3" href="#">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                    <span className="text">Add To Cart</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <div className="simple-article size-4 dark">$950.00</div>
                                                </div>
                                                <div className="description">
                                                    <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                    <div className="icons">
                                                        <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                        <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                                <div className="empty-space col-xs-b60"></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-shortcode style-1 text-center">
                                                <div className="title">
                                                    <div className="simple-article size-1 color col-xs-b5"><a href="#">LAPTOPS</a></div>
                                                    <div className="h6 animate-to-green"><a href="#">high-end spectre x360</a></div>
                                                </div>
                                                <div className="preview">
                                                    <img src="assets/img/product-27.jpg" alt="" />
                                                    <div className="preview-buttons valign-middle">
                                                        <div className="valign-middle-content">
                                                            <a className="button size-2 style-2" href="#">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                    <span className="text">Learn More</span>
                                                                </span>
                                                            </a>
                                                            <a className="button size-2 style-3" href="#">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                    <span className="text">Add To Cart</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <div className="simple-article size-4 dark">$950.00</div>
                                                </div>
                                                <div className="description">
                                                    <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                    <div className="icons">
                                                        <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                        <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                                <div className="empty-space col-xs-b60"></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-shortcode style-1 text-center">
                                                <div className="title">
                                                    <div className="simple-article size-1 color col-xs-b5"><a href="#">LAPTOPS</a></div>
                                                    <div className="h6 animate-to-green"><a href="#">high-end spectre x360</a></div>
                                                </div>
                                                <div className="preview">
                                                    <img src="assets/img/product-26.jpg" alt="" />
                                                    <div className="preview-buttons valign-middle">
                                                        <div className="valign-middle-content">
                                                            <a className="button size-2 style-2" href="#">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                    <span className="text">Learn More</span>
                                                                </span>
                                                            </a>
                                                            <a className="button size-2 style-3" href="#">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                    <span className="text">Add To Cart</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <div className="simple-article size-4 dark">$950.00</div>
                                                </div>
                                                <div className="description">
                                                    <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                    <div className="icons">
                                                        <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                        <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                                <div className="empty-space col-xs-b60"></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="product-shortcode style-1 text-center">
                                                <div className="title">
                                                    <div className="simple-article size-1 color col-xs-b5"><a href="#">LAPTOPS</a></div>
                                                    <div className="h6 animate-to-green"><a href="#">high-end spectre x360</a></div>
                                                </div>
                                                <div className="preview">
                                                    <img src="assets/img/product-25.jpg" alt="" />
                                                    <div className="preview-buttons valign-middle">
                                                        <div className="valign-middle-content">
                                                            <a className="button size-2 style-2" href="#">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                    <span className="text">Learn More</span>
                                                                </span>
                                                            </a>
                                                            <a className="button size-2 style-3" href="#">
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                    <span className="text">Add To Cart</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <div className="simple-article size-4 dark">$950.00</div>
                                                </div>
                                                <div className="description">
                                                    <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                    <div className="icons">
                                                        <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                        <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                                <div className="empty-space col-xs-b60"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>

                                <div className="empty-space col-xs-b25 col-sm-b50"></div>
                            </div>
                            <div className="col-sm-6 col-md-12">
                                <div className="h4 col-xs-b25">latest post</div>
                                <div className="row m5 text-center">
                                    <div className="blog-shortcode style-1">
                                        <a href="#" className="preview simple-mouseover"><img src="assets/img/thumbnail-12.jpg" alt="" /></a>
                                        <div className="description">
                                            <div className="simple-article size-1 grey col-xs-b5">APR 07 / 15 &nbsp;&nbsp;&nbsp;<a href="#" className="color">GADGETS</a></div>
                                            <h6 className="h6 col-xs-b10"><a href="#">Phasellus rhoncus in</a></h6>
                                            <div className="simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus</div>
                                        </div>
                                    </div>
                                    
                                    <div className="blog-shortcode style-1">
                                        <a href="#" className="preview simple-mouseover"><img src="assets/img/thumbnail-13.jpg" alt="" /></a>
                                        <div className="description">
                                            <div className="simple-article size-1 grey col-xs-b5">APR 07 / 15 &nbsp;&nbsp;&nbsp;<a href="#" className="color">GADGETS</a></div>
                                            <h6 className="h6 col-xs-b10"><a href="#">Phasellus rhoncus in</a></h6>
                                            <div className="simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space col-xs-b25 col-sm-b50"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
