import { useEffect, useRef } from "react";

function Hero() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
  const hero = heroRef.current;
  const visual = visualRef.current;

  if (!hero || !visual) return;

  const move = (e) => {
    if (window.innerWidth <= 700) return;

    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    hero.style.setProperty("--mx", `${e.clientX}px`);
    hero.style.setProperty("--my", `${e.clientY}px`);

    visual.style.transform = `
      translate3d(${x * 35}px, ${y * 35}px, 0)
      rotateX(${-y * 8}deg)
      rotateY(${x * 10}deg)
    `;
  };

  window.addEventListener("mousemove", move);

  return () => {
    window.removeEventListener("mousemove", move);
  };
}, []);

  return (
    <section className="hero" ref={heroRef}>

      <div className="hero-light" />

      <nav className="navbar">

        <a href="#" className="logo">
          KS<span>®</span>
        </a>

        <div className="nav-middle">
          <span className="live-dot" />
          OPEN TO WORK
        </div>

        <a href="#contact" className="nav-contact">
          CONTACT <span>↗</span>
        </a>

      </nav>

      <div className="hero-main">

        <div className="hero-meta">
          <span>01</span>
          <span>PORTFOLIO / 2026</span>
        </div>

        <h1 className="hero-heading">
          <span className="heading-line">KANIKA</span>
          <span className="heading-line outline">SRI<span>.</span></span>
        </h1>

        <div className="hero-info">

          <p>
            FULL STACK DEVELOPER
            <br />
            BUILDING DIGITAL EXPERIENCES
            <br />
            WITH PURPOSE.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="main-btn">
              EXPLORE WORK
              <span>↗</span>
            </a>

            <a href="#about" className="text-btn">
              MORE ABOUT ME
              <span>↓</span>
            </a>
          </div>

        </div>

      </div>

      <div className="hero-visual" ref={visualRef}>

        <div className="sphere-shadow" />

        <div className="sphere">

          <div className="sphere-highlight" />

          <div className="sphere-grid horizontal h1" />
          <div className="sphere-grid horizontal h2" />
          <div className="sphere-grid horizontal h3" />
          <div className="sphere-grid horizontal h4" />

          <div className="sphere-grid vertical v1" />
          <div className="sphere-grid vertical v2" />
          <div className="sphere-grid vertical v3" />

        </div>

        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />

        <div className="visual-label">
          <span>INTERACTIVE</span>
          <span>OBJECT_01</span>
        </div>

      </div>

      <div className="hero-footer">

        <div className="location">
          COIMBATORE, INDIA
        </div>

        <div className="scroll">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </div>

        <div className="hero-index">
          01 <span>/</span> 06
        </div>

      </div>

      <div className="grain" />

    </section>
  );
}

export default Hero;
