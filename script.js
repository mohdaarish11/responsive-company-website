const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav_links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert(
        "Thank you! Your message has been submitted."
    );

    form.reset();
});