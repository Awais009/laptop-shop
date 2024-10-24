import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);

    // Close navbar collapse and dropdowns
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse.show");
    const dropdowns = document.querySelectorAll(".dropdown-menu.show");

    if (navbarCollapse) {
      navbarToggler.click();
    }

    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
