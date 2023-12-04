const express = require('express');
const app = express();
const port = 3000; // El puerto en el que se ejecutará el servidor

// Configurar el middleware para analizar JSON y URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas para agregar, editar y eliminar gato
app.post('/agregar-gato', (req, res) => {
    // Procesa la solicitud para agregar un gato a la base de datos
    // Debes implementar la lógica para guardar el perro en la base de datos aquí
    res.send('gato agregado con éxito');
});

// Otras rutas para editar y eliminar perros

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
