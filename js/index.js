const openButton = document.querySelector(".nav-open");
const closeButton = document.querySelector(".nav-close");
const navigation = document.querySelector(".nav");

const about = document.querySelector(".nav-item2");
const contact = document.querySelector(".nav-item3");

const upArrow = document.querySelector(".upScroll");

about.addEventListener("click", () => {
    navigation.classList.toggle("open");
})
contact.addEventListener("click", () => {
    navigation.classList.toggle("open");
})


openButton.addEventListener("click", () => {
    navigation.classList.add("open");
});

closeButton.addEventListener("click", () => {
    navigation.classList.remove("open");
});

upArrow.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", e => {

    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        upArrow.classList.add("visible");
    } else {
        upArrow.classList.remove("visible");
    }
});