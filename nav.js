// nav.js


const NAV_GROUPS = [
  {
    label: "Resources",
    items: [
      { text: "Data", url: "data/" },
      { text: "Games", url: "games/" },
      { text: "Timeline", url: "timeline/" },
    ],
  },
  {
    label: "Community",
    items: [
      { text: "Get Involved", url: "get-involved/" },
      { text: "Stories", url: "stories/" },
      { text: "Contact", url: "contact/" },
    ],
  },
];

const NAV_ITEMS = [
  { text: "Home", url: "" },
];

function buildNav() {
  const navMenu = document.querySelector(".navbar-menu");
  const footerLinks = document.querySelector(".site-footer .links");
  navMenu.innerHTML = "";
  footerLinks.innerHTML = "";


  // Home link
  NAV_ITEMS.forEach((item) => {
    const href = (window.navBase || "") + item.url;
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

  // Grouped links as dropdowns
  NAV_GROUPS.forEach((group) => {
    // Navbar dropdown
    const li = document.createElement("li");
    li.classList.add("dropdown");
    const span = document.createElement("span");
    span.textContent = group.label;
    li.appendChild(span);

    const ul = document.createElement("ul");
    ul.classList.add("dropdown-menu");
    group.items.forEach((item) => {
      const href = (window.navBase || "") + item.url;
      const subLi = document.createElement("li");
      const a = document.createElement("a");
      a.href = href;
      a.textContent = item.text;
      if (href === window.location.pathname.split("/").pop()) {
        a.classList.add("active");
      }
      subLi.appendChild(a);
      ul.appendChild(subLi);

      // Footer
      const fa = document.createElement("a");
      fa.href = href;
      fa.textContent = item.text;
      footerLinks.appendChild(fa);
    });
    li.appendChild(ul);
    navMenu.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", buildNav);