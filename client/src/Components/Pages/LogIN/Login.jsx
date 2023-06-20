import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Axios from "../../../Axios";
import { useNavigate ,Link} from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import MainSection from "../MainSection/MainSection"
import "./Login.css"
function Login({ showSignUp}) {
  const [userData, setUserData] = useContext(UserContext);
  const axios = Axios();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [type, setType] = useState("password");

  const [icon, setIcon] = useState(eyeOff);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const loginRes = await axios.post("/api/users/login", {
        email: form.email,
        password: form.password,
      });

      //update global state with response from backend(user-info)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
        config: {
          headers: { "x-auth-token": loginRes.data.token },
        },
      });

      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("Error :" + err.response.data.msg);
      alert("Error :" + err.response.data.msg);
    }
  };

  const HandleIconChange = () => {
    // event listenforPassworder function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div class="main-wrapper log-wrap">
    <div class="row">
    
    <div class="">
    <MainSection/>
    </div>
    
    <div class="col-lg-6 col-md-12 d-flex login-wrap-bg mt-500">
    
    <div class="login-wrapper">
    <div class="loginbox">
    <div class="w-100">
    <p className="p1">Login to your account</p>
              <p className="p2 text-center">
               Don't have an account?<Link to='/signup' className="a3">Create a new account</Link>
             </p>
          <form onSubmit={handleSubmit}>
               <input className="in1" type="email" name="email" onChange={handleChange } placeholder="Your Email" />
                <input className="in1" type={type} name="password" onChange={handleChange } placeholder="Your Password" />
               <span onClick={HandleIconChange} className="showHide2">
                 <Icon icon={icon} size={20} />
              </span>
                <button className="btn1">Join</button>
                <div class="google-bg text-center">
    <p >New User ? <Link to='/signup' className="a3">Create a new account</Link></p>
    </div>
             </form>
    </div>
    </div>
    
    </div>
    
    </div>
    </div>
    </div>
  );
}

export default Login;
