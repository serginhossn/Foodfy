const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
    card.addEventListener("click", function() {
        const imgAdress = card.getAttribute('id');
        modalOverlay.classList.add("active");
        modalOverlay.querySelector('img').src = `img/${imgAdress}`;
        modal.querySelector('h4').innerText = card.querySelector('.card-info h4').innerText;
        modal.querySelector('span').innerText = card.querySelector('.card-info span').innerText;
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active");
})