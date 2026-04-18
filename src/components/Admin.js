import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Definimos la URL fuera del componente para que esté disponible en todo el archivo
const API_URL = process.env.REACT_APP_API_URL;

const Admin = () => {
  const navigate = useNavigate();

  // --- 1. PROTECCIÓN DE RUTA ---
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // --- 2. ESTADOS ---
  const [idi, setIdi] = useState('');
  const [nombre, setNombre] = useState('');
  const [urlGit, setUrlGit] = useState('');
  const [urlPag, setUrlPag] = useState('');
  const [lenguajes, setLenguajes] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);

  const enviarProyecto = async (e) => {
    e.preventDefault();

    // --- 3. PREPARACIÓN DE DATOS ---
    const formData = new FormData();
    formData.append('idi', idi);
    formData.append('nombre', nombre);
    formData.append('url_git', urlGit || ""); 
    formData.append('url_pag', urlPag || "");
    formData.append('lenguajes', lenguajes);
    formData.append('descripcion', descripcion);
    formData.append('direc_img', imagen);

    const token = localStorage.getItem('token');

    try {
      // --- 4. EL ENVÍO (Usando la variable de entorno) ---
      const respuesta = await fetch(`${API_URL}/subir`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}` 
        },
        body: formData,
      });

      if (respuesta.ok) {
        alert("¡Proyecto guardado en la Acer!");
        setNombre('');
        setImagen(null);
      } else if (respuesta.status === 401) {
        alert("Tu sesión expiró, loguéate de nuevo.");
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        const errorData = await respuesta.json();
        alert(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No pude conectar con la Acer. ¿Está prendida?");
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', color: 'white', backgroundColor: '#1a1a1a' }}>
      <h2>Vinland: Panel de Control</h2>
      <form onSubmit={enviarProyecto}>
        <p>ID Interno:</p>
        <input type="number" value={idi} onChange={(e) => setIdi(e.target.value)} required />
        
        <p>Nombre:</p>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        
        <p>GitHub URL:</p>
        <input type="text" value={urlGit} onChange={(e) => setUrlGit(e.target.value)} />
        
        <p>Página URL:</p>
        <input type="text" value={urlPag} onChange={(e) => setUrlPag(e.target.value)} />
        
        <p>Lenguajes:</p>
        <input type="text" placeholder="C, Python, React..." value={lenguajes} onChange={(e) => setLenguajes(e.target.value)} required />
        
        <p>Descripción:</p>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        
        <p>Imagen:</p>
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} required />

        <button type="submit" style={{ marginTop: '20px', display: 'block', width: '100%', padding: '10px', cursor: 'pointer' }}>
          Subir a PostgreSQL
        </button>
      </form>
    </div>
  );
};

export default Admin;