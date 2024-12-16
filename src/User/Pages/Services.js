// import React from "react";
import React, { useEffect , useRef , useState  } from 'react';
import { Link } from "react-router-dom";
const Services = () => {
    
    return (
        <>
        <div className="block-entry fixed-background" style={{ backgroundImage: 'url(assets/img/background-22.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="cell-view simple-banner-height text-center">
                            <div className="empty-space col-xs-b35 col-sm-b70"></div>
                            <h1 className="h1 light">our services</h1>
                            <div className="title-underline center"><span></span></div>
                            <div className="simple-article light transparent size-4">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                            <div className="empty-space col-xs-b35 col-sm-b70"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row ">
            <div className="col-md-6">
                <div className="block-entry" style={{ backgroundImage: 'url(assets/img/background-23.jpg)' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <div className="cell-view simple-banner-height middle text-center">
                                    <div className="empty-space col-xs-b35 col-sm-b70"></div>
                                    <div className="simple-article size-3 light transparent uppercase col-xs-b5">we offer</div>
                                    <h2 className="h2 light">choose the best</h2>
                                    <div className="title-underline light center"><span></span></div>
                                    <div className="simple-article light transparent size-4">Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus sem</div>
                                    <div className="empty-space col-xs-b35 col-sm-b70"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
                            <div className="cell-view simple-banner-height middle">
                                <div className="empty-space col-xs-b35 col-sm-b70"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="col-xs-text-center col-sm-text-left">
                                                <div className="simple-article size-2 uppercase color col-xs-b5">discount</div>
                                                <h5 className="h5 col-xs-b5">loyality system</h5>
                                                <div className="simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis</div>
                                            </div>
                                            <div className="empty-space col-xs-b30 col-sm-b60"></div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="col-xs-text-center col-sm-text-left">
                                                <div className="simple-article size-2 uppercase color col-xs-b5">24/7</div>
                                                <h5 className="h5 col-xs-b5">customer support</h5>
                                                <div className="simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis</div>
                                            </div>
                                            <div className="empty-space col-xs-b30 col-sm-b60"></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="col-xs-text-center col-sm-text-left">
                                                <div className="simple-article size-2 uppercase color col-xs-b5">delivery system</div>
                                                <h5 className="h5 col-xs-b5">whole world</h5>
                                                <div className="simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis</div>
                                            </div>
                                            <div className="empty-space col-xs-b30 col-sm-b60"></div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="col-xs-text-center col-sm-text-left">
                                                <div className="simple-article size-2 uppercase color col-xs-b5">smart support</div>
                                                <h5 className="h5 col-xs-b5">for every problem</h5>
                                                <div className="simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis</div>
                                            </div>
                                            <div className="empty-space col-xs-b30 col-sm-b60"></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="col-xs-text-center col-sm-text-left">
                                                <div className="simple-article size-2 uppercase color col-xs-b5">quality</div>
                                                <h5 className="h5 col-xs-b5">best materials</h5>
                                                <div className="simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis</div>
                                            </div>
                                            <div className="empty-space col-xs-b30 col-sm-b0"></div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="col-xs-text-center col-sm-text-left">
                                                <div className="simple-article size-2 uppercase color col-xs-b5">professional staf</div>
                                                <h5 className="h5 col-xs-b5">over 5,000 employers</h5>
                                                <div className="simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space col-xs-b35 col-sm-b70"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>
        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="text-center">
                <div className="simple-article size-3 grey uppercase col-xs-b5">our services</div>
                <div className="h2">what we do</div>
                <div className="title-underline center"><span></span></div>
            </div>
        </div>

        <div className="empty-space col-sm-b15 col-md-b50"></div>

        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="icon-description-shortcode style-1">
                        <img className="icon-image" src="assets/img/icon-22.png" alt="" />
                        <div className="title h6">Phasellus rhoncus in nunc</div>
                        <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                    </div>
                    <div className="empty-space col-xs-b40"></div>
                </div>
                <div className="col-sm-4">
                    <div className="icon-description-shortcode style-1">
                        <img className="icon-image" src="assets/img/icon-23.png" alt="" />
                        <div className="title h6">amet mattis molestie nec tortor</div>
                        <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                    </div>
                    <div className="empty-space col-xs-b40"></div>
                </div>
                <div className="col-sm-4">
                    <div className="icon-description-shortcode style-1">
                        <img className="icon-image" src="assets/img/icon-24.png" alt="" />
                        <div className="title h6">molestie nec tortor quis</div>
                        <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                    </div>
                    <div className="empty-space col-xs-b40"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="icon-description-shortcode style-1">
                        <img className="icon" src="assets/img/icon-25.png" alt="" />
                        <div className="title h6">rhoncus in nunc sit</div>
                        <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                    </div>
                    <div className="empty-space col-xs-b40"></div>
                </div>
                <div className="col-sm-4">
                    <div className="icon-description-shortcode style-1">
                        <img className="icon" src="assets/img/icon-26.png" alt="" />
                        <div className="title h6">molestie nec tortor quis</div>
                        <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                    </div>
                    <div className="empty-space col-xs-b40"></div>
                </div>
                <div className="col-sm-4">
                    <div className="icon-description-shortcode style-1">
                        <img className="icon" src="assets/img/icon-27.png" alt="" />
                        <div className="title h6">lorem molestie nec tortor quis</div>
                        <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                    </div>
                    <div className="empty-space col-xs-b40"></div>
                </div>
            </div>
        </div>

        <div className="empty-space col-sm-b15 col-md-b50"></div>
        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="slider-wrapper">
            <div className="swiper-button-prev visible-lg"></div>
            <div className="swiper-button-next visible-lg"></div>
            <div className="swiper-container" data-parallax="1" data-auto-height="1">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="block-entry" style={{ backgroundImage: 'url(assets/img/background-18.jpg)' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="cell-view simple-banner-height big">
                                            <div className="empty-space col-xs-b35 col-sm-b70"></div>
                                            <div data-swiper-parallax-x="-600">
                                                <h2 className="h1 light">choice of the professionals</h2>
                                                <div className="title-underline left light"><span></span></div>
                                            </div>
                                            <div data-swiper-parallax-x="-400">
                                                <div className="simple-article light size-4">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                            </div>
                                            <div className="empty-space col-xs-b70"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-background right hidden-xs">
                                    <img src="assets/img/background-19.png" alt="" data-swiper-parallax-x="-600" />
                                </div>
                            </div>
                        </div>                     
                    </div>
                    <div className="swiper-slide">
                        <div className="block-entry" style={{ backgroundImage: 'url(assets/img/background-18.jpg)' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-6">
                                        <div className="cell-view simple-banner-height big">
                                            <div className="empty-space col-xs-b35 col-sm-b70"></div>
                                            <div data-swiper-parallax-x="-600">
                                                <h2 className="h1 light">choice of the professionals</h2>
                                                <div className="title-underline left light"><span></span></div>
                                            </div>
                                            <div data-swiper-parallax-x="-400">
                                                <div className="simple-article light size-4">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                            </div>
                                            <div className="empty-space col-xs-b70"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-background left hidden-xs">
                                    <img src="assets/img/background-12.png" alt="" data-swiper-parallax-x="-600" />
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
                <div className="swiper-pagination swiper-pagination-white hidden-lg"></div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>
        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="text-center">
                <div className="simple-article size-3 grey uppercase col-xs-b5">our award</div>
                <div className="h2">best customers support</div>
                <div className="title-underline center"><span></span></div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="row vertical-aligned-columns">
                <div className="col-sm-5 col-xs-b30 col-sm-b0">
                    <img className="image-thumbnail" src="assets/img/thumbnail-34.jpg" alt="" />
                </div>
                <div className="col-sm-7">
                    <div className="simple-article size-3">
                        <h4 className="h4">Quisque scelerisque leo nisl</h4>
                        <p>Aenean facilisis, purus ut tristique pulvinar, odio neque commodo ligula, non vestibulum lacus justo vel diam. Aenean ac aliquet tortor, nec gravida urna. Ut nec urna elit. Etiam id scelerisque ante. Cras velit nunc, luctus a volutpat nec, blandit id dolor. Quisque commodo elit nulla, eu semper quam feugiat et. Integer quam velit, suscipit eget consectetur ac, molestie eu diam.</p>
                        <p>Fusce semper rhoncus dignissim. Curabitur dapibus convallis varius. Suspendisse sem urna, ullamcorper eget porttitor ut, sagittis in justo. Vestibulum egestas nulla nec purus porttitor fermentum. Integer mauris mi, viverra eget nibh at, efficitur consectetur erat. Curabitur et imperdiet enim.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>
        </>
    );
}


export default Services;