// register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    year: "1934",
    title: "FHA Created",
    desc: "Institutionalized redlining in mortgage lending.",
  },
  {
    year: "1968",
    title: "Fair Housing Act",
    desc: "Outlawed housing discrimination based on race.",
  },
  {
    year: "1980s–2000s",
    title: "Urban Disinvestment",
    desc: "Redlined areas faced chronic underfunding.",
  },
  {
    year: "Today",
    title: "Lasting Impacts",
    desc: "Many communities still struggle with housing access.",
  },
  // …add more events here
];

const container = document.getElementById("timeline");
events.forEach((e, i) => {
  const card = document.createElement("div");
  card.className = "event";
  card.innerHTML = `
    <div class="year">${e.year}</div>
    <div class="title">${e.title}</div>
    <div class="desc">${e.desc}</div>
  `;
  container.append(card);

  gsap.to(card, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    ease: "power2.out",
    delay: i * 0.1,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});
