# Altem Site - Portafolio Personal 🧙‍♂️

¡Qué onda! Este es mi sitio web personal, un espacio que armé para ir documentando mis proyectos de la universidad y mis prácticas como estudiante de Ingeniería en Sistemas Inteligentes.

El objetivo principal es tener un lugar centralizado para mostrar mi evolución escribiendo código, desde cosas de desarrollo web hasta scripts más de bajo nivel, y de paso demostrar un poco de cómo monto mi propia infraestructura.

## ¿Qué proyectos incluye?

Actualmente, el portafolio documenta los siguientes trabajos:

* **Acerca de mí:** Un resumen de mi trayectoria académica y perfil personal.
* **App notas y dibujos:** Aplicación funcional desarrollada con MIT App Inventor.
* **Prácticas en C++:** Repositorio de lógica estructurada que incluye un menú interactivo para un restaurante.
* **Números Primos:** Programa hecho íntegramente en Python para evaluar si un número es primo o no, y generar secuencias aleatorias.
* **Sabores de México:** Sitio web enfocado en la gastronomía mexicana y sus recetas, construido con HTML, CSS, JS y JQuery.

## ¿Cómo está montado? (Infraestructura)

Este sitio no está alojado en un servicio en la nube tradicional (tipo Vercel, AWS o Hostinger). Todo esto está corriendo desde mi propio entorno local sobre Debian.

A grandes rasgos, la arquitectura funciona así:

1. **Servidor Web:** Utilizo Nginx para servir de forma eficiente el frontend y todos los archivos estáticos del sitio. 
2. **Backend:** El mismo Nginx actúa como proxy inverso para gestionar el tráfico dinámico (como la subida de imágenes y el manejo de datos) y redirigirlo hacia una API construida con FastAPI (Python). 
3. **Despliegue a Internet:** Tailscale Funnel.
4. 
