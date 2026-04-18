import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Definimos la URL usando la variable de entorno
const API_URL = process.env.REACT_APP_API_URL;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // FastAPI espera los datos como "form-data"
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      // Usamos el template string con la constante
      const response = await fetch(`${API_URL}/token`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        // Guardamos el sello en la memoria del navegador
        localStorage.setItem('token', data.access_token);
        alert('¡Bienvenido, Altem!');
        navigate('/admin'); // Te manda al formulario de proyectos
      } else {
        alert('Credenciales incorrectas, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error en el login:', error);
      alert('No se pudo conectar con el servidor.');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Vinland Admin Access</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" placeholder="Usuario" 
          onChange={(e) => setUsername(e.target.value)} 
          style={{ display: 'block', margin: '1rem auto' }}
        />
        <input 
          type="password" placeholder="Contraseña" 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ display: 'block', margin: '1rem auto' }}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;