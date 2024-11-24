// import React from "react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { DataContext } from "../Context";

const Home = () => {

  const [navigations, setNavigations] = useState([]);
  const [products, setProducts] = useState([]);
  const [storagePath, setStoragePath] = useState('');
  const { context, setContext, addCart, quickView } = useContext(DataContext);

  const apiUrl = process.env.REACT_APP_API_URL; // Or use a config file

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/home`);


        setProducts(data.products)
        setNavigations(data.navigations);
        setStoragePath(data.storagePath);

        setContext({
          ...context,
          storagePath: data.storagePath
        })
        console.log(data.products);


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
            {products.banner?.map((product,key)=>(
  <div className="swiper-slide" key={key}>
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <div className="cell-view page-height">
          <div className="col-xs-b40 col-sm-b80"></div>
          <div data-swiper-parallax-x="-600">
            <div className="simple-article grey size-5">
              BEST PRICE <span className="color">${product.price}</span>
            </div>
            <div className="col-xs-b5"></div>
          </div>
          <div data-swiper-parallax-x="-500">
            <h1 className="h1">{product.title}</h1>
            <div className="title-underline left">
              <span></span>
            </div>
          </div>
          <div data-swiper-parallax-x="-400">
            <div className="simple-article size-4 grey">
             {product.description}
            </div>
            <div className="col-xs-b30"></div>
          </div>
          <div data-swiper-parallax-x="-300">
            <div className="buttons-wrapper">
              <Link className="button size-2 style-2" to={`product/${product.SKU}`}>
                <span className="button-wrapper">
                  <span className="icon">
                    <img src="assets/img/icon-1.png" alt="" />
                  </span>
                  <span className="text">Learn More</span>
                </span>
              </Link>
              <a className="button size-2 style-3" href="javascript:" onClick={() => addCart({ product_id: product.id })}>
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
          {product?.images?.map((image,image_key) => (
 <div key={image_key}
 className={`entry full-size swiper-lazy ${image_key == 0 ? 'active' : '' } `}
 data-background={storagePath+'/'+image.path}
></div>
          ))}
         

        
          
        </div>
        <div
          className="sidebar valign-middle"
          data-swiper-parallax-x="-300"
        >
          <div className="valign-middle-content">
          {product?.images?.map((image,image_key) => (
            <div key={image_key} className={`entry ${image_key == 0 ? 'active' : ''}`}>
              <img src={storagePath+'/'+image.path} alt="" />
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
    <div className="empty-space col-xs-b80 col-sm-b0"></div>
  </div>
</div>
            ))}
            
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
                        <a className={`tab-menu  ${!i ? 'active' : ''}`}>{navigation.title}</a>
                      </li>
                    )) : ''}

                  </ul>
                </div>
                <div className="empty-space col-xs-b30"></div>
                {navigations ? navigations.map((navigation, i) => (
                  <div className={`tab-entry ${!i ? 'visible' : ''} `} key={i}>
                    <div className="row nopadding">
                      {navigation.products ? navigation.products.map((product, j) => (
                        <div className="col-sm-3" key={j} >
                          <div className="product-shortcode style-1">
                            <div className="title">
                              <div className="simple-article size-1 color col-xs-b5">
                                <Link to={`/${product.navigation_item.title}/product-list`}>{product.navigation_item.title}</Link>
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
                                  <a className="button size-2 style-3" onClick={() => addCart({ product_id: product.id })}>
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

                                <a className="entry open-popup" data-rel="3" onClick={() => quickView(product.SKU)} >
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
                          <a className="tab-menu active">featured</a>
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
                  {products.featured?.map((product,key) => (
                        <div className="col-sm-4" key={product.id}>
                          <div className="product-shortcode style-1">
                            <div className="title">
                              <div className="simple-article size-1 color col-xs-b5">
                                <Link to={`/${product.navigation_item.title}/product-list`}>{product.navigation_item.title}</Link>
                              </div>
                              <div className="h6 animate-to-green">
                              <Link to={"/product/"+product.SKU}>{product.title}</Link>
                              </div>
                            </div>
                            <div className="preview">
                              <img src={context.storagePath+"/"+product.image.path} alt="" />
                              <div className="preview-buttons valign-middle">
                                <div className="valign-middle-content">
                                  <Link
                                    className="button size-2 style-2"
                                    to={`product/${product.SKU}`}
                                  >
                                    <span className="button-wrapper">
                                      <span className="icon">
                                        <img src="assets/img/icon-1.png" alt="" />
                                      </span>
                                      <span className="text">Learn More</span>
                                    </span>
                                  </Link>
                                  <a className="button size-2 style-3" href="javascript:" onClick={() => addCart({ product_id: product.id })}>
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
                                <a className="entry open-popup" data-rel="3" onClick={() => quickView(product.SKU)}>
                                  <i className="fa fa-eye" aria-hidden="true"></i>
                                </a>
                                <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                 
                  </div>
                </div>
                <div className="tab-entry">
                  <div className="row nopadding">
                  {products.top_sale?.map((product,key) => (
                        <div className="col-sm-4" key={product.id}>
                          <div className="product-shortcode style-1">
                            <div className="title">
                              <div className="simple-article size-1 color col-xs-b5">
                                <Link to={`/${product.navigation_item.title}/product-list`}>{product.navigation_item.title}</Link>
                              </div>
                              <div className="h6 animate-to-green">
                                <Link to={"/product/"+product.SKU}>{product.title}</Link>
                              </div>
                            </div>
                            <div className="preview">
                              <img src={context.storagePath+"/"+product.image.path} alt="" />
                              <div className="preview-buttons valign-middle">
                                <div className="valign-middle-content">
                                  <Link
                                    className="button size-2 style-2"
                                    to={`product/${product.SKU}`}
                                  >
                                    <span className="button-wrapper">
                                      <span className="icon">
                                        <img src="assets/img/icon-1.png" alt="" />
                                      </span>
                                      <span className="text">Learn More</span>
                                    </span>
                                  </Link>
                                  <a className="button size-2 style-3" href="javascript:" onClick={() => addCart({ product_id: product.id })}>
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
                                <a className="entry open-popup" data-rel="3" onClick={() => quickView(product.SKU)}>
                                  <i className="fa fa-eye" aria-hidden="true"></i>
                                </a>
                                <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                
                  </div>
                </div>
                <div className="tab-entry">
                  <div className="row nopadding">
                  {products.top_rated?.map((product,key) => (
                        <div className="col-sm-4" key={product.id}>
                          <div className="product-shortcode style-1">
                            <div className="title">
                              <div className="simple-article size-1 color col-xs-b5">
                                <Link to={`${product.navigation_item.title}/product-list`}>{product.navigation_item.title}</Link>
                              </div>
                              <div className="h6 animate-to-green">
                              <Link to={"/product/"+product.SKU}>{product.title}</Link>
                              </div>
                            </div>
                            <div className="preview">
                              <img src={context.storagePath+"/"+product.image.path} alt="" />
                              <div className="preview-buttons valign-middle">
                                <div className="valign-middle-content">
                                  <Link
                                    className="button size-2 style-2"
                                    to={`product/${product.SKU}`}
                                  >
                                    <span className="button-wrapper">
                                      <span className="icon">
                                        <img src="assets/img/icon-1.png" alt="" />
                                      </span>
                                      <span className="text">Learn More</span>
                                    </span>
                                  </Link>
                                  <a className="button size-2 style-3" href="javascript:" onClick={() => addCart({ product_id: product.id })}>
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
                                <a className="entry open-popup" data-rel="3" onClick={() => quickView(product.SKU)}>
                                  <i className="fa fa-eye" aria-hidden="true"></i>
                                </a>
                                <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  
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
