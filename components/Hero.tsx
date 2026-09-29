"use client";

import { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================================
         NAVBAR
      ========================================================= */

      const navbar = document.querySelector(".navbar");
      const menuButton = document.querySelector(".navbar__menu");
      const mobileMenu = document.querySelector(".mobile-menu");
      const mobileLinks = gsap.utils.toArray<HTMLAnchorElement>(
        ".mobile-menu__links"
      );

      gsap.fromTo(
        navbar,
        {
          y: -40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      ScrollTrigger.create({
        start: "80px top",
        onEnter: () => navbar?.classList.add("navbar--scrolled"),
        onLeaveBack: () => navbar?.classList.remove("navbar--scrolled"),
      });

      /* Mobile menu */

      const menuTimeline = gsap.timeline({
        paused: true,
        reversed: true,
      });

      menuTimeline
        .to(mobileMenu, {
          yPercent: 0,
          duration: 0.7,
          ease: "power4.out",
        })
        .fromTo(
          mobileLinks,
          {
            y: 30,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.35"
        );

      menuButton?.addEventListener("click", () => {
        if (menuTimeline.reversed()) {
          menuTimeline.play();
          menuButton.classList.add("is-active");
          document.body.style.overflow = "hidden";
        } else {
          menuTimeline.reverse();
          menuButton.classList.remove("is-active");
          document.body.style.overflow = "";
        }
      });

      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          menuTimeline.reverse();
          menuButton?.classList.remove("is-active");
          document.body.style.overflow = "";
        });
      });

      /* =========================================================
         GLOBAL POPUP REVEAL
         No left/right animation
      ========================================================= */

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 45,
            scale: 0.94,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================================================
         POPUP GROUP
      ========================================================= */

      gsap.utils.toArray<HTMLElement>(".reveal-group").forEach((group) => {
        const items = gsap.utils.toArray<HTMLElement>(
          (group as HTMLElement).querySelectorAll(".reveal-item")
        );

        gsap.fromTo(
          items,
          {
            y: 35,
            scale: 0.95,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================================================
         HERO
      ========================================================= */

      const heroTimeline = gsap.timeline();

      heroTimeline
        .fromTo(
          ".hero__eyebrow",
          {
            y: 25,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".hero__title-line",
          {
            y: 70,
            opacity: 0,
            scale: 0.92,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".hero__description",
          {
            y: 30,
            opacity: 0,
            scale: 0.97,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".hero__button",
          {
            y: 25,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        );

      /* Hero scroll */

      gsap.to(".hero__content", {
        y: -80,
        opacity: 0.2,
        scale: 0.96,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* =========================================================
         PROBLEM SECTION
      ========================================================= */

      gsap.to(".problem__word", {
        y: -100,
        opacity: 0.12,
        scrollTrigger: {
          trigger: ".problem",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.utils.toArray<HTMLElement>(".problem__statement").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 55,
            scale: 0.94,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================================================
         SOLUTION
      ========================================================= */

      gsap.to(".solution__background-word", {
        y: -120,
        scale: 1.08,
        scrollTrigger: {
          trigger: ".solution",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =========================================================
         WHAT WE DO
      ========================================================= */

      gsap.utils.toArray<HTMLElement>(".what__line").forEach((line) => {
        gsap.fromTo(
          line,
          {
            y: 40,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================================================
         PROCESS
      ========================================================= */

      gsap.fromTo(
        ".process__line-progress",
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: ".process",
            start: "top 65%",
            end: "bottom 75%",
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".process__item").forEach((item) => {
        gsap.fromTo(
          item,
          {
            y: 50,
            scale: 0.94,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================================================
         UNMEASURED
      ========================================================= */

      gsap.fromTo(
        ".unmeasured__word",
        {
          y: 80,
          scale: 0.8,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".unmeasured",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".unmeasured__content",
        {
          y: 50,
          scale: 0.94,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".unmeasured__content",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =========================================================
         BUSINESSES
      ========================================================= */

      gsap.utils.toArray<HTMLElement>(".business-card").forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 60,
            scale: 0.9,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to(card, {
          y: -20,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      /* =========================================================
         ABOUT
      ========================================================= */

      gsap.to(".about__background-word", {
        y: -120,
        scale: 1.08,
        opacity: 0.8,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =========================================================
         CONTACT
      ========================================================= */

      gsap.fromTo(
        ".contact__content",
        {
          y: 70,
          scale: 0.92,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* =========================================================
         MAGNETIC BUTTONS
      ========================================================= */

      document.querySelectorAll(".magnetic").forEach((button) => {
        const el = button as HTMLElement;

        el.addEventListener("mousemove", (e) => {
          const rect = el.getBoundingClientRect();

          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(el, {
            x: x * 0.18,
            y: y * 0.18,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
          });
        });
      });

      /* =========================================================
         NAVBAR DARK MODE
      ========================================================= */

      const darkSections = gsap.utils.toArray<HTMLElement>(
        ".problem, .unmeasured, .about"
      );

      darkSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 80px",
          end: "bottom 80px",

          onEnter: () => {
            navbar?.classList.add("navbar--dark");
          },

          onEnterBack: () => {
            navbar?.classList.add("navbar--dark");
          },

          onLeave: () => {
            navbar?.classList.remove("navbar--dark");
          },

          onLeaveBack: () => {
            navbar?.classList.remove("navbar--dark");
          },
        });
      });

      /* Refresh */

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={pageRef}>

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero" id="home">

        <div className="hero__content">

          {/* <div className="hero__eyebrow">
            <span className="hero__dot" />
            CREDIT ASSESSMENT / ASIA
          </div> */}

          <h1 className="hero__title">

            <span className="sr-only">
              AI-powered credit assessment for small-business lenders
            </span>

            <span className="hero__title-line" aria-hidden="true">
              Helping lenders
            </span>

            <span className="hero__title-line" aria-hidden="true">
              see beyond
            </span>

            <span className="hero__title-line hero__title-line--accent" aria-hidden="true">
              the  books
            </span>

          </h1>

          <div className="hero__bottom">

            <p className="hero__description">
              The shop is real. The customers are real. But the books tell only part of the story.
              Fintilla is building an AI-powered platform to help lenders see the business itself.
            </p>

            <a
              href="mailto:sherrey@fintilla.com"
              className="navbar__contact talk_button magnetic hero__button"
            >
              <span>Talk to us</span>
            </a>

          </div>

        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>SCROLL TO EXPLORE</span>
          <span className="hero__scroll-line" />
        </div>

      </section>


      {/* =====================================================
          PROBLEM
      ===================================================== */}

      <section className="problem" id="problem" aria-labelledby="problem-title">
        <div className="container">
          <div className="about__headline-wrap">
            <h2 id="problem-title" className="reveal businesses-title">
              The businesses behind the application
              <br />
            </h2>
          </div>
          <div className="problem__content">
            <p className="problem__statement">
              A shopkeeper buying more stock.
            </p>
            <p className="problem__statement">
              A workshop owner hiring another pair of hands.
            </p>
            <p className="problem__statement">
              A family growing its business.
            </p>
            <p className="problem__statement">
              They need a loan. Limited records make it harder to assess them.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          UNMEASURED
      ===================================================== */}

      <section className="unmeasured" id="how-it-works" aria-labelledby="how-it-works-title">
        <div className="container">
          <div className="unmeasured__content reveal-group">
            <div className="about__headline-wrap ">
              <h2 id="how-it-works-title" className="reveal-item">
                From a guided session to lending insights
                <br />
              </h2>
            </div>
            <div className="unmeasured__para">
              <p className="reveal-item">
                Borrowers answer questions in a guided session on their own phone.
              </p>
              <p className="reveal-item">
                Fintilla turns what they share into an assessment, with  evidence and reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>

     


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        className="about"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="about__grid" aria-hidden="true" />

        <div className="about__background-word" aria-hidden="true">
          FINTILLA
        </div>

        <div className="container">
          <div className="about__content reveal-group">
            <div className="about__number reveal-item" style={{ visibility: "hidden" }} aria-hidden="true">
              07
            </div>
            <div className="about__main">
              <div className="about__headline-wrap">
                <h2 id="about-title" className="reveal-item">
                  Built by people who understand lending and AI
                  <br />
                </h2>
              </div>
              <div className="about__description">
                <p className="reveal-item">
                  We are a Singapore-based team with experience building fintech businesses and AI platforms across Asia.
                </p>
                <p className="reveal-item">
                  We are building Fintilla for lenders serving small businesses with limited financial records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        className="contact"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="container">
          <div className="contact__content">
            <div className="about__headline-wrap">
              <h2 id="contact-title" className="reveal-item businesses-title">
                Talk to Us
                <br />
              </h2>
              <p>
                Lend to small businesses? We would love to hear your challenges and share what we are building.
              </p>
            </div>
            <a
              href="mailto:sherrey@fintilla.com"
              className="contact__button magnetic"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </div>

      </section>

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

    </div>
  );
}