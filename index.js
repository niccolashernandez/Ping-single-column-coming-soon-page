const form = document.querySelector('#form')
const input = document.querySelector('#input_mail')
const error = document.querySelector('.error_message')
const toastr = document.querySelector('.toastr')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const ExpRegEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    const email = document.querySelector('#input_mail').value

    if(email.match(ExpRegEmail)==null){
        input.style.border = "solid 1px red"
        error.style.display = "block";
        error.style.margin = "8px 0 0 0";
        error.style.color = "red";
        error.innerHTML = "Please provide a valid email address";
    }else{
        input.style.border = "solid 1px green"
        error.style.display = "block";
        error.style.margin = "8px 0 0 0";
        error.style.color = "green";
        error.innerHTML = "Email sent successfully";

        setTimeout(() => {
            error.style.display = "none";
            input.value = ''
            input.style.border = "solid 1px"
        }, 2000)
    }
})