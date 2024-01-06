const wrapper = document.querySelector('.wrapper');

function activeLogIn() {
    wrapper.classList.add('activeLogIn');
    wrapper.classList.remove('activeSignUp');
}

function activeSignUp() {
    wrapper.classList.add('activeSignUp');
    wrapper.classList.remove('activeLogIn');
}
