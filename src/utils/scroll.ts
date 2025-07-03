export const scrollToSection = (event: Event) => {
  event.preventDefault();
  const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute(
    "href"
  );
  if (targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerElement = document.querySelector<HTMLElement>("#main-header");
      const headerHeight = headerElement ? headerElement.offsetHeight : 0;

      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};
