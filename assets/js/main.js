let currentPage = location.href,
    passwordInput = document.querySelector('#pwd'),
    loadingPage = document.querySelector('#loading-screen'),
    backButton = document.querySelector('[data-back]'),
    showPass = document.querySelector('#showPass');
setTimeout(() => {
    if (loadingPage) {
        window.location.href = 'main.html';
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
        location.href = `https://api.whatsapp.com/send?text=${urlMessage}`;
    })
});
// back button
if (backButton) {
    backButton.addEventListener('click', () => {
        history.back(-1);
    })
}