import React, { useEffect, useState } from 'react';
import { getCar } from '../services/apiService';
import { useParams } from 'react-router-dom';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const carData = await getCar(id);
      setCar(carData);
    };
    fetchCar();
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div>
      <h2>{car.title}</h2>
      <p>{car.description}</p>
      <ul>
        {car.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarDetail;
