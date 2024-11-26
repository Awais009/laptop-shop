// import React from "react";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { DataContext } from '../../Context';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Controller } from 'swiper/modules';
const ProductDetail = () => {
    const [mainSwiper, setMainSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { addCart, context } = useContext(DataContext);
    let location = useLocation();
    const { SKU } = useParams(); // Get the ID from the URL
    const [product, setProduct] = useState([]);
    const [navigations, setNavigations] = useState([]);
    const [storagePath, setStoragePath] = useState('');
    const [quantity, setQuantity] = useState(1);
    const apiUrl = process.env.REACT_APP_API_URL; // Or use a config file

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/product-detail/${SKU}`);
                setProduct(response.data.product);
                setNavigations(response.data.navigations);
                setStoragePath(response.data.storagePath);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        setQuantity(1)
        fetchData();
    }, [location]);



    return (
        <>
        {/* 
                                        <div className="swiper-container swiper-control-bottom" data-breakpoints="1" data-xs-slides="3" data-sm-slides="3" data-md-slides="4" data-lt-slides="5" data-slides-per-view="5" data-center="1" data-click="1">
        
        */}
            <div className="container">

                <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100"></div>
                <div className="row">
                    <div className="col-md-9 col-md-push-3">
                        <div className="row">
                            <div className="col-sm-6 col-xs-b30 col-sm-b0">

                                <div className="main-product-slider-wrapper swipers-couple-wrapper">
                                    {/* Main Product Slider */}
                                    <Swiper
                                        spaceBetween={10}
                                        navigation={true}
                                        controller={{ control: thumbsSwiper }}
                                        modules={[ Navigation,  Controller]}
                                        className="swiper-control-top"
                                        onSwiper={setMainSwiper}
                                    >
                                        {
                                            product?.images?.map((image, i) => (
                                                <SwiperSlide key={i}>
                                                    <div
                                                        className="product-big-preview-entry swiper-lazy"
                                                        style={{
                                                            backgroundImage: `url(${storagePath}/${image.path})`,
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
                                            product?.images?.map((image, i) => (
                                                <SwiperSlide key={image.id} onClick={() => mainSwiper && mainSwiper.slideTo(i)}>
                                                    <div className="product-small-preview-entry">
                                                        <img
                                                            src={`${storagePath}/${image.path}`}
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
                                <div className="simple-article size-3 grey col-xs-b5">{product?.navigation_item?.title}</div>
                                <div className="h3 col-xs-b25">{product?.title}
                                </div>
                                <div className="row col-xs-b25">
                                    <div className="col-sm-6">
                                        <div className="simple-article size-5 grey">PRICE: <span className="color">${product?.price}</span></div>
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
                                        <div className="simple-article size-3 col-xs-b5">ITEM NO.: <span className="grey">{product?.SKU}</span></div>
                                    </div>
                                    <div className="col-sm-6 col-sm-text-right">
                                        <div className="simple-article size-3 col-xs-b20">AVAILABLE.: <span className="grey">YES</span></div>
                                    </div>
                                </div>
                                <div className="simple-article size-3 col-xs-b30">{product?.description}</div>


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
                                        <Link className="button size-2 style-2 block" onClick={() => addCart({ product_id: product.id, qty: quantity })}>
                                            <span className="button-wrapper" >
                                                <span className="icon"><img src="assets/img/icon-2.png" alt="" /></span>
                                                <span className="text"  >add to cart</span>
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

                            </div>
                        </div>

                        <div className="empty-space col-xs-b35 col-md-b70"></div>

                        <div className="tabs-block">
                            <div className="tabulation-menu-wrapper text-center">
                                <div className="tabulation-title simple-input">description</div>
                                <ul className="tabulation-toggle">
                                    <li><a className="tab-menu active">description</a></li>

                                </ul>
                            </div>
                            <div className="empty-space col-xs-b30 col-sm-b60"></div>

                            <div className="tab-entry visible">
                                <div className="row">
                                    {product.images && product.images.map((image, i) => (
                                        i < 2 && (
                                            <div key={i} className={`col-sm-6 ${i === 0 ? "col-xs-b30 col-sm-b0" : ''}`}>
                                                <div className="simple-article">
                                                    <img className="rounded-image img-fluid" src={storagePath + '/' + image.path} width={490} height={243} alt="" />
                                                </div>
                                                <div className="empty-space col-xs-b20"></div>
                                                <div className="simple-article size-2">
                                                    {image.description}
                                                </div>
                                            </div>
                                        )
                                    ))}


                                </div>
                                {product.images && product.images.map((image, i) => (
                                    i > 1 && (

                                        <React.Fragment key={i}>

                                            <div className="empty-space col-xs-b35 col-md-b70"></div>
                                            <div className={`left-right-entry clearfix ${i % 2 == 0 ? "align-right" : ""}`}>
                                                <div className="preview-wrapper">
                                                    <img className="preview" src={`${storagePath}/${image.path}`} width={490} height={243} alt="" />
                                                </div>
                                                <div className="description">
                                                    <div className="empty-space col-xs-b15"></div>
                                                    <div className="simple-article size-2">
                                                        {image.description}
                                                    </div>

                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                ))}


                            </div>
                        </div>




                        <div className="empty-space col-xs-b35 col-md-b70"></div>
                        <div className="empty-space col-md-b70"></div>

                    </div>
                    <div className="col-md-3 col-md-pull-9">
                        <div className="h4 col-xs-b10">popular categories</div>
                        <ul className="categories-menu transparent">
                            {navigations && navigations.map((navigation, i) => (
                                <li key={i}>
                                    <Link to={`/${navigation.title}/product-list`}>{navigation.title}</Link>

                                    {navigation.items.length > 0 && <div className="toggle"></div>}
                                    <ul>
                                        {navigation.items && navigation.items.map((item, j) => (
                                            <li key={j}>
                                                <Link to={`/${item.title}/product-list`}>{item.title}</Link>

                                            </li>
                                        ))}


                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="empty-space col-md-b70"></div>

                <div className="row">
                    {navigations?.map((navigation) => (
                        navigation.products.length > 0 &&
                        <div className="col-sm-6 col-md-3 col-xs-b25" key={navigation.id}>
                            <div className="h4 col-xs-b25">{navigation.title}</div>
                            {navigation.products?.map((product) => (
                               <React.Fragment key={product.id}>
                                    <div className="col-xs-b10"></div>
                                    <div className="product-shortcode style-4 rounded clearfix">
                                        <Link className="preview" to={"/product/" + product.SKU}><img src={storagePath + "/" + product.image.path} alt="" /></Link>
                                        <div className="description">
                                            <div className="simple-article color size-1 col-xs-b5">{navigation.title}</div>
                                            <h6 className="h6 col-xs-b10"><Link to={"/product/" + product.SKU}>{product.title}</Link></h6>
                                            <div className="simple-article dark">${product.price}</div>
                                        </div>
                                    </div>
                                    </ React.Fragment>

                            ))}


                        </div>
                    ))}


                </div>

            </div>


            <div className="empty-space col-xs-b15 col-sm-b45"></div>
        </>
    );
}


export default ProductDetail;