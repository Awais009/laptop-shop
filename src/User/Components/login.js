import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../Context";
import $ from "jquery";
import { toast } from "react-toastify";


const Login = () => {

    const { setContext } = useContext(DataContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;


    const login = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
    
        const toastId = toast.loading('Submitting...');
        setErrors([]);
    
        try {
            const { data } = await axios.post(`${apiUrl}/login`, { email, password });
    
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('user', JSON.stringify(data.user));
            setContext((prev) => ({ ...prev, token: data.token, user: data.user }));
    
            toast.update(toastId, { render: "Logged in successfully!", type: 'success', isLoading: false, autoClose: true });
            $('.button-close').trigger('click');
            setEmail('');
            setPassword('');
        } catch (err) {
            const message = err.response?.data?.message || "An error occurred.";
            toast.update(toastId, { render: `Error: ${message}`, type: 'error', isLoading: false, autoClose: true });
            setErrors(err.response?.data?.errors || []);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="popup-content" data-rel="1">
            <div className="layer-close"></div>
            <div className="popup-container size-1">
                <form onSubmit={login}>
                    <div className="popup-align">
                        <h3 className="h3 text-center">Log in</h3>
                        <div className="empty-space col-xs-b30"></div>
                        <input className="simple-input" type="email" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
                        {errors?.email ?
                            <small className='text-danger'>{errors.email}</small>
                            : ''
                        }
                        <div className="empty-space col-xs-b10 col-sm-b20"></div>
                        <input className="simple-input" type="password" autoComplete='' value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                        {errors?.password ?
                            <small className='text-danger'>{errors.password}</small>
                            : ''
                        }
                        <div className="empty-space col-xs-b10 col-sm-b20"></div>
                        <div className="row">
                            <div className="col-sm-6 col-xs-b10 col-sm-b0">
                                <div className="empty-space col-sm-b5"></div>
                                <a className="simple-link">Forgot password?</a>
                                <div className="empty-space col-xs-b5"></div>
                                <a className="simple-link open-popup" data-rel="2"> register now</a>
                            </div>
                            <div className="col-sm-6 text-right">
                                <a className="button size-2 style-3" onClick={login}>
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
export default Login;