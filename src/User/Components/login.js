import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../Context";

const Login = ()=>{
    
    const {context,setContext} = useContext(DataContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(null);

  
    const login = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost/laptop-backend/api/login', {
          email,
          password,
        });

          sessionStorage.setItem('token',response.data.token)
          sessionStorage.setItem('user',JSON.stringify(response.data.user))
            setContext({
                ...context,
                token:response.data.token,
                user:response.data.user
            })

        setSuccess('User login successfully!');
        setError(null);
        setEmail('');
        setPassword('');
        console.log(success)

      } catch (error) {
        console.log(error);
        
        setError(error.response);
        setSuccess(null);
      }
    };
    return(
        <div className="popup-content" data-rel="1">
        <div className="layer-close"></div>
        <div className="popup-container size-1">
            <form onSubmit={login}>
                <div className="popup-align">
                    <h3 className="h3 text-center">Log in</h3>
                    <div className="empty-space col-xs-b30"></div>
                    <input className="simple-input" type="email" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <input className="simple-input" type="password" autoComplete='' value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="empty-space col-xs-b10 col-sm-b20"></div>
                    <div className="row">
                        <div className="col-sm-6 col-xs-b10 col-sm-b0">
                            <div className="empty-space col-sm-b5"></div>
                            <a className="simple-link">Forgot password?</a>
                            <div className="empty-space col-xs-b5"></div>
                            <a className="simple-link open-popup"  data-rel="2"> register now</a>
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