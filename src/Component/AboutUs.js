// import React from "react";
import React, { useEffect , useRef , useState  } from 'react';
import { Link } from "react-router-dom";
const AboutUs = () => {
    
    return (
        <>
        <div className="block-entry fixed-background" style={{ backgroundImage: 'url(assets/img/background-24.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="cell-view simple-banner-height text-center">
                            <div className="empty-space col-xs-b35 col-sm-b70"></div>
                            <h1 className="h1 light">we are BJ Computer</h1>
                            <div className="title-underline center"><span></span></div>
                            <div className="simple-article light transparent size-4">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                            <div className="empty-space col-xs-b35 col-sm-b70"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>
        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <div className="simple-article size-3 grey uppercase col-xs-b5">about us</div>
                    <div className="h2">we love music</div>
                    <div className="title-underline left"><span></span></div>
                    <div className="simple-article size-4 grey">Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus sem</div>
                </div>
                <div className="col-sm-7">
                    <div className="simple-article size-3">
                        <p>Aenean facilisis, purus ut tristique pulvinar, odio neque commodo ligula, non vestibulum lacus justo vel diam. Aenean ac aliquet tortor, nec gravida urna. Ut nec urna elit. Etiam id scelerisque ante. Cras velit nunc, luctus a volutpat nec, blandit id dolor. Quisque commodo elit nulla, eu semper quam feugiat et. Integer quam velit, suscipit eget consectetur ac, molestie eu diam.</p>
                        <p>Fusce semper rhoncus dignissim. Curabitur dapibus convallis varius. Suspendisse sem urna, ullamcorper eget porttitor ut, sagittis in justo. Vestibulum egestas nulla nec purus porttitor fermentum. Integer mauris mi, viverra eget nibh at, efficitur consectetur erat. Curabitur et imperdiet enim.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="slider-wrapper">
                <div className="swiper-button-prev hidden"></div>
                <div className="swiper-button-next hidden"></div>
                <div className="swiper-container" data-breakpoints="1" data-xs-slides="1" data-sm-slides="2" data-md-slides="2" data-lt-slides="3"  data-slides-per-view="3" data-space="30">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="icon-description-shortcode style-2">
                                <img className="image-icon image-thumbnail rounded-image" src="assets/img/thumbnail-35.jpg" alt="" />
                                <div className="content">
                                    <h6 className="title h6">Phasellus rhoncus in nunc sit</h6>
                                    <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="icon-description-shortcode style-2">
                                <img className="image-icon image-thumbnail rounded-image" src="assets/img/thumbnail-36.jpg" alt="" />
                                <div className="content">
                                    <h6 className="title h6">amet mattis molestie nec tortor quis</h6>
                                    <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="icon-description-shortcode style-2">
                                <img className="image-icon image-thumbnail rounded-image" src="assets/img/thumbnail-37.jpg" alt="" />
                                <div className="content">
                                    <h6 className="title h6">molestie nec tortor quis</h6>
                                    <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="icon-description-shortcode style-2">
                                <img className="image-icon image-thumbnail rounded-image" src="assets/img/thumbnail-35.jpg" alt="" />
                                <div className="content">
                                    <h6 className="title h6">Phasellus rhoncus in nunc sit</h6>
                                    <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="icon-description-shortcode style-2">
                                <img className="image-icon image-thumbnail rounded-image" src="assets/img/thumbnail-36.jpg" alt="" />
                                <div className="content">
                                    <h6 className="title h6">amet mattis molestie nec tortor quis</h6>
                                    <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="icon-description-shortcode style-2">
                                <img className="image-icon image-thumbnail rounded-image" src="assets/img/thumbnail-37.jpg" alt="" />
                                <div className="content">
                                    <h6 className="title h6">molestie nec tortor quis</h6>
                                    <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination relative-pagination"></div>
                </div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>
        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="text-center">
                <div className="simple-article size-3 grey uppercase col-xs-b5">our team</div>
                <div className="h2">meet with professionals</div>
                <div className="title-underline center"><span></span></div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="slider-wrapper our-team-slider">
                <div className="swiper-button-prev hidden-xs hidden-sm"></div>
                <div className="swiper-button-next hidden-xs hidden-sm"></div>
                <div className="swiper-container" data-breakpoints="1" data-xs-slides="1" data-sm-slides="2" data-md-slides="3" data-lt-slides="4"  data-slides-per-view="4">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="product-shortcode style-9">
                                <div className="preview">
                                    <img src="assets/img/thumbnail-40.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <div className="simple-article size-1 uppercase color col-xs-b5">co-founder</div>
                                        <div className="h6">monica rajan</div>
                                    </div>
                                    <div className="description">
                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                    </div>
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
                        <div className="swiper-slide">
                            <div className="product-shortcode style-9">
                                <div className="preview">
                                    <img src="assets/img/thumbnail-41.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <div className="simple-article size-1 uppercase color col-xs-b5">marketing director</div>
                                        <div className="h6">ella fidger</div>
                                    </div>
                                    <div className="description">
                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                    </div>
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
                        <div className="swiper-slide">
                            <div className="product-shortcode style-9">
                                <div className="preview">
                                    <img src="assets/img/thumbnail-42.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <div className="simple-article size-1 uppercase color col-xs-b5">tech director</div>
                                        <div className="h6">chris somer</div>
                                    </div>
                                    <div className="description">
                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                    </div>
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
                        <div className="swiper-slide">
                            <div className="product-shortcode style-9">
                                <div className="preview">
                                    <img src="assets/img/thumbnail-43.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <div className="simple-article size-1 uppercase color col-xs-b5">co-founder</div>
                                        <div className="h6">monica rajan</div>
                                    </div>
                                    <div className="description">
                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                    </div>
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
                        <div className="swiper-slide">
                            <div className="product-shortcode style-9">
                                <div className="preview">
                                    <img src="assets/img/thumbnail-40.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <div className="simple-article size-1 uppercase color col-xs-b5">co-founder</div>
                                        <div className="h6">monica rajan</div>
                                    </div>
                                    <div className="description">
                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                    </div>
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
                        <div className="swiper-slide">
                            <div className="product-shortcode style-9">
                                <div className="preview">
                                    <img src="assets/img/thumbnail-41.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <div className="simple-article size-1 uppercase color col-xs-b5">marketing director</div>
                                        <div className="h6">ella fidger</div>
                                    </div>
                                    <div className="description">
                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                    </div>
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
                        <div className="swiper-slide">
                            <div className="product-shortcode style-9">
                                <div className="preview">
                                    <img src="assets/img/thumbnail-42.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <div className="simple-article size-1 uppercase color col-xs-b5">tech director</div>
                                        <div className="h6">chris somer</div>
                                    </div>
                                    <div className="description">
                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                    </div>
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
                        <div className="swiper-slide">
                            <div className="product-shortcode style-9">
                                <div className="preview">
                                    <img src="assets/img/thumbnail-43.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <div className="simple-article size-1 uppercase color col-xs-b5">co-founder</div>
                                        <div className="h6">monica rajan</div>
                                    </div>
                                    <div className="description">
                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                    </div>
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
                    <div className="swiper-pagination relative-pagination visible-xs visible-sm"></div>
                </div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>
        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="text-center">
                <div className="simple-article size-3 grey uppercase col-xs-b5">our brands</div>
                <div className="h2">best of the best</div>
                <div className="title-underline center"><span></span></div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-1.jpg" alt="" />
                <img src="assets/img/client-logo-1.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-2.jpg" alt="" />
                <img src="assets/img/client-logo-2.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-3.jpg" alt="" />
                <img src="assets/img/client-logo-3.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-4.jpg" alt="" />
                <img src="assets/img/client-logo-4.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-5.jpg" alt="" />
                <img src="assets/img/client-logo-5.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-6.jpg" alt="" />
                <img src="assets/img/client-logo-6.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-7.jpg" alt="" />
                <img src="assets/img/client-logo-7.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-8.jpg" alt="" />
                <img src="assets/img/client-logo-8.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-9.jpg" alt="" />
                <img src="assets/img/client-logo-9.jpg" alt="" />
            </a>
            <a className="client-logo-entry">
                <img src="assets/img/client-logo-10.jpg" alt="" />
                <img src="assets/img/client-logo-10.jpg" alt="" />
            </a>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>
        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-6">
                    <div className="cell-view simple-banner-height big">
                        <div className="empty-space col-sm-b35"></div>
                        <div className="simple-article size-3 grey uppercase col-xs-b5">real sound</div>
                        <div className="h2">feel perfect beat</div>
                        <div className="title-underline left"><span></span></div>
                        <div className="simple-article size-4 grey">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                        <div className="empty-space col-xs-b30 col-sm-b70"></div>
                        <div className="icon-description-shortcode style-3">
                            <div className="image-icon">
                                <img className="image-thumbnail rounded-image" src="assets/img/thumbnail-38.jpg" alt="" />
                            </div>
                            <div className="content">
                                <div className="cell-view">
                                    <h6 className="title h6">Phasellus rhoncus in nunc sit</h6>
                                    <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                                </div>
                            </div>
                        </div>
                        <div className="empty-space col-xs-b30"></div>
                        <div className="icon-description-shortcode style-3">
                            <div className="image-icon">
                                <img className="image-thumbnail rounded-image" src="assets/img/thumbnail-39.jpg" alt="" />
                            </div>
                            <div className="content">
                                <div className="cell-view">
                                    <h6 className="title h6">Phasellus rhoncus in nunc sit</h6>
                                    <div className="description simple-article size-2">Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</div>
                                </div>
                            </div>
                        </div>
                        <div className="empty-space col-xs-b35"></div>
                    </div>
                </div>
            </div>
            <div className="row-background left hidden-xs hidden-sm">
                <img src="assets/img/background-25.jpg" alt="" />
            </div>
        </div>
        </>
    );
}

export default AboutUs;