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
const validate = () => {
    console.log("validate");
    //mata a los espacios
    const user = username.value.trim();

    if (user === "") {
        let message = "El usuario no puede estar vacío!"
        inputError(username, message);

    } else if (user.length < 4 || user.length > 24) {
        let errorMessage = "El nombre de usuario debe tener entre 4 y 24 caracteres"
        inputError(username, errorMessage)

    } else{
        inputSuccess(username);
    }
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