// Mobile Menu Toggle

const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});

// Smooth Scroll for Navigation Links

document.querySelectorAll('#abouts').forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        document.querySelector(link.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});

// Testimonials Slider

const testimonials = document.querySelectorAll('.testimonial');

let currentTestimonial = 0;

function showTestimonial(index) {

    testimonials.forEach((testimonial, i) => {

        testimonial.style.display = i === index ? 'block' : 'none';

    });

}

function nextTestimonial() {

    currentTestimonial = (currentTestimonial + 1) % testimonials.length;

    showTestimonial(currentTestimonial);

}

// Automatically cycle through testimonials every 5 seconds

setInterval(nextTestimonial, 5000);

// Initial call to show the first testimonial

showTestimonial(currentTestimonial);
