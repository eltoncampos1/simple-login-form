const form = document.querySelector('#sign-in-form');

const nome = document.querySelector('#name');
const password = document.querySelector('#password');

console.log(nome.value);

form.onclick = () => {
    formValidate()
}


function formValidate() {
    if (nome.value === '') {
        alert('Plese insert your name')

        nome.focus();
        return;
    }

    if (password.value === '') {
        alert("Please insert your password")
        return;
    }


    alert('Form submited')
}