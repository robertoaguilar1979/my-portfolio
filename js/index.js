const openButton = document.querySelector(".nav-open");
const closeButton = document.querySelector(".nav-close");
const navigation = document.querySelector(".nav");

const about = document.querySelector(".nav-item2");
const contact = document.querySelector(".nav-item3");


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