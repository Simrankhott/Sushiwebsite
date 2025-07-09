
gsap.registerPlugin(ScrollTrigger);

// Advanced GSAP Timeline for Navigation Bar
const navTimeline = gsap.timeline();
navTimeline.from("nav", {
  y: -60,
  opacity: 0,
  skewY: 8,
  duration: 0.7,
  ease: "expo.out"
})
.from("nav ul li", {
  y: -30,
  opacity: 0,
  stagger: 0.12,
  duration: 0.5,
  ease: "back.out(1.7)"
}, "-=0.4");

// Advanced Hero Section Animation
const heroTimeline = gsap.timeline();
heroTimeline
.from(".object-contain", {
  x: -120,
  rotate: -20,
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  ease: "power4.out"
})
.from(".absolute.top-80.left-3", {
  x: 120,
  rotate: 10,
  scale: 0.8,
  opacity: 0,
  duration: 0.7,
  ease: "power4.out"
}, "-=0.5");

// Animate hero text characters individually (if possible)
if (document.querySelector(".absolute.top-80.left-3")) {
  const heroText = document.querySelector(".absolute.top-80.left-3");
  const chars = heroText.innerHTML.split(/(<br\s*\/?>)/g).map(str =>
    str.match(/<br/) ? str : [...str].map(c => `<span class="hero-char">${c}</span>`).join("")
  ).join("");
  heroText.innerHTML = chars;
  gsap.from(".absolute.top-80.left-3 .hero-char", {
    y: 40,
    opacity: 0,
    rotateX: 90,
    stagger: 0.08,
    duration: 0.7,
    ease: "back.out(2)",
    delay: 0.2
  });
}

// Newsletter Section Advanced Animation
gsap.from(".gsap-newsletter-title", {
  scrollTrigger: {
    trigger: ".gsap-newsletter-title",
    start: "top 85%",
    scrub: 1,
  },
  y: 60,
  opacity: 0,
  scale: 0.95,
  rotateX: 30,
  duration: 0.7,
  ease: "expo.out"
});
gsap.from(".gsap-newsletter-subtitle", {
  scrollTrigger: {
    trigger: ".gsap-newsletter-subtitle",
    start: "top 90%",
    scrub: 1,
  },
  y: 40,
  opacity: 0,
  scale: 0.95,
  rotateY: 30,
  duration: 0.6,
  delay: 0.1,
  ease: "expo.out"
});
gsap.from(".gsap-newsletter-form input, .gsap-newsletter-form button", {
  scrollTrigger: {
    trigger: ".gsap-newsletter-form",
    start: "top 95%",
    scrub: 1,
  },
  y: 30,
  opacity: 0,
  scale: 0.95,
  stagger: 0.15,
  duration: 0.5,
  delay: 0.2,
  ease: "back.out(1.7)"
});

// Footer Section Advanced Animation
gsap.from(".gsap-footer", {
  scrollTrigger: {
    trigger: ".gsap-footer",
    start: "top 98%",
    scrub: 1,
  },
  y: 60,
  opacity: 0,
  scale: 0.97,
  duration: 0.7,
  ease: "expo.out"
});
gsap.from(".gsap-footer > div, .gsap-footer > ul, .gsap-footer > .flex", {
  scrollTrigger: {
    trigger: ".gsap-footer",
    start: "top 99%",
    scrub: 1,
  },
  y: 40,
  opacity: 0,
  scale: 0.95,
  rotateY: 20,
  duration: 0.5,
  stagger: 0.12,
  delay: 0.1,
  ease: "back.out(1.7)"
});
gsap.from(".gsap-footer ul li", {
  scrollTrigger: {
    trigger: ".gsap-footer",
    start: "top 99%",
    scrub: 1,
  },
  y: 20,
  opacity: 0,
  scale: 0.9,
  stagger: 0.08,
  duration: 0.4,
  delay: 0.2,
  ease: "back.out(1.7)"
});
gsap.from(".gsap-footer .flex a", {
  scrollTrigger: {
    trigger: ".gsap-footer",
    start: "top 99%",
    scrub: 1,
  },
  y: 20,
  opacity: 0,
  scale: 0.8,
  rotate: 20,
  stagger: 0.08,
  duration: 0.4,
  delay: 0.3,
  ease: "back.out(2)"
});

// Animate all sections with advanced effect
document.querySelectorAll("section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      scrub: 1,
    },
    y: 60,
    opacity: 0,
    scale: 0.97,
    rotateX: 10,
    duration: 0.6,
    delay: i * 0.08,
    ease: "expo.out"
  });
});

// Animate all images with advanced effect
document.querySelectorAll("img").forEach((img, i) => {
  gsap.fromTo(
    img,
    { scale: 0.85, opacity: 0, rotate: -10, filter: "blur(4px)" },
    {
      scrollTrigger: {
        trigger: img,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)",
      duration: 0.7,
      delay: i * 0.04,
      ease: "expo.out"
    }
  );
});

// Animate all buttons with a pop-in effect
document.querySelectorAll("button").forEach((btn, i) => {
  gsap.from(btn, {
    scrollTrigger: {
      trigger: btn,
      start: "top 98%",
      toggleActions: "play none none reverse",
    },
    scale: 0.7,
    opacity: 0,
    rotate: 10,
    duration: 0.5,
    delay: i * 0.05,
    ease: "back.out(2)"
  });
});

// Animate all links with underline grow and color flicker
document.querySelectorAll("a").forEach((a, i) => {
  gsap.from(a, {
    scrollTrigger: {
      trigger: a,
      start: "top 99%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 10,
    duration: 0.4,
    delay: i * 0.03,
    ease: "power2.out"
  });
});

// Animate all h1, h2, h3 with letter stagger
["h1", "h2", "h3"].forEach(tag => {
  document.querySelectorAll(tag).forEach((el, i) => {
    if (!el.classList.contains("gsap-letters")) {
      el.classList.add("gsap-letters");
      const letters = el.textContent.split("").map(l => `<span class="gsap-letter">${l}</span>`).join("");
      el.innerHTML = letters;
      gsap.from(el.querySelectorAll(".gsap-letter"), {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        rotateX: 60,
        stagger: 0.04,
        duration: 0.5,
        delay: i * 0.05,
        ease: "back.out(2)"
      });
    }
  });
});
