// import React from "react";
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import Slider from 'react-slider';
import axios from 'axios';
import { DataContext } from '../../Context';


const ProductList = () => {

    const { addCart, quickView } = useContext(DataContext);
    const location = useLocation();
    const { nav, nav_item } = useParams();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [storagePath, setStoragePath] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10; // Number of products per page
    const [priceRange, setPriceRange] = useState([1, 100000]);
    const [activeView, setActiveView] = useState("inline");
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/products?nav=${nav || ""}`);
                setProducts(response.data.products);
                setCategories(response.data.categories);
                setStoragePath(response.data.storagePath);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [location, nav, nav_item, apiUrl]);

    const handlePriceChange = ([min, max]) => {
        setPriceRange([min, max]);
    };

    const [minPrice, maxPrice] = priceRange; // Destructure from priceRange

    const handleToggle = (view) => view !== activeView && setActiveView(view);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleSubCategoryChange = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;

        if (checked) {
            setSelectedSubCategories((prev) => [...prev, value]);
        } else {
            setSelectedSubCategories((prev) => prev.filter((item) => item !== value));
        }
    };

    const filteredProducts = products.filter((product) => {
        const priceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        
         // Ensure types match by converting to a common type (e.g., string for comparison)
    const subCategoryMatch =
        selectedSubCategories.length === 0 ||
        selectedSubCategories.some((subCategory) =>
            product.filters.some((filter) => String(filter.sub_category_id) === String(subCategory))
        );


        return priceInRange && subCategoryMatch;
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const currentPageProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    return (
        <>

            <div className="container">

                <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100"></div>
                <div className="row">
                    <div className="col-md-9 col-md-push-3">

                        <div className="align-inline spacing-1">
                            <div className="h4">{nav}</div>
                        </div>
                        <div className="align-inline spacing-1">
                            <div className="simple-article size-1">SHOWING <b className="grey">{currentPageProducts.length * currentPage}</b> OF <b className="grey">{products.length}</b> RESULTS</div>
                        </div>
                        <a className={`pagination toggle-products-view ${activeView === 'inline' ? 'active' : ''}`} onClick={() => handleToggle('inline')}>
                            <img src="assets/img/icon-14.png" alt="" />
                            <img src="assets/img/icon-15.png" alt="" />
                        </a>
                        <a className={`pagination toggle-products-view ${activeView === 'grid' ? 'active' : ''}`} onClick={() => handleToggle('grid')}>
                            <img src="assets/img/icon-16.png" alt="" />
                            <img src="assets/img/icon-17.png" alt="" />
                        </a>

                        <div className="empty-space col-xs-b25 col-sm-b60"></div>

                        <div className={`products-content ${activeView === 'inline' ? 'view-inline' : ''}`}>
                            <div className="products-wrapper">
                                <div className="row nopadding">
                                    {currentPageProducts?.map((product, i) => (
                                        <div className="col-sm-4" key={i}>
                                            <div className="product-shortcode style-1">
                                                <div className="title">
                                                    <div className="simple-article size-1 color col-xs-b5"><a to={`/${product.navigation_item?.title}/product-list`}>{product.navigation_item?.title}</a></div>
                                                    <div className="h6 animate-to-green"><Link to={`/product/${product.SKU}`}>{product.title}</Link></div>
                                                </div>
                                                <div className="preview">
                                                    <img src={`${storagePath}/${product.image.path}`} style={{width:'200px', height:'200px'}} alt="producImage" />
                                                    <div className="preview-buttons valign-middle">
                                                        <div className="valign-middle-content">
                                                            <Link className="button size-2 style-2" to={`/product/${product.SKU}`}>
                                                                <span className="button-wrapper">
                                                                    <span className="icon"><img src="assets/img/icon-1.png" alt="" /></span>
                                                                    <span className="text">Learn More</span>
                                                                </span>
                                                            </Link>
                                                            <a className="button size-2 style-3" href="javascript:" onClick={() => addCart({ product_id: product.id })}>
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
                                                        <a className="entry open-popup" data-rel="3" onClick={() => quickView(product.SKU)} ><i className="fa fa-eye" aria-hidden="true"></i></a>
                                                        <a className="entry"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                    }


                                </div>
                            </div>
                        </div>
                        <div className="empty-space col-xs-b35 col-sm-b0"></div>
                        <div className="row">
                            <div className="col-sm-3 hidden-xs">
                                <a className="button size-1 style-5" href="javascript:;" onClick={handlePrevPage} disabled={currentPage === 1}>
                                    <span className="button-wrapper">
                                        <span className="icon"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                                        <span className="text">prev page</span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-sm-6 text-center">
                                <div className="pagination-wrapper">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <a
                                            key={page}
                                            className={`pagination ${currentPage === page ? "active" : ""}`}
                                            onClick={() => setCurrentPage(page)}
                                        >
                                            {page}
                                        </a>
                                    ))}

                                </div>
                            </div>
                            <div className="col-sm-3 hidden-xs text-right">
                                <a className="button size-1 style-5" href="javascript:;" onClick={handleNextPage} disabled={currentPage === totalPages}>
                                    <span className="button-wrapper">
                                        <span className="icon"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                        <span className="text">next page</span>
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
                                value={priceRange}
                                min={1}
                                max={100000}
                                step={1}
                                onChange={handlePriceChange}
                                renderTrack={(props) => <div {...props} className="track" />}
                                renderThumb={(props) => <div {...props} className="thumb" />}
                            />

                        </div>

                        <div className="simple-article size-1">
                            PRICE: <b className="grey">$<span className="min-price">{minPrice}</span> - $<span className="max-price">{maxPrice}</span></b>
                        </div>

                        <div className="empty-space col-xs-b25 col-sm-b50"></div>

                        { categories?.map((category, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <div className="empty-space col-xs-b25 col-sm-b50"></div>}

                                <div className="h4 col-xs-b25">{category.title}</div>

                                {  category?.sub_categories?.map((sub_category, j) => (
                                    <React.Fragment key={j}>
                                        {j > 0 && <div className="empty-space col-xs-b10"></div>}

                                        <label className="checkbox-entry">
                                            <input type="checkbox"
                                                value={sub_category.id}
                                                onChange={handleSubCategoryChange}
                                            /><span>{sub_category.title}</span>
                                        </label>
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}



                    </div>
                </div>

            </div>

        </>
    );
}


export default ProductList;