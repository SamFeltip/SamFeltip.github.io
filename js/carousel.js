let carousels = document.querySelectorAll(".carousel");

let carousel_prev_options = document.querySelectorAll(".prev-option");
let carousel_next_options = document.querySelectorAll(".next-option");

// give every carousel a default state
carousels.forEach(carousel => {carousel.style.setProperty('--position-state', 0)})

function change_carousel_display(carousel, current_carousel_state, new_carousel_state){

    // get carousel parent
    let imgs = carousel.querySelectorAll('img');
    let descriptions = carousel.querySelectorAll('.carousel-description');

    let carousel_bullets = carousel.querySelectorAll('.carousel-bullet');

    // hide current images and descriptions
    imgs[current_carousel_state].classList.remove('display');
    descriptions[current_carousel_state].classList.remove('display');
    carousel_bullets[current_carousel_state].classList.remove('filled');

    // update carousel
    carousel.style.setProperty('--position-state', new_carousel_state);

    // reveal new image and description
    imgs[new_carousel_state].classList.add('display');
    descriptions[new_carousel_state].classList.add('display');
    carousel_bullets[new_carousel_state].classList.add('filled');
}


carousel_next_options.forEach( (carousel_next_option) => {
    carousel_next_option.addEventListener("click", event => {

        let carousel = carousel_next_option.closest('.carousel');

        let num_of_images = carousel.querySelectorAll(".carousel-bullet").length

        let current_carousel_state = parseInt(carousel.style.getPropertyValue('--position-state'))
        let new_carousel_state = (current_carousel_state + 1) % num_of_images;

        change_carousel_display(carousel, current_carousel_state, new_carousel_state)

    })
})

carousel_prev_options.forEach( (carousel_prev_option) => {

    carousel_prev_option.addEventListener("click", event => {
        let carousel = carousel_prev_option.closest('.carousel');
        let current_carousel_state = parseInt(carousel.style.getPropertyValue('--position-state'));

        let num_of_images = carousel.querySelectorAll(".carousel-bullet").length


        let new_carousel_state = current_carousel_state === 0 ? (num_of_images-1) : current_carousel_state - 1;


        change_carousel_display(carousel, current_carousel_state, new_carousel_state)

    })
})