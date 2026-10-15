document.addEventListener("mousemove", (event) =>{
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) =>{
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px , ${y * speed * 20}px)`;
    })
} )


const singinButton = document.getElementById('singinButton');
const signin = document.getElementById('signin');
const closeIcon = document.getElementById('closeIcon');


singinButton.addEventListener('click', function(){
    signin.classList.remove("closeSingin")
    signin.classList.add("openSignin")
})
closeIcon.addEventListener('click', function(){
    signin.classList.remove("openSignin")
    signin.classList.add("closeSingin")
})
