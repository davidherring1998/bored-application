import axios from "axios";
const API_URL = "/api/users";

// Register a user
const register = async (userData) => {
  // make the request to server
  const response = await axios.post(API_URL, userData);
  // check for response and put it inside of local storage
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout user
const logout = () => {
    localStorage.removeItem("user");
  };

const authService = {
  register,
  logout
};

export default authService;
