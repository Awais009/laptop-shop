// import React from "react";
import React, { useEffect , useState  } from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slider';
const ProductList = () => {
    
    const initialMinPrice = 40;
    const initialMaxPrice = 900;
    const [minPrice, setMinPrice] = useState(initialMinPrice);
    const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
    const handleSliderChange = (values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
    };


    const [activeView, setActiveView] = useState('inline');
    const handleToggle = (view) => {
        if (activeView === view) return;
        setActiveView(view);
    };
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

                    <div className="align-inline spacing-1">
                        <div className="h4">Sport gadgets</div>
                    </div>
                    <div className="align-inline spacing-1">
                        <div className="simple-article size-1">SHOWING <b className="grey">15</b> OF <b className="grey">2 358</b> RESULTS</div>
                    </div>
                    <a className={`pagination toggle-products-view ${activeView === 'inline' ? 'active' : ''}`} onClick={() => handleToggle('inline')}>
                        <img src="assets/img/icon-14.png" alt="" />
                        <img src="assets/img/icon-15.png" alt="" />
                    </a>
                    <a className={`pagination toggle-products-view ${activeView === 'grid' ? 'active' : ''}`} onClick={() => handleToggle('grid')}>
                    <img src="assets/img/icon-16.png" alt="" />
                    <img src="assets/img/icon-17.png" alt="" />
                    </a>
                    <div className="align-inline spacing-1 filtration-cell-width-1">
                        <select className="SlectBox small">
                            <option disabled="disabled" selected="selected">Most popular products</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="align-inline spacing-1 filtration-cell-width-2">
                        <select className="SlectBox small">
                            <option disabled="disabled" selected="selected">Show 30</option>
                            <option value="volvo">30</option>
                            <option value="saab">50</option>
                            <option value="mercedes">100</option>
                            <option value="audi">200</option>
                        </select>
                    </div>


                    <div className="empty-space col-xs-b25 col-sm-b60"></div>

                    <div className={`products-content ${activeView === 'inline' ? 'view-inline' : ''}`}>
                        <div className="products-wrapper">
                            <div className="row nopadding">
                                <div className="col-sm-4">
                                    <div className="product-shortcode style-1">
                                        <div className="title">
                                            <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                            <div className="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                                        </div>
                                        <div className="preview">
                                            <img src="assets/img/product-40.jpg" alt="" />
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
                                            <img src="assets/img/product-41.jpg" alt="" />
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
                                            <img src="assets/img/product-42.jpg" alt="" />
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
                                            <img src="assets/img/product-43.jpg" alt="" />
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
                                            <img src="assets/img/product-44.jpg" alt="" />
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
                                            <img src="assets/img/product-45.jpg" alt="" />
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
                                            <img src="assets/img/product-46.jpg" alt="" />
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
                                            <img src="assets/img/product-47.jpg" alt="" />
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
                                            <img src="assets/img/product-48.jpg" alt="" />
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
                    <div className="empty-space col-xs-b35 col-sm-b0"></div>
                    <div className="row">
                        <div className="col-sm-3 hidden-xs">
                            <a className="button size-1 style-5" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                                    <span className="text">prev page</span>
                                </span>
                            </a>
                        </div>
                        <div className="col-sm-6 text-center">
                            <div className="pagination-wrapper">
                                <a className="pagination active">1</a>
                                <a className="pagination">2</a>
                                <a className="pagination">3</a>
                                <a className="pagination">4</a>
                                <span className="pagination">...</span>
                                <a className="pagination">23</a>
                            </div>
                        </div>
                        <div className="col-sm-3 hidden-xs text-right">
                            <a className="button size-1 style-5" href="#">
                                <span className="button-wrapper">
                                    <span className="icon"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                    <span className="text">prev page</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="empty-space col-xs-b35 col-md-b70"></div>
                    <div className="empty-space col-md-b70"></div>
                </div>
                <div className="col-md-3 col-md-pull-9">

                    <div className="h4 col-xs-b25">Price</div>
                    <div id="prices-range">
                        <Slider
                        className="react-slider"
                        value={[minPrice, maxPrice]}
                        min={initialMinPrice}
                        max={initialMaxPrice}
                        step={5}
                        onChange={handleSliderChange}
                        renderTrack={(props, state) => <div {...props} className="track" />}
                        renderThumb={(props) => <div {...props} className="thumb" />}
                        />
                    </div>
                    <div className="simple-article size-1">
                        PRICE: <b className="grey">$<span className="min-price">{minPrice}</span> - $<span className="max-price">{maxPrice}</span></b>
                    </div>

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
                        <div className="entry active" style={{ color: "#50e3f0" }}></div>
                        <div className="entry" style={{ color: "#50e3f0" }}></div>
                        <div className="entry" style={{ color: "#eee" }}></div>
                        <div className="entry" style={{ color: "#4d900c" }}></div>
                        <div className="entry" style={{ color: "#edb82c" }}></div>
                        <div className="entry" style={{ color: "#7d3f99" }}></div>
                        <div className="entry" style={{ color: "#3481c7" }}></div>
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

                    <div className="empty-space col-xs-b25 col-sm-b50"></div>


                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-3 col-xs-b25">
                    <div className="h4 col-xs-b25">Hot Sale</div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-28.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                            <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                            <div className="simple-article dark">$98.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-29.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                            <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                            <div className="simple-article dark">$12.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-30.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
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
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                            <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                            <div className="simple-article dark">$98.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-32.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                            <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                            <div className="simple-article dark">$12.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-33.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
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
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                            <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                            <div className="simple-article dark">$98.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-35.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                            <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                            <div className="simple-article dark">$12.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-36.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
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
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                            <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                            <div className="simple-article dark">$98.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-38.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                            <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                            <div className="simple-article dark">$12.00</div>
                        </div>
                    </div>
                    <div className="col-xs-b10"></div>
                    <div className="product-shortcode style-4 rounded clearfix">
                        <a className="preview" href="#"><img src="assets/img/product-39.jpg" alt="" /></a>
                        <div className="description">
                            <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
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


export default ProductList;