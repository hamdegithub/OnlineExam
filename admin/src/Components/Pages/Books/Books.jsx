import React from 'react'

function Books({b}) {
  return (
    
    <div class="col-lg-4 col-md-6 d-flex">
    <div class="course-box d-flex aos" data-aos="fade-up">
    <div class="product">
                            <div class="course-box d-flex aos" data-aos="fade-up">
    <div class="product">
    <div class="product-img">
    <a href={`http://localhost:5000/${b.pdf}`} target='_black'>
    <img style={{width: 340, height: 400 }} src={`http://localhost:5000/${b.image}`}/>
    </a>
    <div class="price">
    <h3>Free</h3>
    </div>
    </div>
    <div class="product-content">
    <div class="course-group d-flex">
    <div class="course-group-img d-flex">
    <div class="course-name">
    <h4>{b.title}</h4>
    </div>
    </div>
    <div class="course-share d-flex align-items-center justify-content-center">
    <a href="#"><i class="fa-regular fa-heart"></i></a>
    </div>
    </div>
    <div class="course-info d-flex align-items-center">
    <div class="rating-img d-flex align-items-center">
    
    <p>{b.chapter} Chapters</p>
    </div>
    <div class="course-view d-flex align-items-center">
    
    <p>Please practice 2hour/day</p>
    </div>
    </div>
    <div class="rating">
    <i class="fas fa-star filled"></i>
    <i class="fas fa-star filled"></i>
    <i class="fas fa-star filled"></i>
    <i class="fas fa-star filled"></i>
    <i class="fas fa-star"></i>
    <span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
    </div>
    <div class="all-btn all-category d-flex align-items-center">
    <a href={`http://localhost:5000/${b.pdf}`} class="btn btn-primary" target='_black'>For Read</a>
    </div>
    </div>
    </div>
    </div>
    </div>
        </div>
        </div>
  )
}

export default Books