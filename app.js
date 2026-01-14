const express = require('express');
const app = express();

app.use(express.json());

let tareas = []; // arreglo temporal para almacenar tareas

// Endpoint POST /tareas
app.post('/tareas', (req, res) => {
  const { titulo, descripcion } = req.body;

  // Caso de error: campos faltantes
  if (!titulo || !descripcion) {
    return res.status(400).json({ error: 'Titulo y descripción son obligatorios' });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

module.exports = app;
