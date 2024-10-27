import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({ user: null, token: null });
  const [loading, setLoading] = useState(true);

  const login = async (username, password) => {

    console.log('estamos aqui en el Auth, username: ' , username );
    console.log('estamos aqui en el Auth, password: ' , password );

    try {

      const response = await fetch('http://localhost:3000/auth/login', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),

      });


      if (response.status === 404) {
        const errorData = await response.json();
        throw new Error("Usuario o contraseña inválido"); // Captura el mensaje de error específico
      }

      if (!response.ok) {
        throw new Error('Usuario o contraseña inválido')
      }

      const data = await response.json();
      const token = data.data; // El token JWT que recibiste

      // Almacena el token en localStorage o sessionStorage
      localStorage.setItem('token', token);
      // Puedes también hacer algo más aquí, como redirigir al usuario
      await fetchUserData(token);

    } catch (error) {

      console.error('Error en el login: ', error)
      throw error;
    }
  };

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('http://localhost:3000/users/details', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Usualmente se pasa así en la cabecera
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener datos del usuario');
      }

      const userData = await response.json();
      setAuth({ user: userData, token }); // Actualiza el estado con el token y los datos del usuario
    } catch (error) {
      console.error('Error al obtener datos del usuario: ', error);
      logout(); // Si falla, haz logout
    } finally {
      setLoading(false)
    }

  };

  const logout = () => {

    localStorage.removeItem('token'); // Elimina el token del localStorage

    setAuth({ user: null, token: null }); // Resetea el estado de autenticación
  };

  // Verificar si hay un token en el almacenamiento local al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token); // Obtener datos del usuario si hay un token
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);