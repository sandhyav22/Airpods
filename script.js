    const menu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav-links');
    menu.addEventListener('click', () => {
      nav.classList.toggle('active');
    });




   const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

   function toggleHeart(el) {
      el.classList.toggle("active");
      const icon = el.querySelector("i");
      if (el.classList.contains("active")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
      }
    }


    document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // stop form submission

  // Get fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Get error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMsg = document.getElementById('successMsg');

  // Reset errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  let isValid = true;

  // Name validation
  if (name.value.trim() === '') {
    nameError.textContent = 'Please enter your name';
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    emailError.textContent = 'Please enter your email';
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  }

  // Message validation
  if (message.value.trim() === '') {
    messageError.textContent = 'Please enter your message';
    isValid = false;
  }

  // If all valid
  if (isValid) {
    successMsg.textContent = 'Message sent successfully!';
    this.reset();
  }
});
