const el = document.querySelector('.slide-me');
const next_btn = document.querySelector('.slide-btn-r');
const prev_btn = document.querySelector('.slide-btn-l');
const slider_images = document.querySelectorAll(".slide-image");

let box_w = window.innerWidth;
let img_max_w = 220;
let img_w = 215;
let gap_w = 16; // 1 rem
let extra_w = 187; // px for posters in background
let number_posters = 7;
let number_gaps = 7;
let padding = 36;
let second_scroll = 8;
let first_scroll, next_scroll;

function calculateCarousel() {
    // let available_space = box_w - gap_w - extra_w - padding;
    // let total_gaps_w = number_gaps * gap_w
    // img_w = Math.floor(available_space / number_posters)
    for (let i = 0; i < slider_images.length; i++) {
        slider_images[i].width = 215
        // slider_images[i].width = img_w
    }
    first_scroll = img_w * number_posters + gap_w * number_gaps + padding + extra_w;
    next_scroll = first_scroll + second_scroll;
    console.log(first_scroll, next_scroll);
}
calculateCarousel();

next_btn.addEventListener('click', (event) => {
    let scroll_amt = el.scrollLeft == 0 ? first_scroll : el.scrollLeft + next_scroll;
    el.scrollTo({
      left: scroll_amt,
      behavior: 'smooth'
    });
    prev_btn.classList.remove("hidden");
    if (el.scrollLeft > 0) {
        prev_btn.classList.remove("hidden");
    }

    if (scroll_amt + 1848 > el.scrollWidth) {
        next_btn.classList.add("hidden");
    } else {
        next_btn.classList.remove("hidden");
    }
    console.log(scroll_amt);
});

prev_btn.addEventListener('click', (event) => {
    let scroll_amt = el.scrollLeft > first_scroll ? el.scrollLeft - next_scroll : 0;
    console.log(scroll_amt);
    console.log(el.scrollLeft);

    el.scrollTo({
      left: scroll_amt,
      behavior: 'smooth'
    });

    if (scroll_amt < first_scroll) {
        prev_btn.classList.add("hidden");
    }
});
