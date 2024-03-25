// import "./Header.css";
// import React, { useContext } from "react";
// import "./Header.css";
// import logo from "../../Images/evangadi-logo-home.png";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
// function Header1({ logout }) {
//   const [userData, setUserData] = useContext(UserContext);
//   const navigate = useNavigate();

//   const goToSignIn = (e) => {
//     e.preventDefault();
//     if (userData.user) {
//       logout();
//     }
//     navigate("/login");
//   }
//   return (
//     <div className="header container-fluid">
//       <div className="innerContainer container d-flex justify-content-around ">
//         <Link to='/' className="header__image">
//           <img src={logo} alt="Evangadi logo" />
//         </Link>
//         <button className='ic d-sm-block d-md-none'>
//           ☰
//         </button>
//         <div className="d-flex  innerContainer2 justify-content-between d-none d-md-block">
//           <Link to="/">Home</Link>
//           <Link to="/">How it Works</Link>
//           <button className="btn_header" onClick={goToSignIn}>{userData.user ? "LogOut" : "SIGN IN"}</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header1;
import React, { useContext, useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../context/UserContext';
// import logo from '../Image/logo_1.jpg';

const Header1 = ({ logout }) => {
const [userData, setUserData] = useContext(UserContext);
const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const goToSignIn = (e) => {
    e.preventDefault();
    if (userData.user) {
      logout();
    }
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container ">
        <Link to={'/'} className="navbar-brand">
          {/* <img src={logo} alt="Logo" width="50" /> */}
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                Home
              </Link>
            </li> 
            <li className="nav-item">
              <a href={'/online'} className="nav-link">
               Online Exam
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="practices-exam-dropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Practices Exam
              </a>
              <p className="dropdown-menu" aria-labelledby="practices-exam-dropdown">
                <Link className="dropdown-item"  to={"/web"}>Web Design and Programming</Link>
                <Link className="dropdown-item"  to={"/mobile"}>Mobile Application Development</Link>
                <Link className="dropdown-item" to={"/security"}>Software and information security</Link>
                <Link className="dropdown-item"  to={"/fse"}>Fundamentals of Software Engineering</Link>
                <Link className="dropdown-item" to={"/read"}>Requirement Engineering, Architecture and Design</Link>
                <Link className="dropdown-item" to={"/database"}>Fundamentals of Database</Link>
                <Link className="dropdown-item" to={"/networking"}>Fundamentals of Networking</Link>
                <Link className="dropdown-item" to={"/amh_que"}>Object Oriented Programming</Link>
                <Link className="dropdown-item" to={"/oro_que"}>Fundamental of Data structure and analysis</Link>
                <Link className="dropdown-item" to={"/oro_que"}>Software Project Management</Link>
                <Link className="dropdown-item" to={"/oro_que"}>Software Testing, Verification and Quality
                Assurance</Link>
                <Link className="dropdown-item" to={"/oro_que"}>Operating System and System
                Programming </Link>
                <Link className="dropdown-item"  to={"/oro_que"}>Artificial Intelligence</Link>
                <Link className="dropdown-item" to={"/oro_que"}> Big data Modeling</Link>
                {/* Add more dropdown items as needed */}
              </p>
            </li>
            <li className="nav-item">
              <Link to={'/ans_que'} className="nav-link">
                Ans_Que
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ms-auto">
            <span className="nav-item nav-link">Welcome: {userData.user?.display_name}</span>
            <button className="btn_header" onClick={goToSignIn}>{userData.user ? "LogOut" : "SIGN IN"}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
