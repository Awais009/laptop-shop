// import React from "react";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { DataContext } from '../../Context';

const ProductDetail = () => {
    const {addCart} =  useContext(DataContext);
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
                const response = await axios.get(`http://localhost/laptop-backend/api/product-detail/${SKU}`);
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
            <div className="container">
                <div className="empty-space col-xs-b15 col-sm-b30"></div>
                <div className="breadcrumbs">
                    <a href="#">home </a>
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
                                        <div className="swiper-wrapper">

                                            {/* {  product.images && product.images.map((image,i)=>(
                                            <div className="swiper-slide">
                                                <div className="product-big-preview-entry swiper-lazy" data-background="assets/img/product-4.png"></div>
                                            </div>
                                           

                                             ))  }  */}

                                            <div className="swiper-slide">
                                                <div className="product-big-preview-entry " data-background="assets/img/product-4.png"></div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="product-big-preview-entry " data-background="assets/img/product-4.png"></div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="product-big-preview-entry " data-background="assets/img/product-4.png"></div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="empty-space col-xs-b30 col-sm-b60"></div>
                                    <div className="swiper-container swiper-control-bottom" data-breakpoints="1" data-xs-slides="3" data-sm-slides="3" data-md-slides="4" data-lt-slides="4" data-slides-per-view="5" data-center="1" data-click="1">
                                        <div className="swiper-button-prev hidden"></div>
                                        <div className="swiper-button-next hidden"></div>
                                        <div className="swiper-wrapper">
                                            {product.images && product.images.map((image, i) => (
                                                <div className="swiper-slide"  >
                                                    <div className="product-small-preview-entry">
                                                        <img src={storagePath + '/' + image.path} alt="" width={85} height={85} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="simple-article size-3 grey col-xs-b5">SMART WATCHES</div>
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
                                        <Link className="button size-2 style-2 block" onClick={() => addCart({product_id : product.id, qty:quantity})}>
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
                                                <div className="empty-space col-xs-b25"></div>
                                                <div className="h5">Nullam et massa nulla</div>
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
                                                    <div className="h5">Aenean a tincidunt felis</div>
                                                    <div className="empty-space col-xs-b15"></div>
                                                    <div className="simple-article size-2">
                                                        {image.description}
                                                    </div>
                                                    <div className="empty-space col-xs-b30 col-sm-b45"></div>
                                                    <div className="h5">Nulla sed arcu ipsum</div>
                                                    <div className="empty-space col-xs-b15"></div>
                                                    <div className="simple-article size-2">
                                                        Nullam et massa nulla. Quisque nec magna ornare tellus consequat lacinia a quis sem. Vivamus ut posuere nunc. Praesent porttitor vitae augue in semper. Vestibulum non leo et nisi facilisis consequat. Ut volutpat augue faucibus, fermentum turpis convallis, lobortis augue.
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
                                <li>
                                    <Link to={`/${navigation.title}/product-list`}>{navigation.title}</Link>

                                    {navigation.items.length > 0 && <div className="toggle"></div>}
                                    <ul>
                                        {navigation.items && navigation.items.map((item, j) => (
                                            <li>
                                                <Link to={`/${navigation.title}/${item.title}/product-list`}>{item.title}</Link>

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
                            {navigations?.map((navigation)=>(
                                navigation.products.length > 0 &&
                                 <div className="col-sm-6 col-md-3 col-xs-b25">
                                 <div className="h4 col-xs-b25">{navigation.title}</div>
                                 {navigation.products?.map((product)=>(
                                    <>
                                     <div className="col-xs-b10"></div>
                                  <div className="product-shortcode style-4 rounded clearfix">
                                      <Link className="preview" to={"/product/"+product.SKU}><img src={storagePath+"/"+product.image.path} alt="" /></Link>
                                      <div className="description">
                                          <div className="simple-article color size-1 col-xs-b5">{navigation.title}</div>
                                          <h6 className="h6 col-xs-b10"><Link to={"/product/"+product.SKU}>{product.title}</Link></h6>
                                          <div className="simple-article dark">${product.price}</div>
                                      </div>
                                  </div>
                                    </>
                                    
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