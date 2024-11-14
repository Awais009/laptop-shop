// import React from "react";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { DataContext } from '../Context';
import { toast } from 'react-toastify';
import axios from 'axios';
const Checkout = () => {
    const { context, setContext, deleteCart } = useContext(DataContext);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const calculateTotalPrice = (updatedCarts) => {
        return updatedCarts.reduce((sum, cart) => sum + cart.product.price * cart.qty, 0);
    };

    const [formData, setFormData] = useState({
        full_name: "",
        phone_number: "",
        address: "",
        address2: "",
        country: "",
        state: "",
        city: "",
        zip_code: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return toast.error('Processing...', { toastId: "loading" });

    setLoading(true);
    const toastId = toast.loading('Submitting...', { toastId: "login_toast", autoClose: false });
    setErrors([]);

    try {
        const { data } = await axios.post("http://localhost/laptop-backend/api/checkout", formData, {
            headers: { Authorization: `Bearer ${context.token}` },
        });

        toast.update(toastId, { render: data.message, type: 'success', isLoading: false, autoClose: true });
        setContext({ ...context, cart: [] });
    } catch (error) {
        const message = error.response?.data?.message || "Something went wrong. Please try again.";
        toast.update(toastId, { render: `Error: ${message}`, type: 'error', isLoading: false, autoClose: true });
        setErrors(error.response?.data?.errors || []);
    } finally {
        setLoading(false);
    }
};


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
                        <form onSubmit={handleSubmit}>
                            <div className="empty-space col-xs-b20"></div>
                            <div className="row m10">
                                <div className="col-sm-6">
                                    <input
                                        className="simple-input"
                                        type="text"
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        placeholder="Full name"
                                    />
                                    {errors?.full_name ?
                                        <small className='text-danger'>{errors.full_name}</small>
                                        : ''
                                    }
                                    <div className="empty-space col-xs-b20"></div>
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        className="simple-input"
                                        type="text"
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                    />
                                    {errors?.phone_number ?
                                        <small className='text-danger'>{errors.phone_number}</small>
                                        : ''
                                    }
                                    <div className="empty-space col-xs-b20"></div>
                                </div>
                            </div>
                            <input
                                className="simple-input"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address"
                            />
                            {errors?.address ?
                                <small className='text-danger'>{errors.address}</small>
                                : ''
                            }
                            <div className="empty-space col-xs-b20"></div>
                            <input
                                className="simple-input"
                                type="text"
                                name="address2"
                                value={formData.address2}
                                onChange={handleChange}
                                placeholder="Address 2"
                            />
                            {errors?.address2 ?
                                <small className='text-danger'>{errors.address2}</small>
                                : ''
                            }
                            <div className="empty-space col-xs-b20"></div>
                            <div className="row m10">
                                <div className="col-sm-6">
                                    <select
                                        className="form-controll"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    >
                                        <option disabled value="">
                                            Choose country
                                        </option>
                                        <option value="pakistan">Pakistan</option>
                                    </select>
                                    {errors?.country ?
                                        <small className='text-danger'>{errors.country}</small>
                                        : ''
                                    }
                                </div>
                                <div className="col-sm-6">
                                    <select
                                        className="SlectBox"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    >
                                        <option disabled value="">
                                            Choose State
                                        </option>
                                        <option value="sindh">Sindh</option>
                                        <option value="balochistan">Balochistan</option>
                                        <option value="punjab">Punjab</option>
                                        <option value="kpk">KPK</option>
                                    </select>
                                    {errors?.state ?
                                        <small className='text-danger'>{errors.state}</small>
                                        : ''
                                    }
                                </div>
                            </div>
                            <div className="row m10">
                                <div className="col-sm-6">
                                    <input
                                        className="simple-input"
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                    />
                                    {errors?.city ?
                                        <small className='text-danger'>{errors.city}</small>
                                        : ''
                                    }
                                    <div className="empty-space col-xs-b20"></div>
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        className="simple-input"
                                        type="text"
                                        name="zip_code"
                                        value={formData.zip_code}
                                        onChange={handleChange}
                                        placeholder="Postcode/ZIP"
                                    />
                                    {errors?.zip_code ?
                                        <small className='text-danger'>{errors.zip_code}</small>
                                        : ''
                                    }
                                    <div className="empty-space col-xs-b20"></div>
                                </div>
                            </div>

                            <textarea
                                className="simple-input"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Note about your order"
                            ></textarea>
                            {errors?.message ?
                                <small className='text-danger'>{errors.message}</small>
                                : ''
                            }

                        </form>
                    </div>
                    <div className="col-md-6">
                        <h4 className="h4 col-xs-b25">your order</h4>
                        {context?.cart.map((cart, i) => {

                            return (
                                <div className="cart-entry clearfix" key={i}>
                                    <Link className="cart-entry-thumbnail" to={`/product/${cart.product.SKU}`}><img src={context.storagePath + "/" + cart.product.image.path} width={85} height={85} alt="" /></Link>
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
                                                        <div className="simple-article size-1">TOTAL: ${cart.qty * cart.product.price}</div>
                                                    </td>
                                                    <td>
                                                        <div className="button-close" onClick={() => deleteCart(cart.id)}></div>
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
                                    <div className="color">${calculateTotalPrice(context?.cart)}</div>
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
                                    <div className="color">${calculateTotalPrice(context?.cart)}</div>
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
                            <span className="button-wrapper" >
                                <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                <span className="text">place order</span>
                            </span>
                            <input type="submit" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;