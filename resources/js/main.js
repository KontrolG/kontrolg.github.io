var toggleNavigationElement = document.querySelector(".toggle-navigation");

function preventHashChange(event) {
  event.preventDefault();
}

function toggleOpen(event) {
  var target = event.target;
  toggleSiblingElement(target);
  toggleParentNavigation(target);
}

function toggleSiblingElement(target) {
  var parentButtonElement = target.closest("a");
  var siblingElement = parentButtonElement.nextElementSibling;
  siblingElement.classList.toggle("open");
}

function toggleParentNavigation(target) {
  var parentNavigation = target.closest("nav");
  parentNavigation.classList.toggle("main-navigation-opened");
}

toggleNavigationElement.addEventListener("click", preventHashChange);
toggleNavigationElement.addEventListener("click", toggleOpen);
