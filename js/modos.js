document.addEventListener('DOMContentLoaded', function () {
    const modoSwitch = document.getElementById('modo-switch');

    modoSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.container').classList.toggle('dark-mode');
    });
});
