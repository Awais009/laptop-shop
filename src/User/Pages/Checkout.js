// import React from "react";
import React, { useContext, useEffect , useRef , useState  } from 'react';
import { Link } from "react-router-dom";
import { DataContext } from '../Context';
const Checkout = () => {
    const { context, } = useContext(DataContext);
    
    return (
        <>
        <div className="container">
            <div className="empty-space col-xs-b15 col-sm-b30"></div>
            <div className="breadcrumbs">
                <a href="#">home</a>
                <a href="#">checkout</a>
            </div>
            <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100"></div>
            <div className="text-center">
                <div className="simple-article size-3 grey uppercase col-xs-b5">checkout</div>
                <div className="h2">check your info</div>
                <div className="title-underline center"><span></span></div>
            </div>
        </div>

        <div className="empty-space col-xs-b35 col-md-b70"></div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-b50 col-md-b0">
                    <h4 className="h4 col-xs-b25">billing details</h4>
                    <select className="SlectBox">
                        <option disabled="disabled" >Choose country</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <div className="empty-space col-xs-b20"></div>
                    <div className="row m10">
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="First name" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="Last name" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                    </div>
                    <input className="simple-input" type="text" value="" placeholder="Company name" />
                    <div className="empty-space col-xs-b20"></div>
                    <input className="simple-input" type="text" value="" placeholder="Street address" />
                    <div className="empty-space col-xs-b20"></div>
                    <div className="row m10">
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="Appartment" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="Town/City" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                    </div>
                    <div className="row m10">
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="State/Country" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="Postcode/ZIP" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                    </div>
                    <div className="row m10">
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="Email" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                        <div className="col-sm-6">
                            <input className="simple-input" type="text" value="" placeholder="Phone" />
                            <div className="empty-space col-xs-b20"></div>
                        </div>
                    </div>
                    <label className="checkbox-entry">
                        <input type="checkbox" checked /><span>Privacy policy agreement</span>
                    </label>
                    <div className="empty-space col-xs-b50"></div>
                    <label className="checkbox-entry checkbox-toggle-title">
                        <input type="checkbox" /><span>ship to different address?</span>
                    </label>
                    <div className="checkbox-toggle-wrapper">
                        <div className="empty-space col-xs-b25"></div>
                        <select className="SlectBox">
                            <option disabled="disabled" >Choose country</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <div className="empty-space col-xs-b20"></div>
                        <div className="row m10">
                            <div className="col-sm-6">
                                <input className="simple-input" type="text" value="" placeholder="First name" />
                                <div className="empty-space col-xs-b20"></div>
                            </div>
                            <div className="col-sm-6">
                                <input className="simple-input" type="text" value="" placeholder="Last name" />
                                <div className="empty-space col-xs-b20"></div>
                            </div>
                        </div>
                        <input className="simple-input" type="text" value="" placeholder="Company name" />
                        <div className="empty-space col-xs-b20"></div>
                        <input className="simple-input" type="text" value="" placeholder="Street address" />
                        <div className="empty-space col-xs-b20"></div>
                        <div className="row m10">
                            <div className="col-sm-6">
                                <input className="simple-input" type="text" value="" placeholder="Appartment" />
                                <div className="empty-space col-xs-b20"></div>
                            </div>
                            <div className="col-sm-6">
                                <input className="simple-input" type="text" value="" placeholder="Town/City" />
                                <div className="empty-space col-xs-b20"></div>
                            </div>
                        </div>
                        <div className="row m10">
                            <div className="col-sm-6">
                                <input className="simple-input" type="text" value="" placeholder="State/Country" />
                                <div className="empty-space col-xs-b20"></div>
                            </div>
                            <div className="col-sm-6">
                                <input className="simple-input" type="text" value="" placeholder="Postcode/ZIP" />
                                <div className="empty-space col-xs-b20"></div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b30 col-sm-b60"></div>
                    <textarea className="simple-input" placeholder="Note about your order"></textarea>
                </div>
                <div className="col-md-6">
                    <h4 className="h4 col-xs-b25">your order</h4>
                    {context?.cart.map((cart, i) => {

                return(
<div className="cart-entry clearfix">
 <Link className="cart-entry-thumbnail" to={`/product/${cart.product.SKU}`}><img src={context.storagePath+"/"+cart.product.image.path} width={85} height={85} alt="" /></Link>
 <div className="cart-entry-description">
     <table>
         <tbody>
             <tr>
                 <td>
                     <div className="h6"><Link to={`/product/${cart.product.SKU}`}>{cart.product.title}</Link></div>
                     <div className="simple-article size-1">QUANTITY: {cart.qty}</div>
                 </td>
                 <td>
                     <div className="simple-article size-3 grey">${cart.product.price}</div>
                     <div className="simple-article size-1">TOTAL: ${cart.qty*cart.product.price}</div>
                 </td>
                 <td>
                     <div className="cart-color" style={{ background: "#eee" }}></div>
                 </td>
             </tr>
         </tbody>
     </table>
 </div>
</div>
        )
    })}
                   


                   

                    <div className="order-details-entry simple-article size-3 grey uppercase">
                        <div className="row">
                            <div className="col-xs-6">
                                cart subtotal
                            </div>
                            <div className="col-xs-6 col-xs-text-right">
                                <div className="color">$1195.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-details-entry simple-article size-3 grey uppercase">
                        <div className="row">
                            <div className="col-xs-6">
                                shipping and handling
                            </div>
                            <div className="col-xs-6 col-xs-text-right">
                                <div className="color">free shipping</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-details-entry simple-article size-3 grey uppercase">
                        <div className="row">
                            <div className="col-xs-6">
                                order total
                            </div>
                            <div className="col-xs-6 col-xs-text-right">
                                <div className="color">$1195.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b50"></div>
                    <h4 className="h4 col-xs-b25">payment method</h4>
                    <select className="SlectBox">
                        <option >PayPal</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <div className="empty-space col-xs-b10"></div>
                    <div className="simple-article size-2">* Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula ociis natoq.</div>
                    <div className="empty-space col-xs-b30"></div>
                    <div className="button block size-2 style-3">
                        <span className="button-wrapper">
                            <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                            <span className="text">place order</span>
                        </span>
                        <input type="submit"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Checkout;