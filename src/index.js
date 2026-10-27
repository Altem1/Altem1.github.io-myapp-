import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/head';  // Importa Header
import Footer from './components/footer'; // Importa Footer
import './css/header-footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="page-container">
        <Header /> {/* Ahora está definido */}
        <div className="content">
          <App />

        </div>
        <Footer /> {/* Ahora está definido */}
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();