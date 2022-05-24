const btns = document.querySelectorAll(".btn-filter");
const image = document.querySelectorAll(".image__box");
const lgo = document.querySelector(".lg");
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    console.log(filter);
    image.forEach((img) => {
      if (filter == "all") {
        img.style.display = "grid";
      } else {
        if (img.classList.contains(filter)) {
          img.style.display = "grid";
        } else {
          img.style.display = "none";
        }
      }
    });
  });
}
// img.classList.contains(filter)
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("section nav ul li a");
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove(".active");
        // document
        //   .querySelector("section nav ul li a[href*=" + id + "]")
        //   .classList.add("active");
      });
    }
  });
};
const parent = document.querySelector("image__box");
document.querySelectorAll(".image__box-item").forEach((imge) => {
  imge.onclick = () => {
    document.querySelector(".pop-up").style.display = "block";
    document.querySelector(".pop").src = imge.getAttribute("src");
  };
});
document.querySelector(".times").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};
document.querySelector(".pop-up").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};
// .querySelector("section nav ul li a[href*=" + id + "]")

//SCROLLSPY//

// (function () {
//   "use strict";

//   var section = document.querySelectorAll(".part");
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function (e) {
//     sections[e.id] = e.offsetTop;
//   });

//   window.onscroll = function () {
//     var scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector(".active").setAttribute("class", " ");
//         document
//           .querySelector("a[href*=" + i + "]")
//           .setAttribute("class", "active");
//       }
//     }
//   };
// })();
function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}
const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 350px 0px ",
};
const images = document.querySelectorAll("[data-src]");

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);
images.forEach((image) => {
  imgObserver.observe(image);
});
//testing

var navbar = document.getElementById("navid");
var menu = document.getElementById("menu");
window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
const icon = document.querySelector(".icon");
const list = document.querySelector(".navigation__list");

// icon.onclick( myFunction(){
//   list.style
// }

// )
// icon.addEventListener(click, myFunction);
// function myFunction() {
//   list.style.display = "flex";
//   console.log("i love you");
// }
icon.onclick = function () {
  // list.style.flexDirection = "column";
  list.classList.toggle("show");
  console.log("redghfj");
};
// function fun() {
// document.getElementById("para").innerHTML = "Welcome to the javaTpoint.com";
