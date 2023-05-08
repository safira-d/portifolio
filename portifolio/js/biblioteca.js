const card_hab = document.querySelectorAll('.card_hab');
const btn_slider = document.querySelectorAll('.select');

for (let i in btn_slider) {
    btn_slider[i].addEventListener('click', function () {
        card_hab[i].classList.add('active');

        for (let j = 0; j < btn_slider.length; j++) {
            btn_slider[j].classList.remove('selected');
        }

        for (let j = 0; j < card_hab.length; j++) {
            card_hab[j].classList.remove('active');
        }

        this.classList.add('selected');
        card_hab[i].classList.add('active');
    })
}