import React, { useContext, useEffect, useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import MainSection from '../MainSection/MainSection';

const Signin = ({ showSignIn }) => {
  const [onShow, setOnShow] = React.useState("password");
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [fname, setF] = useState("");
  const [lname, setL] = useState("");
  const [Usern, setUN] = useState("");
  const navigate = useNavigate();
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");

  const handleChange = () => {
    setForm({
      ...form,
      email: email,
      password: pass,
      Username: Usern,
      Firstname: fname,
      Lastname: lname,
    });
  };
  console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const signRes = await axios.post("http://localhost:5000/api/users/", {
        userName: Usern,
        firstName: fname,
        lastName: lname,
        email: email,
        password: pass,
      });
      console.log(signRes);
      //update global state with response from backend(user-info)
      setUserData({
        token: signRes.data.token,
        user: signRes.data.user,
      });
      console.log(userData);

      //set localStorage with the token
      localStorage.setItem("auth-token", signRes.data.token);

      //navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  const HandleIconChange = () => {
    // event listen for Password function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div>'
<div class="main-wrapper log-wrap">
<div class="row">
{/* <div class="col-md-6 login-bg"> */}
{/* <div class="owl-carousel login-slide owl-theme"> */}
<div class="welcome-login">
<MainSection/>
</div>




<div class="col-md-6 login-wrap-bg">

<div class="login-wrapper">
<div class="loginbox">

<h1>Sign up</h1>
<form onSubmit={handleSubmit}>
<input
              type="email"
              placeholder="Email address"
              className="in11 mr-1"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
                handleChange();
              }}
            />
            <div className="FLname d-flex">
            <input
              type="text"
              placeholder="Frist Name"
              className="in11 me-1"
              value={fname}
              onChange={(e) => {
                setF(e.target.value);
                handleChange();
              }}
            />

<input
              type="text"
              placeholder="Last Nmae"
              className="in11 mr-1"
              value={lname}
              onChange={(e) => {
                setL(e.target.value);
                handleChange();
              }}
            />
            </div>

            <input
              type="text"
              placeholder="User Name"
              className="in11 me-1"
              value={Usern}
              onChange={(e) => {
                setUN(e.target.value);
                handleChange();
              }}
            />

            <input
              type="password"
              placeholder="password"
              className="in11 me-1"
              value={pass}
              onChange={(e) => {
                setpass(e.target.value);
                handleChange();
              }}
            />
            <span className="showHides">
              <Icon icon={icon} size={20} onClick={HandleIconChange} />
            </span>
            <button className="btnSign">Agree and Join</button>
          </form>
          <div class="google-bg text-center">
          <p className="mb-0 text-center a33 ">Already have an account? <Link to="/login" >
           SignIn
        </Link></p>
        </div>
</div>
</div>

</div>
</div>
     </div>
     

    </div>
  );
};

export default Signin;