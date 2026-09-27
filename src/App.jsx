import Hero from "./components/Hero";

function App() {
  return (
    <main>

      <Hero />

      {/* ABOUT */}
      <section className="section about" id="about">

        <div className="section-top">
          <span>02</span>
          <span>ABOUT / INTRO</span>
        </div>

        <div className="about-grid">

          <h2>
            TURNING
            <br />
            <span>IDEAS</span>
            <br />
            INTO
            <br />
            <span>EXPERIENCES.</span>
          </h2>

          <div className="about-copy">

            <p className="large-copy">
              I&apos;m Kanika Sri — an Information Technology
              student and aspiring Full Stack Developer who
              enjoys creating useful, modern and meaningful
              digital products.
            </p>

            <p>
              I work across frontend, backend and databases,
              combining clean interfaces with practical
              functionality. I like taking a problem from
              an idea to something people can actually use.
            </p>

            <div className="about-details">

              <div>
                <span>BASED IN</span>
                <strong>COIMBATORE</strong>
              </div>

              <div>
                <span>DEGREE</span>
                <strong>B.Sc IT</strong>
              </div>

              <div>
                <span>GRADUATION</span>
                <strong>2027</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section className="section skills">

        <div className="section-top">
          <span>03</span>
          <span>CAPABILITIES / STACK</span>
        </div>

        <h2 className="section-heading">
          WHAT I
          <br />
          <span>WORK WITH.</span>
        </h2>

        <div className="skill-list">

          <div className="skill-row">
            <span>01</span>
            <h3>FRONTEND</h3>
            <p>REACT / JAVASCRIPT / HTML / CSS</p>
            <b>↗</b>
          </div>

          <div className="skill-row">
            <span>02</span>
            <h3>BACKEND</h3>
            <p>NODE.JS / EXPRESS / PYTHON</p>
            <b>↗</b>
          </div>

          <div className="skill-row">
            <span>03</span>
            <h3>DATABASE</h3>
            <p>MYSQL / SQLITE / SQL</p>
            <b>↗</b>
          </div>

          <div className="skill-row">
            <span>04</span>
            <h3>PROGRAMMING</h3>
            <p>JAVA / PYTHON / C</p>
            <b>↗</b>
          </div>

          <div className="skill-row">
            <span>05</span>
            <h3>TOOLS</h3>
            <p>GIT / GITHUB / VS CODE</p>
            <b>↗</b>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section className="section projects" id="projects">

        <div className="section-top">
          <span>04</span>
          <span>SELECTED WORK / PROJECTS</span>
        </div>

        <div className="projects-heading">

          <h2>
            THINGS
            <br />
            <span>I BUILT.</span>
          </h2>

          <p>
            A selection of projects built while exploring
            product development, web technologies and
            real-world problem solving.
          </p>

        </div>


        <div className="project-stack">

          <article className="project">

            <div className="project-top">
              <span>01 / 02</span>
              <span>AI / WEB APPLICATION</span>
            </div>

            <div className="project-body">

              <div className="project-art startfund">
                <div className="art-circle" />
                <div className="art-text">AI</div>
                <span>STARTFUND</span>
              </div>

              <div className="project-info">

                <h3>
                  STARTFUND
                  <span>AI</span>
                </h3>

                <p>
                  An AI-assisted investment platform designed
                  to connect ideas, investors and portfolio
                  management in one digital experience.
                </p>

                <div className="tags">
                  <span>REACT</span>
                  <span>NODE.JS</span>
                  <span>MYSQL</span>
                  <span>AI</span>
                </div>

                <a
  href="https://investment-wzg8.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  VIEW PROJECT
  <span>↗</span>
</a>

              </div>

            </div>

          </article>


          <article className="project">

            <div className="project-top">
              <span>02 / 02</span>
              <span>CIVIC / WEB PLATFORM</span>
            </div>

            <div className="project-body reverse">

              <div className="project-art civic">
                <div className="map-grid" />
                <div className="map-point p1" />
                <div className="map-point p2" />
                <div className="map-point p3" />
                <div className="art-text">CITY</div>
                <span>CIVIC / 01</span>
              </div>

              <div className="project-info">

                <h3>
                  CITIZEN
                  <span>ISSUES</span>
                </h3>

                <p>
                  A civic issue reporting platform where users
                  can report problems, track complaints and
                  monitor resolution progress.
                </p>

                <div className="tags">
                  <span>REACT</span>
                  <span>NODE.JS</span>
                  <span>MYSQL</span>
                </div>

                <a
  href="https://citizen-issue-dashboard.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  VIEW PROJECT
  <span>↗</span>
</a>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section className="section experience">

        <div className="section-top">
          <span>05</span>
          <span>EXPERIENCE / LEARNING</span>
        </div>

        <div className="experience-layout">

          <h2>
            WHERE I
            <br />
            <span>LEARNED.</span>
          </h2>

          <div className="experience-item">

            <div className="exp-year">
              2026
            </div>

            <div>

              <p className="exp-company">
                NITROWARE TECHNOLOGIES
              </p>

              <h3>
                FULL STACK
                <br />
                DEVELOPMENT INTERN
              </h3>

              <p className="exp-description">
                Completed a one-month internship focused on
                Full Stack Development. Worked with Django
                and Bootstrap while developing practical
                programming and problem-solving skills.
              </p>

              <div className="tags">
                <span>DJANGO</span>
                <span>BOOTSTRAP</span>
                <span>FULL STACK</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact" id="contact">

        <div className="contact-number">
          06 / CONTACT
        </div>

        <div className="contact-content">

          <p>HAVE AN IDEA?</p>

          <h2>
            LET&apos;S MAKE
            <br />
            <span>IT REAL.</span>
          </h2>

          <a
            href="mailto:kanikasrimurugan@gmail.com"
            className="contact-btn"
          >
            START A CONVERSATION
            <span>↗</span>
          </a>

        </div>

        <footer>

          <span>KS®</span>

          <span>
            B.Sc INFORMATION TECHNOLOGY
          </span>

          <span>
            COIMBATORE / INDIA
          </span>

          <span>
            2026 — 27
          </span>

        </footer>

      </section>

    </main>
  );
}

export default App;
