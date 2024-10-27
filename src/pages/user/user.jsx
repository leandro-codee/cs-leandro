import React from 'react';
import { useAuth } from '../../auth/AuthContext'; // Asegúrate de que la ruta sea correcta
import Loading from '../../helpers/loading';

const User = () => {
    const { auth, loading } = useAuth(); // Obtén la información de autenticación

    // Muestra el componente de carga mientras loading es true
    if (loading) {
        return <Loading />;
    }

    // Si no hay token o usuario, muestra el mensaje de no autenticado
    if (!auth.token || !auth.user) {
        console.log('no autenticado dede yo')
        return <p>No estás autenticado.</p>;
    }

    return (
        <div>
            <h2>Página de Usuario</h2>
            {auth.token ? (
                <div>
                    <h1>hola, {auth.user?.data.firstname}</h1>
                </div>
            ) : (
                <p>No estás autenticado.</p>
            )}
        </div>
    );
};

export default User;