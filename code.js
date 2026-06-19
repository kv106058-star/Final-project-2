window.addEventListener("scroll", () => {

    const winScroll =
        document.body.scrollTop ||
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar")
        .style.width = scrolled + "%";
});
const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("active");
        }

    });

});
let lastScroll = 0;

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    const current =
    window.pageYOffset;

    if(current > lastScroll){

        header.style.transform =
        "translate(-50%, -120px)";
    }
    else{

        header.style.transform =
        "translate(-50%, 0)";
    }

    lastScroll = current;
});
const words = [
    "Technology",
    "Business",
    "Lifestyle",
    "Innovation"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect(){

    const typing =
    document.getElementById("typing");

    if(charIndex < words[wordIndex].length){

        typing.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 120);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect(){

    const typing =
    document.getElementById("typing");

    if(charIndex > 0){

        typing.textContent =
        words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 70);

    } else {

        wordIndex =
        (wordIndex + 1) % words.length;

        setTimeout(typeEffect, 300);
    }
}

typeEffect();
document.addEventListener("mousemove", e => {

    const glow =
    document.getElementById("cursor-glow");

    glow.style.left =
    e.clientX - 150 + "px";

    glow.style.top =
    e.clientY - 150 + "px";
});
const stories = [

    "AI Is Reshaping Creativity",

    "The Startups Defining The Next Decade",

    "Minimalism In Modern Living"
];

const random =
stories[
Math.floor(
Math.random() *
stories.length
)];

document
.getElementById("featured-story")
.innerText = random;