const body = document.querySelector('body');
const img = document.getElementById('flower-image');

body.addEventListener('touchstart', () => {
    img.classList.add('image-blur');
});

body.addEventListener('touchend', () => {
    img.classList.remove('image-blur');
});

