setTimeout(() => document.querySelector('.loader').classList.add('hide'), 3000)


document.querySelector('.contact-form > button').addEventListener('click', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const first_name = document.getElementById('first_name');
    const last_name = document.getElementById('last_name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    const errors = []

    if(first_name.value.length === 0) errors.push("Nombre está vacío!\n");
    if(last_name.value.length === 0) errors.push("Apellido está vacío!\n"); 
    if(!(phone.value.length === 8 || phone.value.length === 10) || !isNumber(phone.value)) errors.push("Teléfono inválido!\n");
    if(!isEmail(email.value) ) errors.push("Email inválido!\n");

    if(errors.length > 0){ 
        alert(errors.join(''))
    } else {
        alert('Contacto envíado con éxito!');
    }
}

function isNumber(str) {
    return /^(0|[1-9]\d*)$/.test(str);
}

function isEmail(str) {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(str);
}