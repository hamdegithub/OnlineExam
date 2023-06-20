import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Importing Images
// import logo2 from '../Image/';

const Footer = () => {
  return (
    <div>
<div class="footer-top aos" data-aos="fade-up">
<div class="container">
<div class="row">
<div class="col-lg-4 col-md-6">

<div class="footer-widget footer-about">
<div class="footer-logo">
{/* <img style="height: 80px; width: 120px;" src="assets/img/logo/GRADE_8-1-removebg-preview.png" alt="logo"/> */}
</div>
<div class="footer-about-content">
    <p>We are dedicated to providing quality education that empowers and transforms individuals and communities. Our mission is to promote excellence in learning and ensure equal access to educational opportunities for all.<br/></p>

</div>
</div>

</div>
<div class="col-lg-2 col-md-6">

<div class="footer-widget footer-menu">
<h2 class="footer-title">Students Feedback</h2>
<ul>
<li><a href="instructor-profile.html">About</a></li>
<li><a href="login.html">Login</a></li>
<li><a href="register.html">Register</a></li>
<li><a href="instructor-list.html">How it's Work</a></li>

</ul>
</div>

</div>
<div class="col-lg-2 col-md-6">

<div class="footer-widget footer-menu">
<h2 class="footer-title">Social media</h2>
<ul>
<li><a href="student-profile.html">Facebook</a></li>
<li><a href="login.html">Youtube</a></li>
<li><a href="register.html">Telegram</a></li>
<li><a href="students-list.html">Linkedin</a></li>

</ul>
</div>

</div>
<div class="col-lg-4 col-md-6">

<div class="footer-widget footer-contact">
<h2 class="footer-title">Contact</h2>
<div class="news-letter">
<p>Email: example@gmail.com</p>
</div>
<div class="footer-contact-info">
<div class="footer-address">
{/* <img src="assets/img/icon/icon-20.svg" alt="" class="image-fluid"/> */}
<p> Addis Ababa,<br/> Ethiopia </p>
</div>
<p>
{/* <img src="assets/img/icon/icon-19.svg" alt="" class="image-fluid"/> */}
{/* <a href="" class="__cf_email__" data-cfemail="91f5e3f4f0fce2fdfce2d1f4e9f0fce1fdf4bff2fefc">[email&#160;protected]</a> */}
</p>
<p class="mb-0">
{/* <img src="assets/img/icon/icon-21.svg" alt="" class="image-fluid"/> */}
+251912345678
</p>
<p class="mb-0">
{/* <img src="assets/img/icon/icon-21.svg" alt="" class="image-fluid"/> */}
Box: 8000
</p>
</div>
</div>

</div>
</div>
</div>
</div>


<div class="footer-bottom">
<div class="container">

<div class="copyright">
<div class="row">
<div class="col-md-6">
<div class="privacy-policy">
<ul>
<li><a href="term-condition.html">Terms</a></li>
<li><a href="privacy-policy.html">Privacy</a></li>
</ul>
</div>
</div>
<div class="col-md-6">
<div class="copyright-text">
<p class="mb-0">&copy; 2023 HT. All rights reserved.</p>
</div>
</div>
</div>
</div>

</div>
</div>

</div>
  )
}

export default Footer