import axios from "axios";

console.log(process.env);

//SERVER BACKEND
const serverUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_URL
    : "http://localhost:5000/api";

// "https://ih-finalproject.herokuapp.com/api"

const createHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

const actions = {
    getEquipment: async () => {
        return axios.get(`${serverUrl}/getEquipment`);
      },
    
  };

export default actions;