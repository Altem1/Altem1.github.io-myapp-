import {useState, useEffect} from "react";
import '../css/contentprojects.css';

const URL_BASE_IMAGENES = "http://100.103.131.122/imagenes/";
const URL_API = "http://100.103.131.122:8000/proyectos";

const ContentProjects = () => {

    const [projectData, setProjectData] = useState([]);
    
    useEffect(() => {
    const obtenerDatos = async () => {
        try {
            const response = await fetch(URL_API);
            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor");
            }
            const data = await response.json();
            setProjectData(data); // Aquí es donde "nace" tu JSON dinámico
        } catch (error) {
            console.error("Fallo al conectar con el Debian:", error);
        }
    };

    obtenerDatos();
}, []); // Se ejecuta solo al cargar la página, []);


    return (
      <div className="content-projects">
        {projectData.map((item) => (
          <div key={item.id} className="project-card">
            
            <div className="img-project">
                <img src={`${URL_BASE_IMAGENES}${item.direc_img}`} alt={item.nombre} />
            </div>

            <div className="info-project">

                <h3>{item.nombre}</h3>
                <p>Tecnologías: {item.lenguajes}</p>
  
                <div className="description">

                    {item.descripcion.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}

                </div>
  
                {item.enlace && (
                    <a href={item.enlace} target="_blank" rel="noopener noreferrer" className="btn-project"> Ver Proyecto </a>
                )}

            </div>

          </div>
        ))}
      </div>
    );
  };

export default ContentProjects;