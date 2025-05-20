// nav.js

const NAV_ITEMS = [
  { text: "Home", url: "" },
  { text: "Data", url: "data/" },
  { text: "Games", url: "games/" },
  { text: "Timeline", url: "timeline/" },
  { text: "Get Involved", url: "get-involved/" },
  { text: "Contact", url: "contact/" },
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
