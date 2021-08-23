const openButton = document.querySelector(".nav-open");
const closeButton = document.querySelector(".nav-close");
const navigation = document.querySelector(".nav");

const list = document.querySelectorAll(".nav-item");

const upArrow = document.querySelector(".upScroll");




for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
        navigation.classList.remove("open");
    })
}

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