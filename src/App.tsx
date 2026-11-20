
import "./App.css";

const technologies = [
  "React.js",
  "TypeScript",
  "Python",
  "Flask",
  "MongoDB",
];

function App() {
  return (
    <main className="portfolio">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <nav className="navbar">
        <a href="#home" className="logo">
          RAM<span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="intro-text">HELLO, I'M</p>

          <h1>
            VIGNESH
            <br />
            <span>RAM</span>
          </h1>

          <div className="role-line">
            <span className="line" />
            <h2>FULL STACK DEVELOPER</h2>
          </div>

          <p className="hero-description">
            I build modern, responsive and scalable web applications
            with clean code, thoughtful design and a passion for
            solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Get In Touch
            </a>
          </div>

          <div className="hero-footer">
            <span>REACT.JS</span>
            <span>PYTHON</span>
            <span>MONGODB</span>
            <span>TYPESCRIPT</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="developer-card">
            <div className="card-top">
              <span>DEVELOPER PROFILE</span>
              <span className="card-dot">●</span>
            </div>

            <div className="avatar">
              <span>VR</span>
            </div>

            <h3>VIGNESHRAM</h3>
            <p>Full Stack Developer</p>

            <div className="card-divider" />

            <div className="card-info">
              <span>EXPERIENCE</span>
              <strong>~ 3 YEARS</strong>
            </div>

            <div className="card-info">
              <span>FOCUS</span>
              <strong>WEB DEVELOPMENT</strong>
            </div>

            <div className="card-divider" />

            <div className="card-bottom">
              <span>CREATING DIGITAL EXPERIENCES</span>
              <span>✳</span>
            </div>
          </div>

          <div className="tech-bubble bubble-one">React.js</div>
          <div className="tech-bubble bubble-two">Python</div>
          <div className="tech-bubble bubble-three">MongoDB</div>
          <div className="tech-bubble bubble-four">TypeScript</div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="content-section" id="about">
        <p className="section-label">01 / ABOUT ME</p>
        <h2 className="section-title">
          Building things for the <span>digital world.</span>
        </h2>

        <div className="about-content">
          <p>
            I'm a Full Stack Developer with almost 3 years of experience
            building web applications. I enjoy turning ideas into
            useful, responsive and easy-to-use digital experiences.
          </p>
          <p>
            My development toolkit includes React.js, TypeScript,
            Python, Flask and MongoDB. I'm always interested in
            learning new technologies and solving meaningful problems.
          </p>
        </div>

        <div className="about-stats">
          <div><strong>~3</strong><span>YEARS EXPERIENCE</span></div>
          <div><strong>5+</strong><span>CORE TECHNOLOGIES</span></div>
          <div><strong>∞</strong><span>WILLINGNESS TO LEARN</span></div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="content-section" id="skills">
        <p className="section-label">02 / MY TOOLKIT</p>
        <h2 className="section-title">
          Technologies I <span>work with.</span>
        </h2>

        <div className="skills-grid">
          {[
            { name: "React.js", type: "FRONTEND" },
            { name: "TypeScript", type: "LANGUAGE" },
            { name: "JavaScript", type: "LANGUAGE" },
            { name: "Python", type: "BACKEND" },
            { name: "Flask", type: "BACKEND" },
            { name: "MongoDB", type: "DATABASE" },
          ].map((skill) => (
            <div className="skill-card" key={skill.name}>
              <span>{skill.type}</span>
              <h3>{skill.name}</h3>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="content-section" id="projects">
        <p className="section-label">03 / SELECTED WORK</p>
        <h2 className="section-title">
          Things I'm <span>building.</span>
        </h2>
        <p className="section-description">
          A selection of projects that demonstrate my development
          skills. More projects will be added as they are completed.
        </p>

        <div className="projects-grid">
          <article className="project-card">
            <span>PROJECT 01</span>
            <h3>Task Management App</h3>
            <p>
              A planned application for organizing tasks, tracking
              progress and managing daily work.
            </p>
            <div className="project-tags">React · TypeScript · Flask · MongoDB</div>
            <span className="coming-soon">IN DEVELOPMENT</span>
          </article>

          <article className="project-card">
            <span>PROJECT 02</span>
            <h3>Expense Tracker</h3>
            <p>
              A planned application to record expenses and understand
              spending through a simple dashboard.
            </p>
            <div className="project-tags">React · Python · MongoDB</div>
            <span className="coming-soon">PLANNED</span>
          </article>

          <article className="project-card">
            <span>PROJECT 03</span>
            <h3>Mini CRM</h3>
            <p>
              A planned customer management application to organize
              contacts and track customer interactions.
            </p>
            <div className="project-tags">React · Flask · MongoDB</div>
            <span className="coming-soon">PLANNED</span>
          </article>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="content-section contact-section" id="contact">
        <p className="section-label">04 / GET IN TOUCH</p>
        <h2 className="section-title">
          Have a project in <span>mind?</span>
        </h2>
        <p className="section-description">
          I'm open to new opportunities and conversations.
          Feel free to reach out.
        </p>

        <a
          href="mailto:vigneshramdeveloper@gmail.com"
          className="primary-button contact-button"
        >
          Let's Talk <span>↗</span>
        </a>

        <div className="social-links">
          <a
            href="https://github.com/vigneshram-developer"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a href="mailto:vigneshramdeveloper@gmail.com">
            Email ↗
          </a>
        </div>
      </section>

      <div className="scroll-indicator">
        <span /> SCROLL TO EXPLORE
      </div>
    </main>
  );
}

export default App;
