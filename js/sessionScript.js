// Obtener los parámetros de la consulta de la URL
const urlParams = new URLSearchParams(window.location.search);



// Obtener los valores de los parámetros
const username = urlParams.get('username');
const xp = urlParams.get('xp');
const email = urlParams.get('email');
const credits = urlParams.get('credits');
const firstname = urlParams.get('firstname');
const lastname = urlParams.get('lastname');
const pfpUrl = urlParams.get('pfp_url');

console.log(`firstname: ${firstname}\nlastname: ${lastname}\nxp: ${xp}\ncredits: ${credits}\npfp_url: ${pfpUrl}`)

// Obtener el div con la clase "img"
const imgDiv = document.querySelector('.img');

// Establecer la propiedad background-image del div con la URL obtenida del servidor
imgDiv.style.backgroundImage = `url(${pfpUrl})`;

function logout() {
    // Limpiar el almacenamiento local (localStorage)
    localStorage.clear();
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "../html/login.html";
}

// Agregar el evento click al enlace de logout
document.getElementById('logout_link').addEventListener('click', logout);




// Seleccionar el div con la clase "text" dentro del primer div con la clase "content"
const greetingDiv = document.querySelector('.content > .text');

// Cambiar el contenido del div con las variables firstname y lastname
greetingDiv.textContent = `¡Hello, ${firstname} ${lastname}!`;


// Seleccionar los divs de "Tu experiencia" y "Tus créditos"
const xpDiv = document.querySelectorAll('.secundary-content > .text')[1]; // el segundo div dentro de secundary-content
const creditsDiv = document.querySelectorAll('.secundary-content > .text')[3]; // el cuarto div dentro de secundary-content

// Cambiar el contenido de los divs con las variables xp y credits
xpDiv.textContent = `${xp}`;
creditsDiv.textContent = `${credits}`;


document.addEventListener('DOMContentLoaded', function () {
    const idInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const fileInput = document.getElementById('file');
    const imgDiv = document.querySelector('.img');

    // Agregar un event listener para el input de ID
    idInput.addEventListener('input', function () {
        // Verificar si el campo de entrada de ID está vacío
        if (idInput.value.trim() !== '') {
            // Habilitar el botón de enviar si el campo de ID no está vacío
            sendButton.disabled = false;
        } else {
            // Deshabilitar el botón de enviar si el campo de ID está vacío
            sendButton.disabled = true;
        }
    });

    // Agregar un event listener para el botón de enviar
    sendButton.addEventListener('click', function () {
        // Verificar si el campo de ID está vacío
        if (idInput.value.trim() === '') {
            // Si el campo de ID está vacío, no hacer nada
            return;
        }

        // Obtener la imagen seleccionada por el usuario
        const file = fileInput.files[0];
        console.log(file);

        // Verificar si se ha seleccionado un archivo
        if (!file) {
            // Si no se ha seleccionado ningún archivo, no hacer nada
            return;
        }

        // Verificar si el archivo es de tipo 'image/jpeg'
        if (file.type !== 'image/jpeg') {
            // Si el archivo no es de tipo JPEG, mostrar un mensaje de error y salir
            console.error('El archivo no es de tipo JPEG.');
            return;
        } else {
            console.log("Pan con queso");
        }

        // Crear un objeto FormData
        const formData = new FormData();

        // Agregar los parámetros requeridos al objeto FormData
        formData.append('token', 'code37');
        formData.append('id', idInput.value);
        formData.append('image', file);

        // Realizar la solicitud POST al servidor
        fetch('http://monsterballgo.com/api/setpfp.php', {
            method: 'POST',
            body: formData

            
        })
            .then(response => response.json())
            .then(data => {
                // Manejar la respuesta del servidor
                console.log(data);
                if (!data.error) {
                    // Si no hay error, actualizar la URL de la imagen de perfil
                    imgDiv.style.backgroundImage = `url(${data.pfp_url})`;
                } else {
                    // Si hay un error, mostrar el mensaje de error
                    console.error('Error:', data.error);
                }
            })
            .catch(error => {
                // Manejar errores de la solicitud
                console.error('Error en la solicitud:', error);
            });

            console.log(file);
    });
});



// Obtener elementos del DOM
const openModalButton = document.getElementById('changeImageButton');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');

// Función para abrir el modal
function openModal() {
    modal.style.display = 'block';
}

// // Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// // Evento para abrir el modal al hacer clic en el botón
openModalButton.addEventListener('click', openModal);

// // Evento para cerrar el modal al hacer clic en el botón de cerrar
closeButton.addEventListener('click', closeModal);

// // Evento para cerrar el modal si se hace clic fuera del modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});