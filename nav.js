// nav.js

const NAV_ITEMS = [
  { text: "Home", url: "index.html" },
  { text: "Data", url: "data/index.html" },
  { text: "Games", url: "games/index.html" },
  { text: "Timeline", url: "timeline/index.html" },
  { text: "Contact", url: "contact/index.html" },
];

function buildNav() {
  const navMenu = document.querySelector(".navbar-menu");
  const footerLinks = document.querySelector(".site-footer .links");
  navMenu.innerHTML = "";
  footerLinks.innerHTML = "";

  NAV_ITEMS.forEach((item) => {
    const href = (window.navBase || "") + item.url;

    // Navbar
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href;
    a.textContent = item.text;
    if (href === window.location.pathname.split("/").pop()) {
      a.classList.add("active");
    }
    li.appendChild(a);
    navMenu.appendChild(li);

    // Footer
    const fa = document.createElement("a");
    fa.href = href;
    fa.textContent = item.text;
    footerLinks.appendChild(fa);
  });
}

document.addEventListener("DOMContentLoaded", buildNav);
