// navbar
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu-custom');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

// scroll Animation 
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true 
})

sr.reveal ('.home-text', {})
sr.reveal ('.home-img', {delay:200})
sr.reveal ('.social', {delay:200})

sr.reveal ('.about-img', {delay:200})
sr.reveal ('.heading', {})
sr.reveal ('.about-text', {delay:200})

sr.reveal ('.skills-content', {delay:200})
sr.reveal ('.projects-content', {delay:200})
sr.reveal ('.contact-content', {delay:200})

// email 
const contactForm = document.getElementById("contactForm"),
        contactMessage = document.getElementById("contact-message")
const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_xati18k','template_hgvcsh7','#contactForm','jdNzrDEI7nHJT7RCz')
    .then(() =>{
        contactMessage.textContent = 'Message sent successfully✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () =>{
        contactMessage.textContent = 'Message not sent (Service Error)❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

function redirectTo(url) {
    window.location.href = url;
}

