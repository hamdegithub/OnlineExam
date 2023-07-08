import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Axios from '../../../Axios';
import moment from "moment"
import Alert from 'react-bootstrap/Alert';


const B = () => {
const axios =Axios()
    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);
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
    const dltBook = async (id) => {
        console.log(id)
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            getBookData()
            setShow(true)
        } else {
            console.log("error")
        }
    }
console.log(data)
    useEffect(() => {
        getBookData()
    }, [])

    return (
        <>
<div className="container mt-2">
<div class="course-feature">
<div class="row">


                    {
                        data.length > 0 ? data.map((el, i) => {
                            return (
                                <>
                                <div class="col-lg-4 col-md-6 d-flex">
<div class="course-box d-flex aos" data-aos="fade-up">
<div class="product">
                                <div class="course-box d-flex aos" data-aos="fade-up">
<div class="product">
<div class="product-img">
<a href={`http://localhost:5000/${el.pdf}`} target='_black'>
<img style={{width: 340, height: 400 }} src={`http://localhost:5000/${el.image}`}/>
</a>
<div class="price">
<h3>Free</h3>
</div>
</div>
<div class="product-content">
<div class="course-group d-flex">
<div class="course-group-img d-flex">
<div class="course-name">
<h4>{el.title}</h4>
</div>
</div>
<div class="course-share d-flex align-items-center justify-content-center">
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<div class="course-info d-flex align-items-center">
<div class="rating-img d-flex align-items-center">

<p>12+ Lesson</p>
</div>
<div class="course-view d-flex align-items-center">

<p>9hr 30min</p>
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
<a href={`http://localhost:5000/${el.pdf}`} class="btn btn-primary" target='_black'>For Read</a>
</div>
</div>
</div>
</div>
</div>
            </div>
            </div>
                                </>
                            )
                        }) : ""
                    }

                </div>
            </div>
           
            </div>
           
        </>
    )
}

export default B