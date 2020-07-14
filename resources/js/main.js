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
