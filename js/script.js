/////////////////////////////////////////////
//Make Mobile Navigation Work //////////////
/////////////////////////////////////////////


const btnNav = document.querySelector('.btn-mobile-nav');

const headerElement  = document.querySelector('.header')
// 'nav-open'
// 'btn-mobile-nav'
btnNav.addEventListener('click', function(){
    headerElement.classList.toggle('nav-open')
})