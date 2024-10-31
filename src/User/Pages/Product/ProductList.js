// import React from "react";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slider';
import axios from 'axios';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [storagePath, setStoragePath] = useState('');
    const apiUrl = process.env.REACT_APP_API_URL; // Or use a config file

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost/laptop-backend/api/products`);
                setProducts(response.data.products);
                setCategories(response.data.categories);
                setStoragePath(response.data.storagePath);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const addCart = async (item) => {
        try {
            const response = await axios.post(
                `http://localhost/laptop-backend/api/cart/carts`,
                {
                    // Include relevant item details here
                    product_id: item.product_id, // or whatever your API expects
                    qty: item.quantity || 1 // Set a default quantity if not provided
                },
                {
                    headers: {
                        Authorization: `Bearer 3|BW05sBS54RQekpRWwRaljHwymjD5gQzKnvGJYrr230b926e7`,
                    },
                }
            );


        } catch (error) {
            if (error.response) {
                console.error("Error response data:", error.response.data.errors['qty']);
            } else {
                console.error("Error message:", error.message);
            }
        }
    };


    const handleAddCart = (id) => {
        const newItem = {
            product_id: id, // Example ID, replace with actual item ID or details
            qty: 1, // Default quantity
            // Add other necessary item details here
        };

        addCart(newItem);
    };


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
                                <option disabled="disabled"  >Most popular products</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="align-inline spacing-1 filtration-cell-width-2">
                            <select className="SlectBox small">
                                <option disabled="disabled"  >Show 30</option>
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
                                    {products ? products.map((product, i) => (
                                        <div className="col-sm-4" key={product.id}>
                                            <div className="product-shortcode style-1">
                                                <div className="title">
                                                    <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                                                    <div className="h6 animate-to-green"><a href="#">{product.title}</a></div>
                                                </div>
                                                <div className="preview">
                                                    <img src={`${storagePath}/${product.image.path}`} alt="producImage"  />
                                                    <div className="preview-buttons valign-middle">
                                                        <div className="valign-middle-content">
                                                            <Link className="button size-2 style-2" to={`/product/${product.SKU}`}>
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                    <span className="text">Learn More</span>
                                                                </span>
                                                            </Link>
                                                            <a className="button size-2 style-3" href="javascript:" onClick={() => handleAddCart(product.id)}>
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-3.png" alt="" /></span>
                                                                    <span className="text">Add To Cart</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                   
                                                    <div className="simple-article size-4"><span className="color">${product.price}</span>&nbsp;&nbsp;&nbsp;<span className="line-through">$350.00</span></div>
                                                </div>
                                                <div className="description">
                                                    <div className="simple-article text size-2">{product.description}</div>
                                                    <div className="icons">
                                                        <a className="entry"><i className="fa fa-check" aria-hidden="true"></i></a>
                                                        <a className="entry open-popup" data-rel="3"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )) : ''

                                    }


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

                        {categories && categories.map((category, i) => (
    <React.Fragment key={i}>
        {i > 0 && <div className="empty-space col-xs-b25 col-sm-b50"></div>}
        
        <div className="h4 col-xs-b25">{category.title}</div>

        {category.sub_categories && category.sub_categories.map((sub_category, j) => (
            <React.Fragment key={j}>
                {j > 0 && <div className="empty-space col-xs-b10"></div>}
                
                <label className="checkbox-entry">
                    <input type="checkbox" /><span>{sub_category.title}</span>
                </label>
            </React.Fragment>
        ))}
    </React.Fragment>
))}









                        <div className="empty-space col-xs-b25 col-sm-b50"></div>



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