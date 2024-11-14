import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Function to login user
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Failed to login");
  }
};
 
// Function to register a new user
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, data);
    return response.data;
  } catch (error) {
    console.error("Register error:", error);
    throw new Error("Failed to register");
  }
};

// Function to get all cars
export const getCars = async () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error("No authentication token found");
  }

  try {
    const response = await axios.get(`${API_URL}/cars`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Get cars error:", error);
    throw new Error("Failed to get cars");
  }
};

// export const getCars = async () => {
//   const token = localStorage.getItem('token');
//   console.log(token)
//   if (!token) {
//     throw new Error("No authentication token found");
//   }

//   try {
//     const response = await axios.get(`${API_URL}/cars`, {  // Add /api if necessary
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Get cars error:", error);
//     throw new Error("Failed to get cars");
//   }
// };


// Function to create a new car
export const createCar = async (data) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error("No authentication token found");
  }

  try {
    const response = await axios.post(`${API_URL}/cars`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Create car error:", error);
    throw new Error("Failed to create car");
  }
};






// Function to get a specific car by ID
export const getCar = async (id) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error("No authentication token found");
  }

  try {
    const response = await axios.get(`${API_URL}/cars/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Get car error:", error);
    throw new Error("Failed to get car");
  }
};
