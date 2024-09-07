document.querySelector('.catalog-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const targetSection = document.querySelector('#catalog');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.toggle-arrow').addEventListener('click', function () {
    const headerContent = document.querySelector('.header-content');
    const arrow = document.querySelector('.toggle-arrow span');

    requestAnimationFrame(() => {
        if (!headerContent.classList.contains('open')) {
            headerContent.classList.add('open');
            arrow.classList.add('active');
        } else {
            headerContent.classList.remove('open');
            arrow.classList.remove('active');
        }
    });
});

const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.food-item').forEach(item => {
    item.addEventListener('click', function () {
        const dishTitle = this.getAttribute('data-title');
        const dishDescription = this.getAttribute('data-description');
        const dishRecipe = this.getAttribute('data-recipe');
        const dishImage = this.getAttribute('data-image');

        document.getElementById('dish-title').textContent = dishTitle;
        document.getElementById('dish-description').textContent = dishDescription;
        document.getElementById('dish-recipe').textContent = dishRecipe;
        document.getElementById('dish-image').src = dishImage;

        modal.style.display = 'flex';

        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }
});
