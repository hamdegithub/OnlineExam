import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { UserContext } from '../Contexts/UserContext';

// Importing Image
// import logo from '../Imaiges/logo.png';

const Header = () => {
     const [userData, setUserData] = useContext(UserContext);

     const logout = () => {
       //set global state to undefined will logout the user
       setUserData({
         token: undefined,
         user: undefined,
       });
       //resetting localStorage
       localStorage.setItem("auth-token", "");
     };
    return (
      <div className="header container-fluid">
      <div className="innerContainer container d-flex justify-content-around ">
        <Link to='/' className="header__image">
          {/* <img src={logo} alt="Evangadi logo" /> */}
        </Link>
        <div className="d-flex  innerContainer2 justify-content-between">
          <Link to="/">Home</Link>
          <Link to="/">
          <button className="btn_header" onClick={logout}>{userData.user ? "LogOut" : "SIGN IN"}</button>

          </Link>
        </div>
      </div>
    </div>
    );
}

export default Header