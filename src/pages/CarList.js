import React, { useEffect, useState } from 'react';
import { getCars } from '../services/apiService'; // Ensure this function is correctly defined in your apiService

function CarList() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track errors

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getCars(); // Assuming this returns { data: [] } or [] directly
        // Check the response structure
        const data = response.data || response; // If getCars directly returns an array, set it directly
        setCars(data);
        setLoading(false);  // Data has been fetched
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);  // Handle error properly
        setLoading(false);  // Done loading even if there's an error
      }
    };
    fetchCars();
  }, []);  // Empty dependency array means it will run only once when the component mounts

  if (loading) {
    return <h2>Loading...</h2>;  // Show loading text while fetching data
  }

  if (error) {
    return <h2>Error fetching cars: {error}</h2>;  // Show error if the API fails
  }

  return (
    <div>
      <h2>Your Cars</h2>
      {cars.length === 0 ? (
        <h3>No cars available</h3>  // Message if no cars are found
      ) : (
        cars.map((car) => (
          <div key={car._id}>
            <h3>{car.title}</h3>
            <p>{car.description}</p>
          </div>
        ))
      )}

      
    </div>
  );
}

export default CarList;
