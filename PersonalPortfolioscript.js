// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');

    // Calculate the fixed navbar's height
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    
    // Scroll so that the top of the selected page is immediately below the navbar
    window.scrollTo({
        top: selectedPage.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (!name || !email || !subject || !message) {
        alert('Please fill out all fields');
        return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Simulate form submission (replace with actual submission logic)
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});

// Cookie Notice
const cookieNotice = document.querySelector('.cookie-notice');
const cookieButtons = document.querySelectorAll('.cookie-btn');

cookieButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('accept')) {
            cookieNotice.style.display = 'none';
            // Additional logic to set a cookie could be added here
        }
    });
});

// Project Details Modal (Placeholder)
/*const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Project details modal would open here in a full implementation.');
    });
});*/
