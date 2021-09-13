/* list of content
 *global variable declaration.
 *creating nav bar <li> and appending it to the <ul>.
 * helper functions.
 * events and events listeners
 */

/* ______________global variables______________  */
const sections = document.getElementsByTagName("section");
/* getElementsByTagName returns an array like object named HTML collection 
that can be iterated using for loop or foreach*/
const navContainingFragment = document.createDocumentFragment();
//create a fragment to append nav bar li elements before appending to ul to improve performance.
const navUnOrgList = document.getElementById("navbar__list"); // ul element
const scrollUpButton = document.getElementById("scroll__up");
// button when clicked scroll to the top of the page
const scrollUpDiv = document.querySelector("div.scroll__up__container");
// div which contain the scroll up button

/* __creating nav bar <li> and appending it to the <ul>__ */
for (let i = 0; i < sections.length; i++) {
  const navlistItem = document.createElement("li");
  navlistItem.classList.add("menu__link");
  navlistItem.innerHTML = `${sections[i].dataset.nav} `;
  navContainingFragment.appendChild(navlistItem);
  navlistItem.addEventListener("click", () =>
    sections[i].scrollIntoView({ behavior: "smooth" })
  );
}
navUnOrgList.appendChild(navContainingFragment);

/*  using for loop nav list items are added according to number of sections dynamically through:
 *creating an li element using create eleent method.
 * utilizing the section data attribute to add the text of the li dynamicly using innerHTML method
 * then appending the created li to the document fragment and after the loop append the fragment to the ul element.
 * add eventlistener to the li elements, with a click tipe and event handler to scroll into the corresponding
 * section smoothly
 */

/* __helper functions__ */
const allUlLi = document.querySelectorAll(".menu__link");
function activeSection() {
  for (i = 0; i < sections.length; i++) {
    if (
      sections[i].getBoundingClientRect().top < sections[i].clientHeight / 2 &&
      sections[i].getBoundingClientRect().top > -(sections[i].clientHeight / 2)
    ) {
      sections[i].classList.add("your-active-class");
      allUlLi[i].classList.add("active__sec");
    } else {
      sections[i].classList.remove("your-active-class");
      allUlLi[i].classList.remove("active__sec");
    }
  }
}
/* 
this is a helper function to use it when adding an event listener type scroll to activate the section in view port;
*using for loop on sections variable storing the HTML collection that have the section elements
* using getBoundingClientRect and client height to check if the section in the viewport and if it is 
adding "your-active-class" class to it and if not removing that class
*along with adding class active to sections in view port... also aded an active class on the nav <li>.
*/

function activeScrollUp() {
  if (window.scrollY > window.innerHeight) {
    scrollUpDiv.classList.add("scroll__up__active");
  } else {
    scrollUpDiv.classList.remove("scroll__up__active");
  }
}
/*
activeScrollUp=> helper function to make weather the scroll to top button is only
 visible when the user scrolls below the fold of the page.
 window scrollY=>return the numper of pexils scrolled is the Y direction.
 window. innerHeight=> return the height of the window viewport.
*/

document.addEventListener("scroll", activeSection);
/* event listener to activate the section in the viewport */
document.addEventListener("scroll", activeScrollUp);
/* event listener to make the scroll up btn visible when the the user scrolls below the fold of the page.
 */
scrollUpButton.addEventListener("click", () =>
  document.body.scrollIntoView({ behavior: "smooth" })
);
/* 
scrollUpButton=> button is a click-event event target that upon clicking scroll into the top of the body element
through scrollIntoView method
 */

setInterval(() => {
  document.querySelector("header").style.visibility = "hidden";
  document.addEventListener(
    "scroll",
    () => (document.querySelector("header").style.visibility = "visible")
  );
}, 5000);
/* 
*set intervals=> so that the nav bar will appear on loadin and disapear via altering visibility.

*event listener is added=> to change visibility to visible on scrolling.
*/
