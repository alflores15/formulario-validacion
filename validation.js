// Definimos las variables

const formulario = document.querySelector('form');

const usuarioInput = document.querySelector('#username');

const claveInput = document.querySelector('#contrasenha');


// Indicamos la función del chismoso (addEventListener)
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); //Impide que corra el evento de forma automática

    const usuario = usuarioInput.value;
    const clave = claveInput.value;
    console.log(usuario,clave);

    return alert("Datos ingresados correctamente");
});

