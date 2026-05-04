import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Despertar el backend
fetch("https://eco-backend-ijn9.onrender.com/puntos/admin").catch(() => {});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => console.log('Service Worker registrado:', reg))
      .catch((err) => console.log('Error al registrar SW:', err));
  });
}