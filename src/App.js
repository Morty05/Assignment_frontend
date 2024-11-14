import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CarForm from './pages/CarForm';
import CarList from './pages/CarList';
import CarDetail from './pages/CarDetail';
import Logout from './pages/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router> {/* BrowserRouter wraps the entire routing structure */}
      <Routes> {/* Use Routes to define all your routes */}
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        
        {/* Protected Routes */}
        <Route
          path="/cars"
          element={
            <ProtectedRoute>
              <CarList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/car/:id"
          element={
            <ProtectedRoute>
              <CarDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-car"
          element={
            <ProtectedRoute>
              <CarForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
