function enviardatos() {
    var nombreInput = document.getElementById("nombre").value;
    var edadInput = document.getElementById("edad").value;
    var correoInput = document.getElementById("correo").value;
    
    // Validación básica para asegurar el registro
    if (nombreInput.trim() === "" || edadInput.trim() === "" || correoInput.trim() === "") {
        alert("Please fill out all the fields to register successfully.");
        return;
    }
    
    // Guardamos el nombre del usuario para darle la bienvenida en el deck
    localStorage.setItem("usuarioNombre", nombreInput);
    
    // Redireccionamos a la página de las diapositivas traducidas
    window.location.href = "presentation.html";
}