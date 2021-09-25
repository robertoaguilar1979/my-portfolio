gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from(".logo-link", {
    duration: 4,
    opacity: 0,
    ease: "back",
    delay: 0.4,
})
tl.from(".nav-ul, .burger", {
        duration: 4,
        opacity: 0,
        delay: 0.4,
        ease: "back"


    },
    "<")
tl.from(".fd, .name, .hi", {
        duration: 1,
        opacity: 0,
        xPercent: 30,
        delay: 0.6,
    },
    "<"

)
tl.from(".hero-img", {
        duration: 1,
        opacity: 0,
        xPercent: -30,
        delay: 0.6,
    },
    "<"

)
let tl2 = gsap.timeline();

gsap.from("#la, .paragraph-container, .who-h1", {
    xPercent: -40,
    delay: 0.5,
    opacity: 0,
    duration: 1.75,
    ease: "sine",

    scrollTrigger: {
        trigger: "#la",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
        scrub: 1,
    }

});

gsap.from(".karenAndMe", {
    xPercent: 40,
    delay: 0.5,
    opacity: 0,
    duration: 1.75,
    ease: "sine",

    scrollTrigger: {
        trigger: ".karenAndMe",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
        scrub: 1,
    }

});

gsap.from(".myWork-images img", {
    // scrollTrigger: ".myWork-images",
    yPercent: 50,
    duration: 1.25,
    ease: "back",
    stagger: 0.5,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".myWork-images img",
        toggleActions: "restart",
        start: "top 80%",
        end: "top 40%",
        // markers: true,
        scrub: 1.75,
    }
});