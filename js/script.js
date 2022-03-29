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



/////////////////////////////////////////////
// Sticky scrolling part here  //////////////
/////////////////////////////////////////////

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false){
        document.body.classList.add('sticky')
    }
    if(ent.isIntersecting === true){
        document.body.classList.remove('sticky')
    }
},{
    root:null,
    threshold:0
});
obs.observe(sectionHeroEl)