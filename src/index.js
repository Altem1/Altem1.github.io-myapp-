import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/head';
import Footer from './components/footer';
import './css/header-footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="blobs" aria-hidden="true"><span></span><span></span><span></span></div>
      <div className="page-container">
        <Header />
        <main className="content">
          <App />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
