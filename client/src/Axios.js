import axios from "axios";

const Axios = () => {
  return axios.create({
    baseURL: "http://localhost:5000/", 
  });
};

export default Axios;
