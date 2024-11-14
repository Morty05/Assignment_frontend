// import React, { useState } from 'react';
// import { createCar } from '../services/apiService';
// import { useNavigate } from 'react-router-dom';

// function CarForm() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [tags, setTags] = useState([]);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createCar({ title, description, tags });
//       navigate('/cars');  // Navigate to the car list after creation
//     } catch (error) {
//       console.error('Error creating car:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Car</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Tags (comma-separated)"
//           value={tags}
//           onChange={(e) => setTags(e.target.value.split(','))}
//         />
//         <button type="submit">Add Car</button>
//       </form>
//     </div>
//   );
// }

// export default CarForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCar } from '../services/apiService';

function CarForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  // Function to get the userID from the token
  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No authentication token found');
    }
    
    // Decode the JWT token to get the userID (you can use a library like jwt-decode)
    const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the JWT (base64url)
    return decodedToken.userId; // Assuming 'userId' is the field in the decoded JWT
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = getUserIdFromToken();  // Get the userID from the token

    try {
      await createCar({ title, description, tags, userID: userId });  // Pass the userID along with other fields
      navigate('/cars');  // Navigate to the car list after creation
    } catch (error) {
      console.error('Error creating car:', error.message);
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value.split(','))}
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default CarForm;
