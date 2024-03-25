import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Axios from '../../../Axios';
import moment from "moment"
import Alert from 'react-bootstrap/Alert';
import Books from './Books';


const B = ({books}) => {
     const axios =Axios()
     const [data, setData] = useState([]);
     const [search, setSearcher] = useState("");
     const [filterData, setFilterData] = useState([]);
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
        <>
<section className="container mt-5">
    <h1 className='text-center '>Course Materials</h1>
<div className=" ">
<div class="banner-content">
<form class="form" action="">
<div class="form-inner">
<div class="input-group">
<i class=" fa-magnifying-glass search-icon"></i>
<input type="email" class="form-control" placeholder="Search Subject, Online eductional Materials, etc" onChange={(e) => {
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
<div className='row'>
        {filterData.length === 0 ? (
          <div>No Result Found</div>
        ) : (
             filterData.map((el, i) => {
                    return <Books b={el}/>
                }) 
            
        )}
      </div>
      </div>
    </section>  
        </>
    )
}

export default B