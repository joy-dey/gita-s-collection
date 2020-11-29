let currentLocation = window.location.pathname,
    passwordInput = document.querySelector('#pwd'),
    showPass = document.querySelector('#showPass');
setTimeout(() => {
    if (currentLocation === '/index.html' || currentLocation === '/') {
        window.location.href = 'main.html'
    }
}, 3000);

if (showPass) {
    showPass.addEventListener('click', () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    })
}

console.log(currentLocation);

// slick