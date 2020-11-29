let currentLocation = location.pathname,
    currentPage = location.href,
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

let productName = document.querySelectorAll('[data-productName]'),
    shareProduct = document.querySelectorAll('[data-share]'),
    price = document.querySelectorAll('[data-price]');

shareProduct.forEach((prd, index) => {
    prd.addEventListener('click', () => {
        let getName = `${productName[index].innerText}`,
            message = `Hey I have recently found this beautiful product named ${getName} by Geeta's Collection at ${currentPage}`,
            urlMessage = message.replace(/ /g, '%20').replace(':', '%3A').replaceAll('/', '%2F');
        alert(`https://api.whatsapp.com/send?text=${urlMessage}`);
    })
});