import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';


const ProtectedRoute = ({ element }) => {
    const { auth, loading } = useAuth();

    // Muestra un cargador mientras se está verificando la autenticación
    if (loading) {
        return <div>Cargando...</div>; // Puedes usar un componente de carga aquí
    }

    // Verifica si el usuario está autenticado
    if (!auth.token || !auth.user) {
        return <Navigate to="/" />; // Redirige al login si no está autenticado
    }

    // Si está autenticado, renderiza el elemento
    return element;
};

export default ProtectedRoute;