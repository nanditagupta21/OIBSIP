import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Portfolio.</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">

          <div className="hero-text">
            <p className="intro">HELLO, I'M</p>
            <h1>Nandita Gupta</h1>
            <h2>Computer Science Student & Web Developer</h2>

            <p className="description">
              I enjoy building responsive websites and
              creating useful web applications.
            </p>

            <a href="#projects" className="hero-button">
              View My Work
            </a>
          </div>

          <div className="hero-image">
            <img src="/profile.png" alt="My Profile" />
          </div>

        </div>
      </section>
      <section id="about" className="about">
  <div className="about-content">
    <p className="section-tag">GET TO KNOW ME</p>
    <h2>About Me</h2>

    <p>
      I'm a Computer Science student passionate about web development
      and building practical digital solutions. I enjoy learning new
      technologies and turning ideas into useful applications.
    </p>

    <p>
      I have worked on projects using React, Node.js, Express.js,
      and MongoDB, including a group travel planning application.
      I'm currently improving my development skills and exploring
      opportunities to work on real-world projects.
    </p>
  </div>
</section>
    
     <section id="skills" className="skills">
  <div className="skills-content">
    <p className="section-tag">WHAT I WORK WITH</p>
    <h2>My Skills</h2>

    <div className="skills-grid">
      <div className="skill-card">Java</div>
      <div className="skill-card">JavaScript</div>
      <div className="skill-card">Python</div>
      <div className="skill-card">SQL</div>
      <div className="skill-card">React.js</div>
      <div className="skill-card">Node.js</div>
      <div className="skill-card">Express.js</div>
      <div className="skill-card">MongoDB</div>
      <div className="skill-card">HTML & CSS</div>
      <div className="skill-card">Git & GitHub</div>
    </div>
  </div>
</section>

     <section id="projects" className="projects">
  <div className="projects-content">
    <p className="section-tag">MY RECENT WORK</p>
    <h2>My Projects</h2>

    <div className="projects-grid">
      <div className="project-card">
        <h3>TripSync – Group Travel Planner</h3>
        <p>
          A group travel planning application that helps people
          discover suitable destinations and plan trips together
          based on their preferences and budgets.
        </p>
        <div className="project-tech">
          React.js · Node.js · Express.js · MongoDB
        </div>
        <a
          href="https://github.com/nanditagupta21/group-trip-finderr"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub →
        </a>
      </div>

      <div className="project-card">
        <h3>Context-Aware Banking Chatbot</h3>
        <p>
          An NLP-based chatbot project designed to understand
          customer queries, identify changing intents and
          generate relevant banking support responses.
        </p>
        <div className="project-tech">
          Python · NLP · FastAPI · Machine Learning
        </div>
        <span className="project-note">Project under development</span>
      </div>
    </div>
  </div>
</section>

    <section id="contact" className="contact">
  <div className="contact-content">
    <p className="section-tag">LET'S CONNECT</p>
    <h2>Contact Me</h2>
    <p>
      Have a project in mind or an opportunity to discuss?
      I'd love to hear from you!
    </p>

    <a href="mailto:nanditagupta15569@gmail.com" className="contact-button">
      Send Me an Email
    </a>

    <div className="social-links">
      <a href="https://www.linkedin.com/in/nandita-gupta21/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href="https://github.com/nanditagupta21/" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  </div>
</section>

<footer className="footer">
  <p>© 2026 Nandita Gupta. All Rights Reserved.</p>
</footer>
    </div>
  );
}

export default App;