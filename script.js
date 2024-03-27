// Sample data for skills and experience
const skillsData = [
    { category: 'Technical Skills', list: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'] },
    { category: 'Soft Skills', list: ['Communication', 'Teamwork', 'Problem-solving', 'Time Management'] },
    { category: 'Language Proficiency', list: ['English', 'Spanish', 'French', 'German'] },
    { category: 'Certifications', list: ['AWS Certified Developer', 'Google Analytics Certification', 'Scrum Master'] },
    { category: 'Creative Skills', list: ['Graphic Design', 'Photography', 'Video Editing', 'Content Writing'] }
];

// Function to display skills and experience on the about me page
function displaySkillsAndExperience() {
    const skillsContainer = document.getElementById('skills-container');

    skillsData.forEach(skill => {
        const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = skill.category;
        skillsContainer.appendChild(categoryHeading);

        const skillList = document.createElement('ul');
        skill.list.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            skillList.appendChild(listItem);
        });
        skillsContainer.appendChild(skillList);
    });
}

// Event listeners to navigate between pages
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = link.getAttribute('href').substring(1); // Get page ID from href attribute
            navigateToPage(pageId);
        });
    });
});

// Function to navigate to a specific page
function navigateToPage(pageId) {
    const pages = ['home', 'about', 'resume', 'contact'];

    pages.forEach(page => {
        const pageElement = document.getElementById(page);
        if (page === pageId) {
            pageElement.style.display = 'block';
        } else {
            pageElement.style.display = 'none';
        }
    });
}

// Initial navigation to home page
navigateToPage('home');

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validate form fields (you can add more validation as needed)
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // You can perform additional validation here, such as email format validation
    
    // Construct the data to be sent
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
  
    // Send the form data using fetch API
    fetch("your-backend-url", {
      method: "POST",
      body: formData
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(function(data) {
      // Display success message
      document.getElementById("response").innerHTML = "<p>Message sent successfully!</p>";
      // Clear form fields
      document.getElementById("contact-form").reset();
    })
    .catch(function(error) {
      console.error("Error:", error);
      // Display error message
      document.getElementById("response").innerHTML = "<p>Failed to send message. Please try again later.</p>";
    });
  });
  
