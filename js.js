//contact button
const contact = document.querySelector('.contact_button');

//menu show and hidden
const navMenu = document.getElementById('nav-menu'),
      toogleMenu = document.getElementById('nav-toogle'),
      closeMenu = document.getElementById('nav-close')


//show
toogleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

//hidden
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*Remove menu*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//scrool section active link
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY  > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}

contact.addEventListener('click', ()=>{
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "username",
    //     Password : "password",
    //     To : 'edwardsifi0@gmail.com',
    //     From : "comodinking@gmail.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
})