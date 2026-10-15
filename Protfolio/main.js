// GSAP plugins are already loaded via CDN in the HTML file
const gsap = window.gsap // Declare gsap variable
const ScrollTrigger = window.ScrollTrigger // Declare ScrollTrigger variable


const themeToggle = document.getElementById("themetoggle");
const body = document.body;

// Check for saved theme preferece or default to "dark"
const currentTheme = localStorage.getItem("theme") || "dark"
body.setAttribute("data-theme", currentTheme)

themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)

    gsap.to(themeToggle, {
        scale: 0.9,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
    })
})

// Mobile Menu Managment
const menutoggle = document.getElementById("menutoggle")
const mobilemenu = document.getElementById("mobilemenu")


menutoggle.addEventListener("click", () => {
    menutoggle.classList.toggle("active")
    mobilemenu.classList.toggle("active")

    if (mobilemenu.classList.contains("active")) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = ""
    }
})

// Loading Animation
function initLoader() {
    const loader = document.querySelector(".loader")
    const loaderText = document.querySelector(".loader-text")
    const loaderProgress = document.querySelector(".loader-progress")

    // animation loader Text
    gsap.to(loaderText, {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
    })

    // animation Progress bra 
    gsap.to(loaderProgress, {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.7,
                onComplete: () => {
                    loader.style.display = "none"
                    inintAnimations()
                }

            })
        }
    })

}
//  initialize loader on page load
window.addEventListener("load", initLoader)

// Custom cursor (only on desktop)
if (window.innerWidth > 768) {
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1,
        })

        gsap.to(cursorFollower, {
            x: e.clientX - 20,
            y: e.clientY - 20,
            duration: 0.2,
        })
    })
}


// initialize all animations
function inintAnimations() {
    // Navigation animation
    gsap.to("nav", {
        y: 0,
        duration: 1,
        ease: "power3.out",

    })

    // Hero Animation
    const heroT1 = gsap.timeline()
    heroT1
        .to(".hero-title", {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 1.2,
            ease: "power3.out",
        })

        .to(".hero-subtitle", {

            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.5")

        .to(".hero-description", {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.3")
        
        .to(".cta-button", {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.3")
}