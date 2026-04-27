const toggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
    } else {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
    }
});