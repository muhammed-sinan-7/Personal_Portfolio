function skills(){
    const content = document.getElementById("btnpar").style.display = "block";
    const exp = document.getElementById("exppar").style.display = "none";
    const edu = document.getElementById("edupar").style.display = "none";
}

function experience(){
    const exp_content = document.getElementById("exppar").style.display = "block";
    const skill = document.getElementById("btnpar").style.display = "none"
    const edu = document.getElementById("edupar").style.display = "none"
}

function education(){
    const edu = document.getElementById("edupar").style.display="block";
    const exp = document.getElementById("exppar").style.display = "none"
    const skill = document.getElementById("btnpar").style.display = "none"
}  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', function () {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide(); // This will close the toggler menu
      }
    });
  });

 const text = "I'm a Software Developer.";
    const speed = 90; // typing speed in milliseconds
    const element = document.getElementById("typewriter");

    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();