//FUNCION DESCARGAR CV
function descargarCV() {
    const link = document.createElement('a');
    link.href = "./cv/JulianCosta.pdf";  
    link.download = 'Julián Costa - Programador - CV Español.pdf';  
    link.setAttribute("target", '_blank');
    link.click();
}

// FUNCION ENVIAR MENSAJE
function sendMessage() {
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const telefono = document.querySelector('input[placeholder="Teléfono"]').value;
    const correo = document.querySelector('input[placeholder="Correo electrónico"]').value;
    const asunto = document.querySelector('input[placeholder="Asunto"]').value;
    const mensaje = document.querySelector('textarea[placeholder="Mensaje"]').value;

    // Verifica si todos los campos tienen valor
    if (!nombre || !telefono || !correo || !asunto || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar el mensaje.");
        return;
    }

    const texto = `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;
    const mensajeCodificado = encodeURIComponent(texto);
    const whatsappURL = `https://wa.me/5491151019189?text=${mensajeCodificado}`;

    // Abrir la URL en una nueva ventana
    window.open(whatsappURL, '_blank');

    // Limpiar los valores
    document.querySelector('input[placeholder="Nombre"]').value = '';
    document.querySelector('input[placeholder="Teléfono"]').value = '';
    document.querySelector('input[placeholder="Correo electrónico"]').value = '';
    document.querySelector('input[placeholder="Asunto"]').value = '';
    document.querySelector('textarea[placeholder="Mensaje"]').value = '';
}
