

//3d cards
const cards = document.querySelectorAll(".content__img");

cards.forEach(card => {
    card.addEventListener("mousemove", onMousemoveCardHandler);
    card.addEventListener("mouseleave", onMouseleaveCardHandler);
});

function onMousemoveCardHandler(evt) {
    const cardInner = this.querySelector(".img");
    const halfHeight = cardInner.offsetHeight / 2;
    const halfWidth = cardInner.offsetWidth / 2;
    const y = evt.offsetY;
    const x = evt.offsetX;
    cardInner.style.transform = `rotateX(${(-y + halfHeight) /
    12}deg) rotateY(${(x - halfWidth) / 10}deg)`;
}

function onMouseleaveCardHandler(evt) {
    const cardItem = this.querySelector(".img");

    cardItem.style.transform = "";
}

// menu-burger
$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
});


//wow js
new WOW().init();