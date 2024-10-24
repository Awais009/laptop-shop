// import React from "react";
import React, { useEffect , useRef , useState  } from 'react';
import { Link } from "react-router-dom";
const ProductDetail = () => {
    
    return (
        <>
        <div className="container">
            <div className="empty-space col-xs-b15 col-sm-b30"></div>
            <div className="breadcrumbs">
                <a href="#">home</a>
                <a href="#">accessories</a>
                <a href="#">gadgets</a>
                <a href="#">sport gadgets</a>
            </div>
            <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100"></div>
            <div className="row">
                <div className="col-md-9 col-md-push-3">
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

                                <div className="swiper-container swiper-control-bottom" data-breakpoints="1" data-xs-slides="3" data-sm-slides="3" data-md-slides="4" data-lt-slides="4" data-slides-per-view="5" data-center="1" data-click="1">
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
                                        <option disabled="disabled" selected="selected">Choose size</option>
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
                                        <div className="entry active"style={{ color: "#a7f050" }}></div>
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
                                    <Link className="button size-2 style-2 block" to="/shopping-cart">
                                        <span className="button-wrapper">
                                            <span className="icon"><img src="assets/img/icon-2.png" alt="" /></span>
                                            <span className="text">add to cart</span>
                                        </span>
                                    </Link>
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

                    <div className="empty-space col-xs-b35 col-md-b70"></div>

                    <div className="tabs-block">
                        <div className="tabulation-menu-wrapper text-center">
                            <div className="tabulation-title simple-input">description</div>
                            <ul className="tabulation-toggle">
                                <li><a className="tab-menu active">description</a></li>
                                <li><a className="tab-menu">technical specs</a></li>
                                <li><a className="tab-menu">testimonials</a></li>
                            </ul>
                        </div>
                        <div className="empty-space col-xs-b30 col-sm-b60"></div>

                        <div className="tab-entry visible">
                            <div className="row">
                                <div className="col-sm-6 col-xs-b30 col-sm-b0">
                                    <div className="simple-article">
                                        <img className="rounded-image" src="assets/img/thumbnail-15.jpg" alt="" />
                                    </div>
                                    <div className="empty-space col-xs-b25"></div>
                                    <div className="h5">Nullam et massa nulla</div>
                                    <div className="empty-space col-xs-b20"></div>
                                    <div className="simple-article size-2">Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="simple-article">
                                        <img className="rounded-image" src="assets/img/thumbnail-16.jpg" alt="" />
                                    </div>
                                    <div className="empty-space col-xs-b25"></div>
                                    <div className="h5">Vivamus ut posuere nunc</div>
                                    <div className="empty-space col-xs-b20"></div>
                                    <div className="simple-article size-2">Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>

                            <div className="empty-space col-xs-b35 col-md-b70"></div>

                            <div className="left-right-entry clearfix align-right">
                                <div className="preview-wrapper">
                                    <img className="preview" src="assets/img/thumbnail-17.jpg" alt="" />
                                </div>
                                <div className="description">
                                    <div className="h5">Aenean a tincidunt felis</div>
                                    <div className="empty-space col-xs-b15"></div>
                                    <div className="simple-article size-2">Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur vulputate elit.</div>
                                    <div className="empty-space col-xs-b30 col-sm-b45"></div>
                                    <div className="h5">Nulla sed arcu ipsum</div>
                                    <div className="empty-space col-xs-b15"></div>
                                    <div className="simple-article size-2">Nullam et massa nulla. Quisque nec magna ornare tellus consequat lacinia a quis sem. Vivamus ut posuere nunc. Praesent porttitor vitae augue in semper. Vestibulum non leo et nisi facilisis consequat. Ut volutpat augue faucibus, fermentum turpis convallis, lobortis augue.</div>
                                </div>
                            </div>

                            <div className="empty-space col-xs-b35 col-md-b70"></div>

                            <div className="left-right-entry clearfix">
                                <div className="preview-wrapper">
                                    <img className="preview" src="assets/img/thumbnail-18.jpg" alt="" />
                                </div>
                                <div className="description">
                                    <div className="h5">Aenean a tincidunt felis</div>
                                    <div className="empty-space col-xs-b15"></div>
                                    <div className="simple-article size-2">Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur vulputate elit.</div>
                                    <div className="empty-space col-xs-b30 col-sm-b45"></div>
                                    <div className="h5">Nulla sed arcu ipsum</div>
                                    <div className="empty-space col-xs-b15"></div>
                                    <div className="simple-article size-2">Nullam et massa nulla. Quisque nec magna ornare tellus consequat lacinia a quis sem. Vivamus ut posuere nunc. Praesent porttitor vitae augue in semper. Vestibulum non leo et nisi facilisis consequat. Ut volutpat augue faucibus, fermentum turpis convallis, lobortis augue.</div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-entry">
                            <div className="h5">watch 38mm</div>
                            <div className="empty-space col-xs-b15"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">height:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">38.6mm</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">width:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">33.3mm</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">depth:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">10.5mm</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">case:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">40g</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">material:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">Stainless Steel</div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div className="empty-space col-xs-b30 col-sm-b60"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="simple-article size-2 text-center">
                                        <img src="assets/img/thumbnail-19.jpg" alt="" />
                                        <p><br/>Stainless Steel</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="simple-article size-2 text-center">
                                        <img src="assets/img/thumbnail-20.jpg" alt="" />
                                        <p><br/>Space Black Stainless Steel</p>
                                    </div>
                                </div>
                            </div>
                            <div className="empty-space col-xs-b30 col-sm-b60"></div>
                            <div className="h5">watch 42mm</div>
                            <div className="empty-space col-xs-b15"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">height:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">42.0mm</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">width:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">35.9mm</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">depth:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">10.5mm</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">case:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">50g</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-description-entry row nopadding">
                                        <div className="col-xs-6">
                                            <div className="h6">material:</div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <div className="simple-article size-2">Space Black Stainless Steel</div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div className="empty-space col-xs-b30 col-sm-b60"></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="simple-article size-2 text-center">
                                        <img src="assets/img/thumbnail-21.jpg" alt="" />
                                        <p><br/>Stainless Steel</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="simple-article size-2 text-center">
                                        <img src="assets/img/thumbnail-22.jpg" alt="" />
                                        <p><br/>Space Black Stainless Steel</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-entry">
                            <div className="testimonial-entry">
                                <div className="row col-xs-b20">
                                    <div className="col-xs-8">
                                        <img className="preview" src="assets/img/testimonial-1.jpg" alt="" />
                                        <div className="heading-description">
                                            <div className="h6 col-xs-b5">Dorian gray</div>
                                            <div className="rate-wrapper align-inline">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4 text-right">
                                        <div className="simple-article size-1 grey">20:45 APR 07 / 15</div>
                                    </div>
                                </div>
                                <div className="simple-article size-2 col-xs-b15">Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur vulputate elit. </div>
                                <div className="pros">
                                    <div className="simple-article size-2 col-xs-b15">Runc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis</div>
                                </div>
                                <div className="cons">
                                    <div className="simple-article size-2 col-xs-b25">Do not have</div>
                                </div>
                            </div>
                            <div className="testimonial-entry">
                                <div className="row col-xs-b20">
                                    <div className="col-xs-8">
                                        <img className="preview" src="assets/img/testimonial-2.jpg" alt="" />
                                        <div className="heading-description">
                                            <div className="h6 col-xs-b5">alan doe</div>
                                            <div className="rate-wrapper align-inline">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4 text-right">
                                        <div className="simple-article size-1 grey">20:45 APR 07 / 15</div>
                                    </div>
                                </div>
                                <div className="simple-article size-2 col-xs-b15">Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur vulputate elit. </div>
                                <div className="pros">
                                    <div className="simple-article size-2 col-xs-b15">Runc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis</div>
                                </div>
                                <div className="cons">
                                    <div className="simple-article size-2 col-xs-b25">Do not have</div>
                                </div>
                            </div>
                            <div className="testimonial-entry">
                                <div className="row col-xs-b20">
                                    <div className="col-xs-8">
                                        <img className="preview" src="assets/img/testimonial-3.jpg" alt="" />
                                        <div className="heading-description">
                                            <div className="h6 col-xs-b5">samantha rae</div>
                                            <div className="rate-wrapper align-inline">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4 text-right">
                                        <div className="simple-article size-1 grey">20:45 APR 07 / 15</div>
                                    </div>
                                </div>
                                <div className="simple-article size-2 col-xs-b15">Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur vulputate elit. </div>
                                <div className="pros">
                                    <div className="simple-article size-2 col-xs-b15">Runc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis</div>
                                </div>
                                <div className="cons">
                                    <div className="simple-article size-2 col-xs-b25">Do not have</div>
                                </div>
                            </div>
                            <form>
                                <div className="row m10">
                                    <div className="col-sm-6">
                                        <input className="simple-input" type="text" value="" placeholder="Your name" />
                                        <div className="empty-space col-xs-b20"></div>
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="simple-input" type="text" value="" placeholder="Your name" />
                                        <div className="empty-space col-xs-b20"></div>
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="simple-input" type="text" value="" placeholder="Describe the pros" />
                                        <div className="empty-space col-xs-b20"></div>
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="simple-input" type="text" value="" placeholder="Describe cons" />
                                        <div className="empty-space col-xs-b20"></div>
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea className="simple-input" placeholder="Your comment"></textarea>
                                        <div className="empty-space col-xs-b20"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <div className="align-inline">
                                            <div className="empty-space col-xs-b5"></div>
                                            <div className="simple-article size-3">Rating&nbsp;&nbsp;&nbsp;</div>
                                            <div className="empty-space col-xs-b5"></div>
                                        </div>
                                        <div className="rate-wrapper set align-inline">
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <div className="button size-2 style-3">
                                            <span className="button-wrapper">
                                                <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                                <span className="text">submit</span>
                                            </span>
                                            <input type="submit" value="" /> 
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="empty-space col-xs-b35 col-md-b70"></div>

                    <div className="swiper-container rounded">
                        <div className="swiper-button-prev style-1 hidden"></div>
                        <div className="swiper-button-next style-1 hidden"></div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="banner-shortcode style-1">
                                    <div className="background" style={{ backgroundImage: 'url(assets/img/thumbnail-14.jpg)' }}></div>
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
                                    <div className="background" style={{ backgroundImage: 'url(assets/img/thumbnail-10.jpg)' }}></div>
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
                        <div className="swiper-pagination"></div>
                    </div>

                    <div className="empty-space col-xs-b35 col-md-b70"></div>
                    <div className="empty-space col-md-b70"></div>

                </div>
                <div className="col-md-3 col-md-pull-9">
                    <div className="h4 col-xs-b10">popular categories</div>
                    <ul className="categories-menu transparent">
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

                    <div className="h4 col-xs-b25">Price</div>
                    <div id="prices-range"></div>
                    <div className="simple-article size-1">PRICE: <span className="grey">$<span className="min-price">40</span> - $<span className="max-price">300</span></span></div>

                    <div className="empty-space col-xs-b25 col-sm-b50"></div>

                    <div className="h4 col-xs-b25">Brands</div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>LG</span>
                    </label>
                    <div className="empty-space col-xs-b10"></div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>SAMSUNG</span>
                    </label>
                    <div className="empty-space col-xs-b10"></div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>Apple</span>
                    </label>
                    <div className="empty-space col-xs-b10"></div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>HTC</span>
                    </label>
                    <div className="empty-space col-xs-b10"></div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>Google</span>
                    </label>

                    <div className="empty-space col-xs-b25 col-sm-b50"></div>

                    <div className="h4 col-xs-b25">Choose Color</div>
                    <div className="color-selection size-1">
                        <div className="entry active" style={{ color: "#bf584b" }}></div>
                        <div className="entry" style={{ color: "#bf584b" }}></div>
                        <div className="entry" style={{ color: "#bf584b" }}></div>
                        <div className="entry" style={{ color: "#bf584b" }}></div>
                        <div className="entry" style={{ color: "#bf584b" }}></div>
                        <div className="entry" style={{ color: "#bf584b" }}></div>
                        <div className="entry" style={{ color: "#bf584b" }}></div>
                        <div className="entry" style={{ color: "#bf584b" }}></div>
                    </div>

                    <div className="empty-space col-xs-b25 col-sm-b50"></div>

                    <div className="h4 col-xs-b25">Operation System</div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>Android</span>
                    </label>
                    <div className="empty-space col-xs-b10"></div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>IOS</span>
                    </label>
                    <div className="empty-space col-xs-b10"></div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>Windows Phone</span>
                    </label>
                    <div className="empty-space col-xs-b10"></div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>Symbian</span>
                    </label>
                    <div className="empty-space col-xs-b10"></div>
                    <label className="checkbox-entry">
                        <input type="checkbox" /><span>Blackberry OS</span>
                    </label>

                    <div className="empty-space col-xs-b25 col-sm-b50"></div>

                    <div className="h4 col-xs-b25">Popular Tags</div>
                    <div className="tags light clearfix">
                        <a className="tag">headphoness</a>
                        <a className="tag">accessories</a>
                        <a className="tag">new</a>
                        <a className="tag">wireless</a>
                        <a className="tag">cables</a>
                        <a className="tag">devices</a>
                        <a className="tag">gadgets</a>
                        <a className="tag">brands</a>
                        <a className="tag">replacements</a>
                        <a className="tag">cases</a>
                        <a className="tag">cables</a>
                        <a className="tag">professional</a>
                    </div>

                    <div className="empty-space col-xs-b25 col-sm-b60"></div>


                </div>
            </div>

            <div className="swiper-container arrows-align-top" data-breakpoints="1" data-xs-slides="1" data-sm-slides="3" data-md-slides="4" data-lt-slides="4" data-slides-per-view="5">
                <div className="h4 swiper-title">accessories</div>
                <div className="empty-space col-xs-b20"></div>
                <div className="swiper-button-prev style-1"></div>
                <div className="swiper-button-next style-1"></div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-49.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-50.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-51.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-52.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-53.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-54.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-55.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs"></div>
            </div>

            <div className="empty-space col-xs-b35 col-md-b70"></div>
            <div className="empty-space col-md-b70"></div>

            <div className="swiper-container arrows-align-top" data-breakpoints="1" data-xs-slides="1" data-sm-slides="3" data-md-slides="4" data-lt-slides="4" data-slides-per-view="5">
                <div className="h4 swiper-title">accessories</div>
                <div className="empty-space col-xs-b20"></div>
                <div className="swiper-button-prev style-1"></div>
                <div className="swiper-button-next style-1"></div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-54.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-55.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-56.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-57.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-58.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-49.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-shortcode style-1 small">
                            <div className="title">
                                <div className="simple-article size-1 color col-xs-b5"><a href="#">ACCESSORIES</a></div>
                                <div className="h6 animate-to-green"><a href="#">usb watch charger</a></div>
                            </div>
                            <div className="preview">
                                <img src="assets/img/product-50.jpg" alt="" />
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
                                <div className="simple-article size-4 dark">$630.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs"></div>
            </div>

            <div className="empty-space col-xs-b35 col-md-b70"></div>
            <div className="empty-space col-md-b70"></div>

            <div className="row">
                <div className="col-sm-6 col-md-3 col-xs-b25">
                    <div className="h4 col-xs-b25">Hot Sale</div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-28.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">WIRELESS</div>
                            <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                            <div className="simple-article dark">$98.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-29.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">CASES</div>
                            <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                            <div className="simple-article dark">$12.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-30.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">CASES</div>
                            <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                            <div className="simple-article"><span className="color">$24.00</span>&nbsp;&nbsp;&nbsp;<span className="line-through">$32.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xs-b25">
                    <div className="h4 col-xs-b25">Top Rated</div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-31.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">WIRELESS</div>
                            <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                            <div className="simple-article dark">$98.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-32.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">CASES</div>
                            <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                            <div className="simple-article dark">$12.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-33.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">CASES</div>
                            <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                            <div className="simple-article dark">$4.00</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xs-b25">
                    <div className="h4 col-xs-b25">Popular</div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-34.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">WIRELESS</div>
                            <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                            <div className="simple-article dark">$98.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-35.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">CASES</div>
                            <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                            <div className="simple-article dark">$12.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-36.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">CASES</div>
                            <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                            <div className="simple-article dark">$4.00</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xs-b25">
                    <div className="h4 col-xs-b25">Best Choice</div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-37.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">WIRELESS</div>
                            <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                            <div className="simple-article dark">$98.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-38.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">CASES</div>
                            <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                            <div className="simple-article dark">$12.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-39.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5">CASES</div>
                            <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                            <div className="simple-article dark">$4.00</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className="empty-space col-xs-b15 col-sm-b45"></div>
        </>
    );
}


export default ProductDetail;