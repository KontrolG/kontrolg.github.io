const goToSectionInHash = event => {
  const sectionSelector = getDocumentHash();
  if (sectionSelector) {
    scrollToSection(sectionSelector);
  }
};

const getDocumentHash = () => location.hash;

const scrollToSection = sectionSelector => {
  const sectionElement = getSectionElement(sectionSelector);
  const scrollOptions = getScrollOptionsFrom(sectionElement);
  scrollTo(scrollOptions);
};

const getSectionElement = sectionSelector =>
  document.querySelector(sectionSelector);

const getScrollOptionsFrom = ({ offsetTop, offsetLeft }) => ({
  top: offsetTop,
  left: offsetLeft,
  behavior: "smooth"
});

window.addEventListener("load", goToSectionInHash);

const toggleNavigationElement = document.querySelector(".toggle-navigation");

const toggleOpen = event => {
  event.preventDefault();
  const { target } = event;
  const parentButtonElement = target.closest("a");
  const siblingElement = parentButtonElement.nextElementSibling;
  siblingElement.classList.toggle("open");
};

const toggleNavigationBackground = event => {
  const { target } = event;
  const parentNavigation = target.closest("nav");
  parentNavigation.classList.toggle("main-navigation-opened");
};

toggleNavigationElement.addEventListener("click", toggleOpen);
toggleNavigationElement.addEventListener("click", toggleNavigationBackground);
