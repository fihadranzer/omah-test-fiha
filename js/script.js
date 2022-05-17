/////////////////////////////////////////////
//Make Mobile Navigation Work //////////////
/////////////////////////////////////////////

const btnNav = document.querySelector(".btn-mobile-nav");

const headerElement = document.querySelector(".header");
// 'nav-open'
// 'btn-mobile-nav'
btnNav.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

/////////////////////////////////////////////
// Sticky scrolling part here  //////////////
/////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
obs.observe(sectionHeroEl);

/////////////////////////////////////////////
// Counter part here  //////////////
/////////////////////////////////////////////

// function animateNumber(callBack, from, to, duration) {
//   let start = null,
//     animate = (timestamp) => {
//       start = start || timestamp;
//       let progress = Math.min((timestamp - start) / duration, 1);
//       callBack(progress * (to - from) + from);

//       if (progress < 1) {
//         window.requestAnimationFrame(animate);
//       }
//     };
//   window.requestAnimationFrame(animate);
// }

// let number = document.querySelectorAll(".counter-title");

// let buga = number.forEach((item) => {
//     (item.textContent = Number(Math.floor(item)));
// });

// animateNumber(
//   (value) => {
//     number.forEach((item) => {
//         (item.textContent = Math.floor(value));
//     });
//   },
//   0,
//   200,
//   1000
// );

/////////////////////////////////////////////
// Typing Part part here  //////////////
/////////////////////////////////////////////

const typeTitle = document.querySelectorAll(".typing");

const typeTitleArray = Array.from(typeTitle);

typeTitleArray.forEach((element)=>{
    typeAnimation(element)
})

function typeAnimation(element) {
  let counter = -1;
  const eachItem = element;
  let text = element.innerHTML;
  element.innerHTML = "";

  const writeFunction = () => {
    counter++;
    let test = (element.innerHTML += text.charAt(counter));

    console.log(test)
    if (counter === text.length) {
      eachItem.innerHTML = "";
      counter = -1;
    }
  };

  const interval = setInterval(()=>{
      writeFunction()
  },100)
}

let count = document.querySelectorAll(".counter-title");

let arr = Array.from(count);

arr.map((item) => {
  let startNumber = 0;
  function counterUp() {
    startNumber++;
    item.textContent = startNumber;

    if (startNumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(() => {
    counterUp();
  }, 10);
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//////////////                            /////////////////
///////          TYPE JS ANIMATION STARTS          ////////
//////////////                            /////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// let typeCount = 0;
// let autoTypeText = () => {
//   if (typeCount < textType.dataset.typeingtext.length) {
//     textType.innerHTML += textType.dataset.typeingtext.charAt(typeCount);
//     typeCount++;
//     textArray = textType.innerHTML;;
//   } else {
//     textArray.pop();
//     textType.innerHTML = textArray.join("");
//     if (textArray.length == 0) {
//       typeCount = 0;
//     }
//   }
// };
// setInterval(() => {
//   autoTypeText();
// }, 150);
