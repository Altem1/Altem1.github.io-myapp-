import React from "react";
import Styles from '../css/contentprojects.css';
import projectData from '../data/projects.json';

const ContentProjects = () => {
    return (
      <div className="content-projects">
        {projectData.map((item) => (
          <div key={item.id} className="project-card">
            
            <div className="img-project">
                <img src={require(`../img/${item.img}`)} alt={item.nombre} />
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