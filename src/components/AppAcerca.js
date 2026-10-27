import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import AltemF from '../img/Altem.png';
import '../css/AcercaDe.css';

const informacion = [
    {
        id: 1,
        tipo: "Nombre",
        info: "Jose Emilio Antonio Jimenez"
    },{
        id: 2,
        tipo: "Escuela",
        info: "Universidad Autonoma de San Luis Potosi"
    },{
        id: 3,
        tipo: "Facultad",
        info: "Facultad de Ingenieria"
    },{
        id: 4,
        tipo: "Carrera",
        info: "Ingenieria en Sistemas Inteligentes"
    },{
        id: 5,
        tipo: "Semestre",
        info: "Segundo"
    }
];

const lenguajes = [
    {
        id: 1,
        nombre: "C",
        nivel: "Bajo - Medio",
    },{
        id: 2,
        nombre: "C++",
        nivel: "Bajo - Medio"
    },{
        id: 3,
        nombre: "Html",
        nivel: "Medio - Avanzado"
    },{
        id: 4,
        nombre: "CSS",
        nivel: "Medio"
    },{
        id: 5,
        nombre: "JavaScript",
        nivel: "Medio - Avanzado"
    },{
        id: 6,
        nombre: "React",
        nivel: "Bajo"
    }
];

const AppAcerca = () => {
    return (
        <section className="wrap">
            <div className="glass about">
                <div className="foto-about">
                    <img src={AltemF} alt="foto mia" />
                </div>
                <div className="info-about">
                    <h2 className="title">Acerca de <span className="grad">mí...</span></h2>

                    <dl className="datos">
                        {informacion.map((item) => (
                            <div key={item.id}>
                                <dt>{item.tipo}</dt>
                                <dd>{item.info}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <h3 className="title-sm">Tengo conocimientos en:</h3>

            <div className="lenguajes-container">
                {lenguajes.map((lenguaje) => (
                    <div key={lenguaje.id} className="glass card">
                        <div className="ic"><FontAwesomeIcon icon={faCode} /></div>
                        <h3>{lenguaje.nombre}</h3>
                        <p>Nivel: {lenguaje.nivel}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AppAcerca;
