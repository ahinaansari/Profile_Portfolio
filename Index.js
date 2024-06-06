let MenuBtn = document.getElementById("MenuBtn")

MenuBtn.addEventListener('click',function(e){
    document.querySelector("body").classList.toggle('mobile-nav-action')
    this.classList.toggle("fa-xmark")
})


let typed = new Typed(".auto-input",{
    strings: ['front-End Developer!', "Back-End Developer", "Freelancer" , " Social-Bloger" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay : 2000,
    loop : true,
})

