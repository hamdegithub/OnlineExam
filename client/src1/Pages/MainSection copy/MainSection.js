import maths from "../../Image/maths.jpg"
import B from '../Books/B'
import React, { useEffect, useState } from 'react'

import Axios from '../../../Axios';

function MainSection({logo}) {
  const axios =Axios()
  const [data, setData] = useState([]);
  const [search, setSearcher] = useState("");
  const [filterData, setFilterData] = useState([]);
  async function getBookData() {
     const response = await axios.get(
       "/api/books/getBooks", {
     })
     .then((response) => {
 
         setData(response.data?.data);
     })
     .catch((error) => {
         console.log(error);
     });
 }
 
 useEffect(() => {
     setFilterData(
       data.filter((q) =>
         q.title.toLowerCase().includes(search.toLowerCase())
       )
     );
   }, [search, data]);
 useEffect(() => {
     getBookData()
 }, [])
  return (
<div className='main-wrapper '>
<section class="hello d-flex ">
<div class="container">
<div class="row  ">
<div class="col-md-7 mt-">
<div class="home-slide-face aos" data-aos="fade-up">
<div class="home-slide-text pt-0">
<h5> Make Learning Easy</h5>
<h1>Software Engineering Exit Exam Practice </h1>
<p>Own your future learning new skills online</p>
</div>

<div class="trust-user">
<p>We are dedicated to providing quality education that empowers and transforms individuals and communities. Our mission is to promote excellence in learning and ensure equal access to educational opportunities for all.<br/></p>
<div class="trust-rating d-flex align-items-center">

</div>
</div>
</div>
</div>
<div class="col-md-5 d-flex align-items-center">
<div class="girl-slide-img aos aos-init aos-animate" data-aos="fade-up">
<img  src={logo}/>
</div>
</div>
</div>
</div>
</section>
<section class="section student-course">
<div class="container">
<div class="course-widget">
<div class="row justify-content-">
<div class="col-lg-4 col-md-6">
<div class="course-full-width">
<div class="blur-border course-radius align-items-center aos" data-aos="fade-up">
<div class="online-course d-flex align-items-center">
<div class="course-img">
</div>
<div class="course-inner-content">
<h4><span>10</span>K</h4>
<p>Online Practice Exams</p>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 d-flex">
<div class="course-full-width">
<div class="blur-border course-radius aos" data-aos="fade-up">
<div class="online-course d-flex align-items-center">
<div class="course-img">
{/* <img src="assets/img/cources-icon.svg" alt=""/> */}
</div>
<div class="course-inner-content">
<h4><span>20</span>+</h4>
<p>Expert Tutors</p>
</div>
</div>
</div>
</div>
</div>

<div class="col-lg-4 col-md-6 d-flex">
<div class="course-full-width">
<div class="blur-border course-radius aos" data-aos="fade-up">
<div class="online-course d-flex align-items-center">
<div class="course-img">
{/* <img src="assets/img/gratuate-icon.svg" alt=""/> */}
</div>
<div class="course-inner-content">
<h4><span>60</span>K +</h4>
<p>Practice Exam Questions</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="container mt-5">
<h1 className='text-center mt-10'>Course Materials</h1>
<div class="banner-content">
<form class="form  mt-5" action="">
<div class="form-inner">
<div class="input-group">
<i class=" fa-magnifying-glass search-icon"></i>
<input type="email" class="form-control " placeholder="Search Subject, Online eductional Materials, etc" onChange={(e) => {
            setSearcher(e.target.value);
          }}/>
<span class="drop-detail">
<select class="form-select select">
<option>Category</option>
<option>Biology</option>
<option>Civics</option>
<option>English</option>
<option>Social Sciences</option>
<option>Mathematics</option>
<option>Physics</option>
<option>Chemistry</option>
<option>Afan Oromo</option>
</select>
</span>
<button class="btn btn-primary sub-btn d-md-block d-none" type="submit"><i class=""></i></button>
</div>
</div>
</form>
</div>
<div className='row mt-5'>

        {filterData.length === 0 ? (
          <div>No Result Found</div>
        ) : (
             filterData.map((el, i) => {
                    return <B b={el}/>
                }) 
            
        )}
      </div>
      </section>
</div>
  )
}

export default MainSection
