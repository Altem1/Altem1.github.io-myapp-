import React, { useCallback, useEffect, useRef, useState } from "react";
import '../css/contentprojects.css';
import projectData from '../data/projects.json';

const AUTOPLAY_MS = 5000;
const RESUME_MS = 8000;
const PLACEHOLDERS = 3;

// Carrusel con scroll-snap: flechas, puntos, deslizar con el dedo y autoplay que se pausa al interactuar
const Carousel = ({ imagenes, nombre }) => {
    const track = useRef(null);
    const [pages, setPages] = useState(1);
    const [current, setCurrent] = useState(0);
    const pausedUntil = useRef(0);

    const step = () => {
        const el = track.current;
        const first = el && el.children[0];
        return first ? first.getBoundingClientRect().width + 18 : 1;
    };

    const measure = useCallback(() => {
        const el = track.current;
        if (!el) return;
        setPages(Math.max(1, Math.round((el.scrollWidth - el.clientWidth) / step()) + 1));
        setCurrent(Math.round(el.scrollLeft / step()));
    }, []);

    const go = (i) => {
        const n = pages;
        track.current.scrollTo({ left: ((i + n) % n) * step() });
    };

    const pause = () => { pausedUntil.current = Date.now() + RESUME_MS; };

    useEffect(() => {
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [measure]);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || pages < 2) return;
        const id = setInterval(() => {
            if (Date.now() < pausedUntil.current) return;
            const el = track.current;
            const i = Math.round(el.scrollLeft / step());
            el.scrollTo({ left: ((i + 1) % pages) * step() });
        }, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [pages]);

    const slides = imagenes.length > 0 ? imagenes : Array(PLACEHOLDERS).fill(null);

    return (
        <div className="carousel" onPointerDown={pause} onMouseEnter={pause} onFocus={pause}>
            <div className="track" ref={track} onScroll={() => requestAnimationFrame(measure)}>
                {slides.map((img, i) => (
                    <div key={i} className={`slide ${img && img.includes("autoplay") ? "wide" : ""}`}>
                        {img ? (
                            <img src={require(`../img/${img}`)} alt={`${nombre} ${i + 1}`} loading="lazy" />
                        ) : (
                            <div className="placeholder">Imagen {i + 1}</div>
                        )}
                    </div>
                ))}
            </div>

            {pages > 1 && (
                <div className="car-controls">
                    <button className="car-btn" onClick={() => { pause(); go(current - 1); }} aria-label="Anterior">‹</button>
                    <div className="dots">
                        {Array.from({ length: pages }, (_, i) => (
                            <button
                                key={i}
                                className={i === current ? "on" : ""}
                                onClick={() => { pause(); go(i); }}
                                aria-label={`Ir a ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button className="car-btn" onClick={() => { pause(); go(current + 1); }} aria-label="Siguiente">›</button>
                </div>
            )}
        </div>
    );
};

const ContentProjects = () => {
    return (
      <section className="wrap">
        <h2 className="title">Mis <span className="grad">proyectos</span></h2>
        <p className="sub">Lo que estoy construyendo ahora mismo.</p>

        <div className="content-projects">
          {projectData.map((item) => (
            <article key={item.id} className="glass project-card">
              <div className="info-project">
                <span className="badge">{item.lenguajes}</span>
                <h3>{item.nombre}</h3>

                <div className="description">
                  {item.descripcion.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {(item.enlace || item.repo) && (
                  <div className="cta">
                    {item.enlace && (
                      <a href={item.enlace} target="_blank" rel="noopener noreferrer" className="btn primary">Sitio</a>
                    )}
                    {item.repo && (
                      <a href={item.repo} target="_blank" rel="noopener noreferrer" className="btn ghost">Repositorio</a>
                    )}
                  </div>
                )}
              </div>

              <Carousel imagenes={item.imagenes || []} nombre={item.nombre} />
            </article>
          ))}
        </div>
      </section>
    );
  };

export default ContentProjects;
