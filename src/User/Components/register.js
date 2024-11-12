import axios from "axios";
import { useState } from "react";

const Register = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(null);
  
    const register = async (e) => {
      e.preventDefault();

        // Password confirmation check
    if (password !== confirmPassword) {
        setError('Passwords do not match!');
        return;
      }

      try {
        const response = await axios.post('http://localhost/laptop-backend/api/register', {
          name,
          email,
          password,
          password_confirmation: confirmPassword
        });

        setSuccess('User registered successfully!');
        setError(null);
        setName('');
        setEmail('');
        setPassword('');

      } catch (error) {
        console.log(error);
        
        setError(error.response.data.error);
        setSuccess(null);
      }
    };

    return(
        <div className="popup-content" data-rel="2">
        <div className="layer-close"></div>
        <div className="popup-container size-1">
            <form onSubmit={register}>
                <div className="popup-align">
                    <h3 className="h3 text-center">register</h3>
                    <div className="empty-space col-xs-b30"></div>
                    <input className="simple-input" type="text"  placeholder="Your name" onChange={(e) => setName(e.target.value)} />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="email" placeholder="Your email"  onChange={(e) => setEmail(e.target.value)} />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="password" autoComplete='' placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="password" autoComplete='' placeholder="Repeat password" onChange={(e) => setConfirmPassword(e.target.value)} />
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