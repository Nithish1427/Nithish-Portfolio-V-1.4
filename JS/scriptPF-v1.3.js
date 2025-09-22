document.addEventListener("DOMContentLoaded", () => {
    const titleText = "Hi! I'm Nithish";
    const descText = "A Software Developer specializing in modern web technology.";

    const titleEl = document.getElementById("type-title");
    const descEl = document.getElementById("type-desc");

    let i = 0;

    function typeTitle() {
        if (i < titleText.length) {
            titleEl.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeTitle, 100);
        } else {
            titleEl.classList.add("hide-cursor"); // hide cursor after typing title
            titleEl.classList.add("slide-up"); // move up
            setTimeout(typeDesc, 500); // start description typing
        }
    }

    let j = 0;
    function typeDesc() {
        descEl.style.opacity = 1;
        descEl.classList.add("typing"); // make cursor blink without affecting height
        if (j < descText.length) {
            descEl.textContent += descText.charAt(j);
            j++;
            setTimeout(typeDesc, 60);
        }
    }

    typeTitle();
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".skill-card .card-title").forEach(title => {
        const text = title.textContent.trim();
        // Check if it's a single word AND longer than 8 characters
        if (!text.includes(" ") && text.length > 8) {
            title.classList.add("long-title");
        }
    });
});

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
        const description = this.closest('.project-info').querySelector('.project-description');

        description.classList.toggle('expanded');

        if (description.classList.contains('expanded')) {
            this.textContent = 'Read Less';
        } else {
            this.textContent = 'Read More';
        }
    });
});

// function fetchGitHubStats(username, repo, starsEl, forksEl, langEl) {
//     // Fetch general repo details
//     fetch(`https://api.github.com/repos/${username}/${repo}`)
//         .then(res => res.json())
//         .then(data => {
//             document.querySelector(starsEl).textContent = data.stargazers_count ?? 0;
//             document.querySelector(forksEl).textContent = data.forks_count ?? 0;
//         })
//         .catch(() => {
//             document.querySelector(starsEl).textContent = "0";
//             document.querySelector(forksEl).textContent = "0";
//         });

//     // Fetch all languages used
//     fetch(`https://api.github.com/repos/${username}/${repo}/languages`)
//         .then(res => res.json())
//         .then(langData => {
//             const languages = Object.keys(langData);
//             document.querySelector(langEl).textContent = languages.length ? languages.join(", ") : "N/A";
//         })
//         .catch(() => {
//             document.querySelector(langEl).textContent = "N/A";
//         });
// }

// // Call for each project
// fetchGitHubStats("Nithish1427", "springboot-taskmanager", "#task-manager-stars", "#task-manager-forks", "#task-manager-lang");
// fetchGitHubStats("Nithish1427", "College-Event-Hub", "#college-event-hub-stars", "#college-event-hub-forks", "#college-event-hub-lang");
// fetchGitHubStats("Nithish1427", "quizN", "#quizN-stars", "#quizN-forks", "#quizN-lang");
// fetchGitHubStats("Nithish1427", "Nithish-Portfolio-V-1.3", "#portfolio-stars", "#portfolio-forks", "#portfolio-lang");


window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const switchLabel = toggleSwitch.querySelector(".switch-label");
    const body = document.body;

    // Load saved mode
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleSwitch.classList.add("active");
        switchLabel.textContent = "Off";
    }

    toggleSwitch.addEventListener("click", () => {
        toggleSwitch.classList.toggle("active");
        body.classList.toggle("dark-mode");

        const isDark = body.classList.contains("dark-mode");
        switchLabel.textContent = isDark ? "Off" : "On";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});

// Initialize EmailJS
(function () {
    emailjs.init("Ny2megAPBQySqoLEW"); // Your Public Key
})();

// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let formMessage = document.getElementById("form-message");
    formMessage.innerHTML = ""; // Clear old messages

    // Send form data to EmailJS
    emailjs.sendForm("service_d81azc1", "template_zw03fqu", this)
        .then(function () {
            formMessage.innerHTML = `<div class="success-message">✅ Your message has been sent successfully!</div>`;
            document.getElementById("contact-form").reset();
            fadeOutMessage(formMessage); // Only success fades out
        }, function (error) {
            console.error("❌ Failed to send message:", error);
            formMessage.innerHTML = `<div class="error-message">❌ Oops! Something went wrong. Please try again.</div>`;
            // ❌ No fade-out for errors
        });
});

// Fade-out effect for success messages
function fadeOutMessage(element) {
    setTimeout(() => {
        element.style.transition = "opacity 0.8s ease";
        element.style.opacity = "0";
        setTimeout(() => element.innerHTML = "", 800); // Remove after fade
    }, 5000);
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}