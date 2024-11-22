// import React from "react";
import React, {useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { DataContext } from "../Context";

const Home = () => {

  const [navigations, setNavigations] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [storagePath, setStoragePath] = useState('');
  const { context, setContext, addCart, quickView } = useContext(DataContext);

  const apiUrl = process.env.REACT_APP_API_URL; // Or use a config file
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`${apiUrl}/home`);

        
        setBestProducts(data.best_products)
        setBanners(data.banners)
        setNavigations(data.navigations);
        setStoragePath(data.storagePath);
        
        setContext({
          ...context,
          storagePath:data.storagePath
        })
        console.log(data.best_products);

        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  

  return (
    <>
      <div className="slider-wrapper">
        <div className="swiper-button-prev visible-lg"></div>
        <div className="swiper-button-next visible-lg"></div>
        <div className="swiper-container" data-autoplay="3000" data-parallax="1" data-auto-height="0" >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="cell-view page-height">
                      <div className="col-xs-b40 col-sm-b80"></div>
                      <div data-swiper-parallax-x="-600">
                        <div className="simple-article grey size-5">
                          BEST PRICE <span className="color">$199.00</span>
                        </div>
                        <div className="col-xs-b5"></div>
                      </div>
                      <div data-swiper-parallax-x="-500">
                        <h1 className="h1">smartphone x transform</h1>
                        <div className="title-underline left">
                          <span></span>
                        </div>
                      </div>
                      <div data-swiper-parallax-x="-400">
                        <div className="simple-article size-4 grey">
                          In feugiat molestie tortor a malesuada. Etiam a
                          venenatis ipsum. Proin pharetra elit at feugiat
                          commodo vel placerat tincidunt sapien nec
                        </div>
                        <div className="col-xs-b30"></div>
                      </div>
                      <div data-swiper-parallax-x="-300">
                        <div className="buttons-wrapper">
                          <Link className="button size-2 style-2" to="/product">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="assets/img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </Link>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="assets/img/icon-3.png" alt="" />
                              </span>
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
                      <div
                        className="entry full-size swiper-lazy active"
                        data-background="assets/img/product-preview-1.jpg"
                      ></div>
                      <div
                        className="entry full-size swiper-lazy"
                        data-background="assets/img/product-preview-2.jpg"
                      ></div>
                      <div
                        className="entry full-size swiper-lazy"
                        data-background="assets/img/product-preview-3.jpg"
                      ></div>
                    </div>
                    <div
                      className="sidebar valign-middle"
                      data-swiper-parallax-x="-300"
                    >
                      <div className="valign-middle-content">
                        <div className="entry active">
                          <img src="assets/img/product-4.png" alt="" />
                        </div>
                        <div className="entry">
                          <img src="assets/img/product-5.png" alt="" />
                        </div>
                        <div className="entry">
                          <img src="assets/img/product-6.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="empty-space col-xs-b80 col-sm-b0"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-6">
                    <div className="cell-view page-height">
                      <div className="col-xs-b40 col-sm-b80"></div>
                      <div data-swiper-parallax-x="-600">
                        <div className="simple-article grey size-5">
                          BEST PRICE <span className="color">$199.00</span>
                        </div>
                        <div className="col-xs-b5"></div>
                      </div>
                      <div data-swiper-parallax-x="-500">
                        <h1 className="h1">smartphone x transform</h1>
                        <div className="title-underline left">
                          <span></span>
                        </div>
                      </div>
                      <div data-swiper-parallax-x="-400">
                        <div className="simple-article size-4 grey">
                          In feugiat molestie tortor a malesuada. Etiam a
                          venenatis ipsum. Proin pharetra elit at feugiat
                          commodo vel placerat tincidunt sapien nec
                        </div>
                        <div className="col-xs-b30"></div>
                      </div>
                      <div data-swiper-parallax-x="-300">
                        <div className="buttons-wrapper">
                          <Link className="button size-2 style-2" to="/product">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="assets/img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </Link>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="assets/img/icon-3.png" alt="" />
                              </span>
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
                      <div
                        className="entry full-size swiper-lazy active"
                        data-background="assets/img/product-preview-1.jpg"
                      ></div>
                      <div
                        className="entry full-size swiper-lazy"
                        data-background="assets/img/product-preview-2.jpg"
                      ></div>
                      <div
                        className="entry full-size swiper-lazy"
                        data-background="assets/img/product-preview-3.jpg"
                      ></div>
                    </div>
                    <div
                      className="sidebar valign-middle"
                      data-swiper-parallax-x="-300"
                    >
                      <div className="valign-middle-content">
                        <div className="entry active">
                          <img src="assets/img/product-4.png" alt="" />
                        </div>
                        <div className="entry">
                          <img src="assets/img/product-5.png" alt="" />
                        </div>
                        <div className="entry">
                          <img src="assets/img/product-6.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="empty-space col-xs-b80 col-sm-b0"></div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <div className="grey-background">
        <div className="empty-space col-xs-b40 col-sm-b80"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tabs-block">
                <div className="tabulation-menu-wrapper text-center">
                  <div className="tabulation-title simple-input">all</div>
                  <ul className="tabulation-toggle">
                  
                    {navigations ? navigations.map((navigation, i) => (
  <li key={i}>
    <a className={`tab-menu  ${!i ? 'active' : '' }` }>{navigation.title}</a>
  </li>
)) : ''}

                  </ul>
                </div>
                <div className="empty-space col-xs-b30"></div>
                {navigations ? navigations.map((navigation, i) => (
                <div className={`tab-entry ${!i ?  'visible' : ''} `} key={i}>
                  <div className="row nopadding">
                  {navigation.products ? navigation.products.map((product, j) => (
                      <div className="col-sm-3" key={j} >
                        <div className="product-shortcode style-1">
                          <div className="title">
                            <div className="simple-article size-1 color col-xs-b5">
                              <Link to={`product-list/${navigation.title}/${product.navigation_item.title}`}>{product.navigation_item.title}</Link>
                            </div>
                            <div className="h6 animate-to-green">
                              <Link to={`product/${product.SKU}`}>{product.title}</Link>
                            </div>
                            <div className="discount-box">
                              <span>52%</span>
                            </div>
                          </div>
                          <div className="preview">
                            <img src={`${storagePath}/${product.image?.path}`} alt="" />
                            <div className="preview-buttons valign-middle">
                              <div className="valign-middle-content">
                                <Link
                                  className="button size-2 style-2"
                                  to={`/product/${product.SKU}`}
                                >
                                  <span className="button-wrapper">
                                    <span className="icon">
                                      <img src="assets/img/icon-1.png" alt="" />
                                    </span>
                                    <span className="text">Learn More</span>
                                  </span>
                                </Link>
                                <a className="button size-2 style-3" onClick={()=> addCart({product_id: product.id})}>
                                  <span className="button-wrapper">
                                    <span className="icon">
                                      <img src="assets/img/icon-3.png" alt="" />
                                    </span>
                                    <span className="text">Add To Cart</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="price">
                            <div className="simple-article size-4 dark">
                              ${product.price}
                            </div>
                          </div>
                          <div className="description">
                            <div className="simple-article text size-2">
                              {product.description}
                            </div>
                            <div className="icons">
                             
                              <a className="entry open-popup" data-rel="3" onClick={()=> quickView(product.SKU)} >
                                <i className="fa fa-eye" aria-hidden="true"></i>
                              </a>
                              <a className="entry">
                                <i
                                  className="fa fa-heart-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
   )) : ''}
                  </div>
                </div>
                    )) : ''}

               
              </div>

              <div className="empty-space col-xs-b35 col-md-b70"></div>

              <div
                className="swiper-container arrows-align-top"
                data-breakpoints="1"
                data-xs-slides="1"
                data-sm-slides="3"
                data-md-slides="4"
                data-lt-slides="4"
                data-slides-per-view="4"
              >
                <div className="h4 swiper-title">our best categories</div>
                <div className="empty-space col-xs-b20"></div>
                <div className="swiper-button-prev style-1"></div>
                <div className="swiper-button-next style-1"></div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-13.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-17.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-14.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-18.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-15.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-19.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-16.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-20.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-15.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-16.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-13.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
                    <a className="product-shortcode style-2" href="#">
                      <span className="preview">
                        <img src="assets/img/product-14.png" alt="" />
                      </span>
                      <span className="description">
                        <span className="h6 animate-to-green">
                          smart watches
                        </span>
                        <span className="simple-article size-1 animate-to-fulltransparent">
                          137 PRODUCTS
                        </span>
                      </span>
                    </a>
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
                        <li>
                          <a className="tab-menu active">all</a>
                        </li>
                        <li>
                          <a className="tab-menu">featured</a>
                        </li>
                        <li>
                          <a className="tab-menu">on sale</a>
                        </li>
                        <li>
                          <a className="tab-menu">top rated</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="empty-space col-xs-b15 col-sm-b30"></div>
               
<div className="tab-entry visible">
 <div className="row nopadding">
 {
                  bestProducts.featrued?.map((type,index) => (
   <div className="col-sm-4">
     <div className="product-shortcode style-1">
       <div className="title">
         <div className="simple-article size-1 color col-xs-b5">
           <a href="#">SMART PHONES</a>
         </div>
         <div className="h6 animate-to-green">
           <a href="#">Smartphone vibe x2</a>
         </div>
       </div>
       <div className="preview">
         <img src="assets/img/product-25.jpg" alt="" />
         <div className="preview-buttons valign-middle">
           <div className="valign-middle-content">
             <Link
               className="button size-2 style-2"
               to="/product"
             >
               <span className="button-wrapper">
                 <span className="icon">
                   <img src="assets/img/icon-1.png" alt="" />
                 </span>
                 <span className="text">Learn More</span>
               </span>
             </Link>
             <a className="button size-2 style-3" href="#">
               <span className="button-wrapper">
                 <span className="icon">
                   <img src="assets/img/icon-3.png" alt="" />
                 </span>
                 <span className="text">Add To Cart</span>
               </span>
             </a>
           </div>
         </div>
       </div>
       <div className="price">
         <div className="color-selection">
           <div
             className="entry active"
             style={{ color: "#a7f050" }}
           ></div>
           <div
             className="entry"
             style={{ color: "#50e3f0" }}
           ></div>
           <div
             className="entry"
             style={{ color: "#eee" }}
           ></div>
         </div>
         <div className="simple-article size-4 dark">
           $630.00
         </div>
       </div>
       <div className="description">
         <div className="simple-article text size-2">
           Mollis nec consequat at In feugiat mole stie tortor
           a malesuada
         </div>
         <div className="icons">
           <a className="entry">
             <i className="fa fa-check" aria-hidden="true"></i>
           </a>
           <a className="entry open-popup" data-rel="3">
             <i className="fa fa-eye" aria-hidden="true"></i>
           </a>
           <a className="entry">
             <i
               className="fa fa-heart-o"
               aria-hidden="true"
             ></i>
           </a>
         </div>
       </div>
     </div>
   </div>
    ))
 
  }
 </div>
</div>
                
               
                <div className="tab-entry">
                  <div className="row nopadding">
                    <div className="col-sm-4">
                      <div className="product-shortcode style-1">
                        <div className="title">
                          <div className="simple-article size-1 color col-xs-b5">
                            <a href="#">SMART PHONES</a>
                          </div>
                          <div className="h6 animate-to-green">
                            <a href="#">Smartphone vibe x2</a>
                          </div>
                        </div>
                        <div className="preview">
                          <img src="assets/img/product-26.jpg" alt="" />
                          <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                              <Link
                                className="button size-2 style-2"
                                to="/product"
                              >
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                  </span>
                                  <span className="text">Learn More</span>
                                </span>
                              </Link>
                              <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-3.png" alt="" />
                                  </span>
                                  <span className="text">Add To Cart</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="simple-article size-4 dark">
                            $630.00
                          </div>
                        </div>
                        <div className="description">
                          <div className="simple-article text size-2">
                            Mollis nec consequat at In feugiat mole stie tortor
                            a malesuada
                          </div>
                          <div className="icons">
                            <a className="entry">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </a>
                            <a className="entry open-popup" data-rel="3">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                            <a className="entry">
                              <i
                                className="fa fa-heart-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-shortcode style-1">
                        <div className="title">
                          <div className="simple-article size-1 color col-xs-b5">
                            <a href="#">SMART PHONES</a>
                          </div>
                          <div className="h6 animate-to-green">
                            <a href="#">Smartphone vibe x2</a>
                          </div>
                        </div>
                        <div className="preview">
                          <img src="assets/img/product-27.jpg" alt="" />
                          <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                              <Link
                                className="button size-2 style-2"
                                to="/product"
                              >
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                  </span>
                                  <span className="text">Learn More</span>
                                </span>
                              </Link>
                              <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-3.png" alt="" />
                                  </span>
                                  <span className="text">Add To Cart</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="color-selection">
                            <div
                              className="entry active"
                              style={{ color: "#d0c45c" }}
                            ></div>
                            <div
                              className="entry"
                              style={{ color: "#000" }}
                            ></div>
                            <div
                              className="entry"
                              style={{ color: "#eee" }}
                            ></div>
                          </div>
                          <div className="simple-article size-4 dark">
                            $630.00
                          </div>
                        </div>
                        <div className="description">
                          <div className="simple-article text size-2">
                            Mollis nec consequat at In feugiat mole stie tortor
                            a malesuada
                          </div>
                          <div className="icons">
                            <a className="entry">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </a>
                            <a className="entry open-popup" data-rel="3">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                            <a className="entry">
                              <i
                                className="fa fa-heart-o"
                                aria-hidden="true"
                              ></i>
                            </a>
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
                          <div className="simple-article size-1 color col-xs-b5">
                            <a href="#">SMART PHONES</a>
                          </div>
                          <div className="h6 animate-to-green">
                            <a href="#">Smartphone vibe x2</a>
                          </div>
                        </div>
                        <div className="preview">
                          <img src="assets/img/product-25.jpg" alt="" />
                          <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                              <Link
                                className="button size-2 style-2"
                                to="/product"
                              >
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                  </span>
                                  <span className="text">Learn More</span>
                                </span>
                              </Link>
                              <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-3.png" alt="" />
                                  </span>
                                  <span className="text">Add To Cart</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="color-selection">
                            <div
                              className="entry active"
                              style={{ color: "#a7f050" }}
                            ></div>
                            <div
                              className="entry"
                              style={{ color: "#50e3f0" }}
                            ></div>
                            <div
                              className="entry"
                              style={{ color: "#eee" }}
                            ></div>
                          </div>
                          <div className="simple-article size-4 dark">
                            $630.00
                          </div>
                        </div>
                        <div className="description">
                          <div className="simple-article text size-2">
                            Mollis nec consequat at In feugiat mole stie tortor
                            a malesuada
                          </div>
                          <div className="icons">
                            <a className="entry">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </a>
                            <a className="entry open-popup" data-rel="3">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                            <a className="entry">
                              <i
                                className="fa fa-heart-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-shortcode style-1">
                        <div className="title">
                          <div className="simple-article size-1 color col-xs-b5">
                            <a href="#">SMART PHONES</a>
                          </div>
                          <div className="h6 animate-to-green">
                            <a href="#">Smartphone vibe x2</a>
                          </div>
                        </div>
                        <div className="preview">
                          <img src="assets/img/product-26.jpg" alt="" />
                          <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                              <Link
                                className="button size-2 style-2"
                                to="/product"
                              >
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                  </span>
                                  <span className="text">Learn More</span>
                                </span>
                              </Link>
                              <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-3.png" alt="" />
                                  </span>
                                  <span className="text">Add To Cart</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="simple-article size-4 dark">
                            $630.00
                          </div>
                        </div>
                        <div className="description">
                          <div className="simple-article text size-2">
                            Mollis nec consequat at In feugiat mole stie tortor
                            a malesuada
                          </div>
                          <div className="icons">
                            <a className="entry">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </a>
                            <a className="entry open-popup" data-rel="3">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                            <a className="entry">
                              <i
                                className="fa fa-heart-o"
                                aria-hidden="true"
                              ></i>
                            </a>
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
                          <div className="simple-article size-1 color col-xs-b5">
                            <a href="#">SMART PHONES</a>
                          </div>
                          <div className="h6 animate-to-green">
                            <a href="#">Smartphone vibe x2</a>
                          </div>
                        </div>
                        <div className="preview">
                          <img src="assets/img/product-25.jpg" alt="" />
                          <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                              <Link
                                className="button size-2 style-2"
                                to="/product"
                              >
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                  </span>
                                  <span className="text">Learn More</span>
                                </span>
                              </Link>
                              <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-3.png" alt="" />
                                  </span>
                                  <span className="text">Add To Cart</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="color-selection">
                            <div
                              className="entry active"
                              style={{ color: "#a7f050" }}
                            ></div>
                            <div
                              className="entry"
                              style={{ color: "#50e3f0" }}
                            ></div>
                            <div
                              className="entry"
                              style={{ color: "#eee" }}
                            ></div>
                          </div>
                          <div className="simple-article size-4 dark">
                            $630.00
                          </div>
                        </div>
                        <div className="description">
                          <div className="simple-article text size-2">
                            Mollis nec consequat at In feugiat mole stie tortor
                            a malesuada
                          </div>
                          <div className="icons">
                            <a className="entry">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </a>
                            <a className="entry open-popup" data-rel="3">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                            <a className="entry">
                              <i
                                className="fa fa-heart-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-shortcode style-1">
                        <div className="title">
                          <div className="simple-article size-1 color col-xs-b5">
                            <a href="#">SMART PHONES</a>
                          </div>
                          <div className="h6 animate-to-green">
                            <a href="#">Smartphone vibe x2</a>
                          </div>
                        </div>
                        <div className="preview">
                          <img src="assets/img/product-27.jpg" alt="" />
                          <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                              <Link
                                className="button size-2 style-2"
                                to="/product"
                              >
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                  </span>
                                  <span className="text">Learn More</span>
                                </span>
                              </Link>
                              <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-3.png" alt="" />
                                  </span>
                                  <span className="text">Add To Cart</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="color-selection">
                            <div
                              className="entry active"
                              style={{ color: "#d0c45c" }}
                            ></div>
                            <div
                              className="entry"
                              style={{ color: "#000" }}
                            ></div>
                            <div
                              className="entry"
                              style={{ color: "#eee" }}
                            ></div>
                          </div>
                          <div className="simple-article size-4 dark">
                            $630.00
                          </div>
                        </div>
                        <div className="description">
                          <div className="simple-article text size-2">
                            Mollis nec consequat at In feugiat mole stie tortor
                            a malesuada
                          </div>
                          <div className="icons">
                            <a className="entry">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </a>
                            <a className="entry open-popup" data-rel="3">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                            <a className="entry">
                              <i
                                className="fa fa-heart-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-shortcode style-1">
                        <div className="title">
                          <div className="simple-article size-1 color col-xs-b5">
                            <a href="#">SMART PHONES</a>
                          </div>
                          <div className="h6 animate-to-green">
                            <a href="#">Smartphone vibe x2</a>
                          </div>
                        </div>
                        <div className="preview">
                          <img src="assets/img/product-26.jpg" alt="" />
                          <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                              <Link
                                className="button size-2 style-2"
                                to="/product"
                              >
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                  </span>
                                  <span className="text">Learn More</span>
                                </span>
                              </Link>
                              <a className="button size-2 style-3" href="#">
                                <span className="button-wrapper">
                                  <span className="icon">
                                    <img src="assets/img/icon-3.png" alt="" />
                                  </span>
                                  <span className="text">Add To Cart</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="simple-article size-4 dark">
                            $630.00
                          </div>
                        </div>
                        <div className="description">
                          <div className="simple-article text size-2">
                            Mollis nec consequat at In feugiat mole stie tortor
                            a malesuada
                          </div>
                          <div className="icons">
                            <a className="entry">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </a>
                            <a className="entry open-popup" data-rel="3">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                            <a className="entry">
                              <i
                                className="fa fa-heart-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="empty-space col-xs-b35 col-md-b70"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
