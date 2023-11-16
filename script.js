const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

// for Initially set the signup page as active uncommented under line
// wrapper.classList.add('active');

registerLink.onclick = () => {

    wrapper.classList.add("active")
}

loginLink.onclick = () => {

    wrapper.classList.remove("active")
}