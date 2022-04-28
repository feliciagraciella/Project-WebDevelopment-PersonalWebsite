window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topnav");
var sticky = navbar.offsetTop;
          
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }                    

const navLink = document.querySelectorAll('.navlink')

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const sr = ScrollReveal({
  origin: 'home',
  distance: '100px',
  duration: 2000,
  reset: true
})

//header
sr.reveal('.headerimg', {origin:'top'})
sr.reveal('.name', {origin:'top', delay: 100})
sr.reveal('.info', {origin:'top', delay: 300})
//aboutme
sr.reveal('.line1', {delay: 100})
sr.reveal('.line2', {delay: 200})
sr.reveal('.line3', {delay: 300})
sr.reveal('.line4', {delay: 400})
sr.reveal('.line5', {delay: 500})
//portfolio
sr.reveal('.content', {interval: 200})
