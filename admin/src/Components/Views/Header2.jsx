import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { UserContext } from '../Contexts/UserContext';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./header1.css"
import logo from "../Image/logo_1.jpeg"

const Header1 = () => {
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
        
<header class="header">
<div class="header-fixed">
<nav class="navbar navbar-expand-lg header-nav scroll-sticky add-header-bg">
<div class="container">
<div class="navbar-header">
<a id="mobile_btn" href="javascript:void(0);">
<span class="bar-icon">
<span></span>
<span></span>
<span></span>
</span>
</a>
<Link to={"/"}class="navbar-brand logo">
<img src={logo}  class="img-fluid" alt="Logo"/>
</Link>
<ul class="nav header-navbar-rht">
<li class="nav-item">
<a type="button"className="nav-link header-login mobile_btn  d-md-none d-block" onClick={logout}>{userData.user ? "LogOut" : "SIGN IN"}</a>
</li>
</ul>
</div>
<div class="main-menu-wrapper">
<div class="menu-header">
<a href="index.html" class="menu-logo">
<img src={logo} class="img-fluid" alt="Logo"/>
</a>
<a id="menu_close" class="menu-close" href="javascript:void(0);">
<i class="fas fa-times"></i>
</a>
</div>
<ul class="main-nav">
  <li class="has-submenu active">
  <Link to={"/"}>Home</Link>
  
  </li>
  <li class="has-submenu">
<a >Online Exam <i class="fas fa-seedling"> </i></a>
<ul class="submenu">
<li class="has-submenu">
<li><Link to={"/bio_queadmin"}>Biology</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/chem_queadmin"}>Chemistry</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/maths_queadmin"}>Mathematics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/phy_queadmin"}>Physics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/soc_queadmin"}>Social Sciences</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/civc_queadmin"}>Civics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/eng_queadmin"}>English</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/amh_queadmin"}>Amharic</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/oro_queadmin"}>Afan Oromo</Link></li>
</li>
</ul>
</li>
  <li class="has-submenu">
<a >Past Exam <i class="fas fa-seedling"> </i></a>
<ul class="submenu">
<li class="has-submenu">
<a>Biology</a>
<ul class="submenu">
<li><Link to={"/bioadmin19_que"}>2019</Link></li>
<li><Link to={"/bioadmin20_que"}>2020</Link></li>
<li><Link to={"/bioadmin21_que"}>2021</Link></li>
<li><Link to={"/bioadmin22_que"}>2022</Link></li>
<li><Link to={"/bioadmin23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Chemistry</a>
<ul class="submenu">
<li><Link to={"/chemadmin19_que"}>2019</Link></li>
<li><Link to={"/chemadmin20_que"}>2020</Link></li>
<li><Link to={"/chemadmin21_que"}>2021</Link></li>
<li><Link to={"/chemadmin22_que"}>2022</Link></li>
<li><Link to={"/chemadmin23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Mathematics</a>
<ul class="submenu">
<li><Link to={"/mathsadmin19_que"}>2019</Link></li>
<li><Link to={"/mathsadmin20_que"}>2020</Link></li>
<li><Link to={"/mathsadmin21_que"}>2021</Link></li>
<li><Link to={"/mathsadmin22_que"}>2022</Link></li>
<li><Link to={"/mathsadmin23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Civics</a>
<ul class="submenu">
<li><Link to={"/civadmin19_que"}>2019</Link></li>
<li><Link to={"/civadmin20_que"}>2020</Link></li>
<li><Link to={"/civadmin21_que"}>2021</Link></li>
<li><Link to={"/civadmin22_que"}>2022</Link></li>
<li><Link to={"/civadmin23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Physics</a>
<ul class="submenu">
<li><Link to={"/phyadmin19_que"}>2019</Link></li>
<li><Link to={"/phyadmin20_que"}>2020</Link></li>
<li><Link to={"/phyadmin21_que"}>2021</Link></li>
<li><Link to={"/phyadmin22_que"}>2022</Link></li>
<li><Link to={"/phyadmin23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Social Sciences</a>
<ul class="submenu">
<li><Link to={"/socadmin19_que"}>2019</Link></li>
<li><Link to={"/socadmin20_que"}>2020</Link></li>
<li><Link to={"/socadmin21_que"}>2021</Link></li>
<li><Link to={"/socadmin22_que"}>2022</Link></li>
<li><Link to={"/socadmin23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Afan Oromo</a>
<ul class="submenu">
<li><Link to={"/oroadmin19_que"}>2019</Link></li>
<li><Link to={"/oroadmin20_que"}>2020</Link></li>
<li><Link to={"/oroadmin21_que"}>2021</Link></li>
<li><Link to={"/oroadmin22_que"}>2022</Link></li>
<li><Link to={"/oroadmin23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Amharic</a>
<ul class="submenu">
<li><Link to={"/amhadmin19_que"}>2019</Link></li>
<li><Link to={"/amhadmin20_que"}>2020</Link></li>
<li><Link to={"/amhadmin21_que"}>2021</Link></li>
<li><Link to={"/amhadmin22_que"}>2022</Link></li>
<li><Link to={"/amhadmin23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >English</a>
<ul class="submenu">
<li><Link to={"/engadmin19_que"}>2019</Link></li>
<li><Link to={"/engadmin20_que"}>2020</Link></li>
<li><Link to={"/engadmin21_que"}>2021</Link></li>
<li><Link to={"/engadmin22_que"}>2022</Link></li>
<li><Link to={"/engadmin23_que"}>2023</Link></li>
</ul>
</li>
</ul>
</li>
<li class="has-submenu">
<a > Add Online Exam <i class="fas fa-seedling"> </i></a>
<ul class="submenu">
<li class="has-submenu">
<li><Link to={"/onlinebio"}>Biology</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/onlinechem"}>Chemistry</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/onlinemaths"}>Mathematics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/onlinephy"}>Physics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/onlinesoc"}>Social Sciences</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/onlinecivc"}>Civics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/onlineamh"}>Amharic</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/onlineng"}>English</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/onlineoro"}>Afan Oromo</Link></li>
</li>
</ul>
</li>
  <li class="has-submenu">
  <Link to={'/past_que'}>Add PastQue</Link>
  </li>
  <li class="has-submenu">
  <Link to={'/books'}>Add Books</Link>
  </li>
  <li class="has-submenu ">
  <Link to={'/ans_que'}>Ans_Que</Link>
  </li>
  
  
  
  
  </ul>
</div>
<ul class="nav navbar-header  header-navbar-rht">
<li class="nav-item">
<a className="nav-link header-login d-none d-md-block " onClick={logout}>{userData.user ? "LogOut" : "SIGN IN"}</a>
</li>
</ul>
</div>
</nav>
<div class="sidebar-overlay"></div></div>
</header>

         
  
    );
}

export default Header1

