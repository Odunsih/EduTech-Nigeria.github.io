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

// Select the "Explore Courses" button and the response div
const exploreCoursesBtn = document.getElementById('explore-courses-btn');
const chatbotResponseDiv = document.getElementById('chatbot-response');

// OpenAI API Key (Replace 'YOUR_API_KEY' with your actual API key)
const OPENAI_API_KEY = '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';

// Function to call the OpenAI API
async function getChatbotResponse() {
    const message = "Can you tell me more about the courses available?";

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                "model": "gpt-4o-mini-2024-07-18",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
            }),
        });

        const data = await response.json();

        // Check if data.choices exists and has at least one item
        if (data.choices && data.choices.length > 0) {
            const chatbotMessage = data.choices[0].text.trim();
            chatbotResponseDiv.innerText = chatbotMessage;
        } else {
            // Handle case where choices is missing or empty
            chatbotResponseDiv.innerText = "Sorry, I couldn't get a response. Please try again later.";
            console.error("Unexpected API response:", data);
        }

    } catch (error) {
        console.error("Error fetching data from OpenAI API:", error);
        chatbotResponseDiv.innerText = "Sorry, something went wrong. Please try again later.";
    }
}

// Add event listener to the button
exploreCoursesBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    chatbotResponseDiv.innerText = "Loading..."; // Show a loading message
    getChatbotResponse(); // Call the OpenAI API
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
