let tl = gsap.timeline();

tl.from(".logo-link", {
    duration: 4,
    opacity: 0,
    ease: "back",
    delay: 0.4,
})
tl.from(".nav-ul", {
        duration: 4,
        opacity: 0,
        delay: 0.4,
        ease: "back"


    },
    "<")
tl.from(".fd", {
        duration: 1,
        opacity: 0,
        xPercent: 30
    },
    "<"

)
let tl2 = gsap.timeline();

gsap.from("#la", {
    scrollTrigger: "#la",
    xPercent: -40,
    delay: 0.5,
    opacity: 0,
    duration: 1.25
});
gsap.from("#about", {
    scrollTrigger: "#about",
    yPercent: -40,
    delay: 0.5,
    opacity: 0,
    duration: 1.25
});
gsap.from(".myWork-images img", {
    scrollTrigger: ".myWork-images",
    yPercent: 50,
    duration: 1.25,
    ease: "back",
    stagger: 0.5,
    delay: 0.5,
    opacity: 0
});