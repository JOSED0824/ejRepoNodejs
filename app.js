// app.js
document.getElementById('getUsersBtn').addEventListener('click', getUsers);

// Función que hace la solicitud al archivo JSON local
function getUsers() {
    const url = './usuarios.json'; // Archivo JSON local

    // Hacer la solicitud usando Fetch API
    fetch(url)
        .then(response => {
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error al obtener los usuarios');
            }
            // Parsear la respuesta a JSON
            return response.json();
        })
        .then(data => {
            // Mostrar los datos en el contenedor
            displayUsers(data);
        })
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud:', error);
            document.getElementById('usersContainer').innerHTML = `<p>Error al obtener los datos: ${error.message}</p>`;
        });
}

// Función que muestra los usuarios en el DOM
function displayUsers(users) {
    const usersContainer = document.getElementById('usersContainer');
    usersContainer.innerHTML = ''; // Limpiar el contenedor

    users.forEach(user => {
        // Crear los elementos HTML para mostrar cada usuario
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Teléfono:</strong> ${user.phone}</p>
        `;

        // Añadir los elementos al contenedor
        usersContainer.appendChild(userDiv);
    });
}
