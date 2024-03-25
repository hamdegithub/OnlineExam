import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Axios from "../../../../Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./Edit";
const B = ({ b, onUpdate }) => {
  const axios = Axios();
  const [data, setData] = useState([]);
  const [search, setSearcher] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  async function getBookData() {
    const response = await axios
      .get("/api/books/getBooks", {})
      .then((response) => {
        setData(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const dltBook = async (id) => {
    const res = await axios.delete(`/api/books/deletebooks${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status == 201) {
      console.log("error");
    } else {
      navigate("/");
      showToastMessage();
      onUpdate(b.id);
    }
  };
  useEffect(() => {
    setFilterData(
      data.filter((q) => q.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, data]);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    // Call the onUpdate callback to refetch the updated question data
  };

  useEffect(() => {
    getBookData();
  }, []);
  const showToastMessage = () => {
    toast.success("Successfully Deleted !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div class="col-lg-4 col-md-6 d-flex">
      {isEditing ? (
        <Edit books={b} onUpdate={handleUpdate} />
      ) : (
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
        <Button
                        onClick={() => dltBook(b.id)}
                        className="danger btn btn-primary"
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => handleEdit(b.id)}
                        className="danger btn btn-primary"
                      >
                        Edit
                      </Button>
                      <ToastContainer />
        </div>
        </div>
        </div>
        </div>
        </div>
            </div>
            </div>
      )}
    </div>
  );
};

export default B;
