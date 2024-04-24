const aboutMe = document.getElementById("aboutme");
const Skill = document.getElementById("skill");
const Education = document.getElementById("education");

const aboutBody = document.getElementById("aboutBody");
const skillBody = document.getElementById("skillBody");
const educationBody = document.getElementById("educationBody");

const educationBorder = document.getElementById('education-title')
const skillBorder = document.getElementById('skill-title')
const aboutMeBorder = document.getElementById('aboutme-title')


aboutMe.addEventListener("click", function() {
    aboutBody.style.display = "block"
    skillBody.style.visibility = "hidden" 
    educationBody.style.display = "none" 

    aboutMeBorder.style.borderBottom = "none"
    skillBorder.style.borderBottom = "1px solid #242424"
    educationBorder.style.borderBottom = "1px solid #242424"

    aboutMeBorder.style.fontSize = "14px" 
})

Skill.addEventListener("click", function() {
    aboutBody.style.display = "none"
    skillBody.style.visibility = "visible"
    educationBody.style.display = "none" 

    skillBorder.style.borderBottom = "none"
    aboutMeBorder.style.borderBottom = "1px solid #242424"
    educationBorder.style.borderBottom = "1px solid #242424"

    aboutMeBorder.style.fontSize = "12px"
    skillBorder.style.fontSize = "14px"
})

Education.addEventListener("click", function() {
    aboutBody.style.display = "none"
    skillBody.style.visibility = "hidden"
    educationBody.style.display = "block" 

    skillBorder.style.borderBottom = "1px solid #242424"
    aboutMeBorder.style.borderBottom = "1px solid #242424"
    educationBorder.style.borderBottom = "none"

    aboutMeBorder.style.fontSize = "12px"
    skillBorder.style.fontSize = "12px"
    educationBorder.style.fontSize = "14px"
})  

// FIM SKILL SECTION
window.sr = ScrollReveal({reset: true});

sr.reveal('.header-c', { duration: 3000 });
sr.reveal('.body-experience', { duration: 2000 });
sr.reveal('.aboutme-c', { duration: 1000 });
sr.reveal('.skill-c', { duration: 1000 });
sr.reveal('.divisor-sections', { duration: 1000 });
sr.reveal('.div-section--projects-header', { duration: 1000 });
sr.reveal('.credits', { duration: 1000 });
//sr.reveal('.education-c', { duration: 1000 });

sr.reveal('.education-c', { 
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000 
  });

  sr.reveal('.skill-c', { 
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000 
  });

  sr.reveal('.aboutme-c', { 
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000 
  });

  sr.reveal('.projects-body', { 
    rotate: {x: 0, y: 90, z: 0},
    duration: 3000 
  });

  sr.reveal('.cards-services', { 
    rotate: {x: 0, y: 90, z: 0},
    duration: 3000 
  });

  sr.reveal('.icons-contact', { 
    rotate: {x: 0, y: 50, z: 0},
    duration: 3000 
  });
  
  sr.reveal('.footer-menu', { 
    rotate: {x: 0, y: 50, z: 0},
    duration: 2000 
  });
  
  sr.reveal('.icons-midias--socials', { 
    rotate: {x: 0, y: 50, z: 0},
    duration: 3000 
  });

