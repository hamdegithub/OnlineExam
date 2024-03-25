import axios from "axios";

const Axios = () => {
  return axios.create({ baseURL: "http://localhost:4000/" });
};

export default Axios;
