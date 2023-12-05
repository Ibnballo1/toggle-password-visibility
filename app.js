const form = document.getElementById('form-fields');
const toggler = document.getElementById('toggler');
const invisible = document.getElementById('in-toggle-btn');
const visible = document.getElementById('v-toggle-btn');
const inputPwd = document.getElementById('pwd');

toggler.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(inputPwd.type);
    if (invisible.style.display === 'none') {
        inputPwd.type = 'password';
        invisible.style.display='block';
        visible.style.display='none';
    } else {
        inputPwd.type = 'text';
        invisible.style.display='none';
        visible.style.display='block';
    }
})