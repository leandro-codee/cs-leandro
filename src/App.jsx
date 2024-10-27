import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext'; // Asegúrate de que la ruta sea correcta
import Login from './pages/login module/login';
import User from './pages/user/user';
import ProtectedRoute from './routes/protectedRoute';
import Home from './pages/home module/home'; // Asegúrate de crear esta página

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login como Home */}
          <Route path="/protected" element={<ProtectedRoute />} /> {/* Ruta protegida */}
          <Route
            path="/user"
            element={
              <ProtectedRoute element={<User />} /> // Ruta protegida para la página de usuario
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;