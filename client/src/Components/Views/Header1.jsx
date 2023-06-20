import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { UserContext } from '../Contexts/UserContext';
import "./header1.css"
// Importing Image
// import logo from '../Imaiges/logo.png';

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
        <div className="header container-fluid">
        <div className="innerContainer container d-flex justify-content-around ">
         
          <button className='ic d-sm-block d-md-none'>
            ☰
          </button>
          
          <ul class="main-nav">
  <li class="has-submenu active">
  <Link to={"/"}>Home</Link>
  
  </li>
  <li class="has-submenu">
<a >Online Exam <i class="fas fa-seedling"> </i></a>
<ul class="submenu">
<li class="has-submenu">
<li><Link to={"/bio_que"}>Biology</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/chem_que"}>Chemistry</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/maths_que"}>Mathematics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/phy_que"}>Physics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/soc_que"}>Social Sciences</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/civc_que"}>Civics</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/eng_que"}>English</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/amh_que"}>Amharic</Link></li>
</li>
<li class="has-submenu">
<li><Link to={"/oro_que"}>Afan Oromo</Link></li>
</li>
</ul>
</li>
<li class="has-submenu">
<a >Past Exam <i class="fas fa-seedling"> </i></a>
<ul class="submenu">
<li class="has-submenu">
<a>Biology</a>
<ul class="submenu">
<li><Link to={"/bio19_que"}>2019</Link></li>
<li><Link to={"/bio20_que"}>2020</Link></li>
<li><Link to={"/bio21_que"}>2021</Link></li>
<li><Link to={"/bio22_que"}>2022</Link></li>
<li><Link to={"/bio23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Chemistry</a>
<ul class="submenu">
<li><Link to={"/chem19_que"}>2019</Link></li>
<li><Link to={"/chem20_que"}>2020</Link></li>
<li><Link to={"/chem21_que"}>2021</Link></li>
<li><Link to={"/chem22_que"}>2022</Link></li>
<li><Link to={"/chem23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Mathematics</a>
<ul class="submenu">
<li><Link to={"/maths19_que"}>2019</Link></li>
<li><Link to={"/maths20_que"}>2020</Link></li>
<li><Link to={"/maths21_que"}>2021</Link></li>
<li><Link to={"/maths22_que"}>2022</Link></li>
<li><Link to={"/maths23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Civics</a>
<ul class="submenu">
<li><Link to={"/civ19_que"}>2019</Link></li>
<li><Link to={"/civ20_que"}>2020</Link></li>
<li><Link to={"/civ21_que"}>2021</Link></li>
<li><Link to={"/civ22_que"}>2022</Link></li>
<li><Link to={"/civ23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Physics</a>
<ul class="submenu">
<li><Link to={"/phy19_que"}>2019</Link></li>
<li><Link to={"/phy20_que"}>2020</Link></li>
<li><Link to={"/phy21_que"}>2021</Link></li>
<li><Link to={"/phy22_que"}>2022</Link></li>
<li><Link to={"/phy23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Social Sciences</a>
<ul class="submenu">
<li><Link to={"/soc19_que"}>2019</Link></li>
<li><Link to={"/soc20_que"}>2020</Link></li>
<li><Link to={"/soc21_que"}>2021</Link></li>
<li><Link to={"/soc22_que"}>2022</Link></li>
<li><Link to={"/soc23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >Afan Oromo</a>
<ul class="submenu">
<li><Link to={"/oro19_que"}>2019</Link></li>
<li><Link to={"/oro20_que"}>2020</Link></li>
<li><Link to={"/oro21_que"}>2021</Link></li>
<li><Link to={"/oro22_que"}>2022</Link></li>
<li><Link to={"/oro23_que"}>2023</Link></li>
</ul>
</li>
<li class="has-submenu">
<a >English</a>
<ul class="submenu">
<li><Link to={"/eng19_que"}>2019</Link></li>
<li><Link to={"/eng20_que"}>2020</Link></li>
<li><Link to={"/eng21_que"}>2021</Link></li>
<li><Link to={"/eng22_que"}>2022</Link></li>
<li><Link to={"/eng23_que"}>2023</Link></li>
</ul>
</li>
</ul>
</li>
  <li class="has-submenu ">
  <Link to={'/ans_que'}>Ans_Que</Link>
  </li>
  
  <button className="btn_header " onClick={logout}>{userData.user ? "LogOut" : "SIGN IN"}</button>
  
  
  </ul>
            
          </div>
            <p className='word'>Welcome: {userData.user?.display_name}</p>
          
          </div>
  
    );
}

export default Header1