const wrapper = document.querySelector('.wrapper');
//function
function activeLogIn() {
    wrapper.classList.add('activeLogIn');
    wrapper.classList.remove('activeSignUp');
}
//function
function activeSignUp() {
    wrapper.classList.add('activeSignUp');
    wrapper.classList.remove('activeLogIn');
}
