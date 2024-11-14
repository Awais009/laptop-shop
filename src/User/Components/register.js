import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../Context";
import $ from "jquery";
import { toast } from "react-toastify";

const Register = () => {
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const {  setContext } = useContext(DataContext)

    const [formData, setFormData] = useState({ name: "", email: "", password: "", password_confirmation: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const register = async (e) => {
        e.preventDefault();
        if (loading) return;
    
        setLoading(true);
        const toastId = toast.loading('Submitting...');
        setErrors([]);
    
        try {
            const { data } = await axios.post('http://localhost/laptop-backend/api/register', formData);
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('user', JSON.stringify(data.user));
            setContext((prev) => ({ ...prev, token: data.token, user: data.user }));
            $('.button-close').trigger('click');
            toast.update(toastId, { render: "Registration successful!", type: 'success', isLoading: false, autoClose: true });
        } catch (error) {
            const message = error.response?.data?.message || "An error occurred.";
            toast.update(toastId, { render: `Error: ${message}`, type: 'error', isLoading: false, autoClose: true });
            setErrors(error.response?.data?.errors || []);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="popup-content" data-rel="2">
            <div className="layer-close"></div>
            <div className="popup-container size-1">
                <form onSubmit={register}>
                    <div className="popup-align">
                        <h3 className="h3 text-center">register</h3>
                        <div className="empty-space col-xs-b30"></div>
                        <input className="simple-input" type="text" name="name" placeholder="Your name" onChange={handleChange} />
                        {errors?.name ?
                                        <small className='text-danger'>{errors.name}</small>
                                        : ''
                                    }
                        <div className="empty-space col-xs-b10 col-sm-b20"></div>
                        <input className="simple-input" type="email" name="email" placeholder="Your email" onChange={handleChange} />
                        {errors?.email ?
                                        <small className='text-danger'>{errors.email}</small>
                                        : ''
                                    }
                        <div className="empty-space col-xs-b10 col-sm-b20"></div>
                        <input className="simple-input" type="password" name="password" autoComplete='' placeholder="Enter password" onChange={handleChange} />
                        {errors?.password ?
                                        <small className='text-danger'>{errors.password}</small>
                                        : ''
                                    }
                        <div className="empty-space col-xs-b10 col-sm-b20"></div>
                        <input className="simple-input" type="password" name="password_confirmation" autoComplete='' placeholder="Repeat password" onChange={handleChange} />
                        {errors?.password_confirmation ?
                                        <small className='text-danger'>{errors.password_confirmation}</small>
                                        : ''
                                    }
                        <div className="empty-space col-xs-b10 col-sm-b20"></div>
                        <div className="row">
                            <div className="col-sm-7 col-xs-b10 col-sm-b0">
                                <div className="empty-space col-sm-b15"></div>
                                <label className="checkbox-entry">
                                    <input type="checkbox" /><span><a href="#">Privacy policy agreement</a></span>
                                </label>
                            </div>
                            <div className="col-sm-5 text-right">
                                <a className="button size-2 style-3" href="javascript:;" onClick={register}>
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="assets/img/icon-4.png" alt="" /></span>
                                        <span className="text">submit</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </form>

                <div className="button-close"></div>
            </div>
        </div>
    )
}
export default Register;