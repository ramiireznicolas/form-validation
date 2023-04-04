const form = document.getElementById("form");
const username = document.getElementById("username");
const wand = document.getElementById("wand");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const password2 = document.getElementById("pass2");

form.addEventListener("submit", (e) => {
    //para evitar el default, que es el submit.
    e.preventDefault();
    validate();
});

//REGEX
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//varita vacia:
wand.selectedIndex = -1;

const validate = () => {
    console.log("validate");
    //mata a los espacios
    const user = username.value.trim();
    const mail = email.value.trim();
    const pass = password.value.trim();
    const pass2 = password2.value.trim();
    const userWand = wand.value;

    if (user === "") {
        let message = "El usuario no puede estar vacío!"
        inputError(username, message);

    } else if (user.length < 4 || user.length > 24) {
        let errorMessage = "El nombre de usuario debe tener entre 4 y 24 caracteres"
        inputError(username, errorMessage)

    } else {
        inputSuccess(username);
    };

    if (mail === "") {
        let errorMessage = "El email no puede estar vacío!"
        inputError(email, errorMessage);

    } else if (!emailRegex.test(mail)) {
        let errorMessage = "El email no es válido!";
        inputError(email, errorMessage);
    } else {
        inputSuccess(email);
    };

    if (userWand === "") {
        let errorMessage = "Selecciones su varita!"
        inputError(wand, errorMessage);
    } else {
        inputSuccess(wand);
    };

    if (pass === "") {
        let errorMessage = "El password no puede estar vacío!"
        inputError(password, errorMessage);

    } else if (!passRegex.test(pass)) {
        let errorMessage = "El password no es válido. Debe tener mayúscula, minúscula, número y un minimo de 8 caracteres!";
        inputError(password, errorMessage);
    } else {
        inputSuccess(password);
    };

    if (pass2 === "") {
        let errorMessage = "El password no puede estar vacío!"
        inputError(password2, errorMessage);

    } else if (pass2 !== pass) {
        let errorMessage = "Los password no coinciden!";
        inputError(password2, errorMessage);

    } else {
        inputSuccess(password2);
    };
};

//validacion para ver si el form se relleno bien
const inputSuccess = (input) => {
    const inputParent = input.parentElement;
    const small = inputParent.querySelector("small");
    inputParent.classList.add("success");
    inputParent.classList.remove("error");
    small.innerHTML = "";
};

//o si se relleno mal
const inputError = (input, message) => {
    const inputParent = input.parentElement;

    const small = inputParent.querySelector("small");
    inputParent.classList.add("error");
    inputParent.classList.remove("success");

    small.classList.add("error");
    small.innerHTML = message;
};

