// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href"); // Keep the correct ID format
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjusts for sticky navbar
                behavior: "smooth"
            });
        }
    });
});


// Scroll Animations for Sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Typewriter Effect in Hero Section
const textElement = document.querySelector(".hero h2 span");
const textArray = ["a Developer", "a Cybersecurity Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Default speed

function typeEffect() {
    const currentText = textArray[textIndex];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
        typingSpeed = 100; // Slower delete speed (increase this value)
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
        typingSpeed = 100; // Normal typing speed
    }
    

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 5000); // Pause before deleting
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
setTimeout(typeEffect, 1000)
typeEffect();


// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "⬆";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
