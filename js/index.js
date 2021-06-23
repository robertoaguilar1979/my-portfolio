const openButton = document.querySelector(".nav-open");
const closeButton = document.querySelector(".nav-close");
const navigation = document.querySelector(".nav");

openButton.addEventListener("click", () => {
    navigation.classList.add("open");
});

closeButton.addEventListener("click", () => {
    navigation.classList.remove("open");
});