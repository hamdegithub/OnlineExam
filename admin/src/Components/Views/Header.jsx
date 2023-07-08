import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { UserContext } from '../Contexts/UserContext';

// Importing Image
import logo from '../Image/logo_1.jpeg';

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
    //   <div className="header container-fluid">
    //   <div className="innerContainer container d-flex justify-content-around ">
    //     <Link to='/' className="header__image">
    //       {/* <img src={logo} alt="Evangadi logo" /> */}
    //     </Link>
    //     <nav className="navbar navbar-toggleable-sm navbar-expand-md">
    //     <button
    //         className="navbar-toggler navbar-toggler-right"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target=".navbar-collapse"
    //       >
    //         ☰
    //       </button>
    //     <div className="d-flex navbar-collapse collapse  innerContainer2 justify-content-between d-none d-md-block">
    //       <Link to="/">Home</Link>
    //       <Link to="/">How it Works</Link>
    //       <button className="btn_header" onClick={logout}>{userData.user ? "LogOut" : "SIGN IN"}</button>
    //     </div>
    //     </nav>
    //   </div>
    // </div>
      <div className="header container-fluid">
      <div className="innerContainer container d-flex justify-content-around">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to={"/"}>
            <img src={logo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav text-center nav-justified  nav-fill">
              <li className="nav-item">
                
                  <Link className="nav-link  js-scroll-trigger" to="/about">How it's Works</Link>
    
              </li>
              <li className="nav-item">
                
                  <Link className="nav-link js-scroll-trigger" to="/"><button className="btn_header" onClick={logout}>{userData.user ? "LogOut" : "SIGN IN"}</button></Link>
    
              </li>
             
            </ul>
          </div>

          <a className="" href="/cart/">
            {/* <img src={carts} /> */}
          </a>
        </nav>
      </div>
    </div>
    );
}

export default Header