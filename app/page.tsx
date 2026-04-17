"use client"

import { Mail, Phone, User } from "lucide-react"
import { useEffect, useState } from "react"


export default function Home() {
  const [active, setActive] = useState("about")

  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" } 
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav className="navbar">
        <a href="#about" className="logo">
          My Portfolio
        </a>

        <ul>
          <li>
            <a href="#about" className={active === "about" ? "active" : ""}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className={active === "skills" ? "active" : ""}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={active === "projects" ? "active" : ""}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={active === "contact" ? "active" : ""}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id="about" className="snap-section">
        <div className="about-wrapper">

          {/* SECTION HEADER */}
          <div className="about-header">
          </div>

          <div className="about-container">

            {/* IMAGE */}
            <div className="about-image">
              <img src="/images/myphoto.png" alt="My Photo" title="My Photo" />
            </div> 

            {/* TEXT */}   
            <div className="about-text">
              <h1 className="about-title">
                Hello! <br></br>I&apos;m <span>Giemmel Adryeane Magno</span> 
              </h1>

              <p className="about-subtext">
                I am a graduate of the University of Santo Tomas and an aspiring Quality Assurance Engineer with a strong foundation in programming and a passion for ensuring software excellence. With the experience of working on various projects, and a number of testing tools, I am eager to contribute my skills and enthusiasm to a dynamic team.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="skills" className="snap-section">
        <div className="skills-wrapper">

          {/* HEADER */}
          <div className="skills-header">
            <p className="skills-label">Skills</p>
          </div>

          {/* CONTENT */}
          <div className="skills-container">

            {/* LEFT SIDE */}
            <div className="skills-half">  
              <div className="skills-icons"> 
              <div className="icon-box">    <img src="/images/html-icon.png" alt="HTML" title="HTML" /></div>
              <div className="icon-box">    <img src="/images/php-icon.png" alt="PHP" title="PHP" /></div>
              <div className="icon-box">    <img src="/images/javascript-icon.png" alt="JavaScript" title="JavaScript" /></div>
              <div className="icon-box">    <img src="/images/postman-icon.png" alt="Postman" title="Postman" /></div>
              <div className="icon-box">    <img src="/images/playwright-icon.png" alt="Playwright Software" title="Playwright Software" /></div>
            </div>
              <p className="skills-text"> 
                I have a wide background in programming languages such as HTML, PHP, and JavaScript, as well as utilizing frameworks
                such as React, NextJS, and Bootstrap to enhance projects. I also have experience utilizing MongoDB as a back-end database. The tools for testing i have
                experience in are Postman and Playwright where I can perform API testing and Automation testing.              </p>
            </div> 

            {/* RIGHT SIDE */}
            <div className="skills-half">
              <div className="skills-tags">
                <div className="tag-box">Communication</div>
                <div className="tag-box">Collaboration</div>
                <div className="tag-box">Adaptability</div>
                <div className="tag-box">Willingness to learn</div>
                <div className="tag-box">Time Management</div>
                <div className="tag-box">Feedback</div>

              </div>

              <p className="skills-text">
                My main strengths are constant collaboration and communication with my team to ensure that we are all on the same page and is able to 
                deliver the highest quality of work possible, while minimizing any potential issues in our way. I am adaptable to the situations I am presented
                with and is always willing to learn new things to further improve myself and my work, alongside efficient Time Management. I also value 
                feedback as it allows me to see things from a different perspective and helps me grow and understand myself as a person, and as a professional.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="projects-wrapper snap-section">
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
      </div>
      <div className="projects-container">

          {/* PROJECT 1 */}
          <div className="project-card">
            <div className="project-image"><img src="/images/crph.jpg" alt="CryptPH" title="CryptPH" /> </div>

            <div className="project-tags">
              <span className="project-tag">Capstone Project</span>
              <span className="project-tag">Typescript</span>
              <span className="project-tag">NextJS</span>
              <span className="project-tag">API Integration</span>
              <span className="project-tag">Gamification</span>
            </div>

            <p className="project-text">
              A gamified cryptocurrency based application which aims to educate its users about managing cryptocurrency, while simultaneously as acting as a historical data tracker for cryptocurrency coins embedded in CoinsPH, Maya and GCash that operates in real-time.
            </p>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <div className="project-image">
              <div className="project-image"><img src="/images/kstudio.jpg" alt="K-Studio" title="K-Studio" /> 
              </div>
            </div>

            <div className="project-tags">
              <span className="project-tag">Academic Project</span>
              <span className="project-tag">PHP</span> 
              <span className="project-tag">MySQL</span>
              <span className="project-tag">Quality Assurance</span>
            </div>

            <p className="project-text">
              A booking system made for a photography studio which contains a content management system for the admin, a booking system for customers, and a dashboard for monitoring and managing appointments. 
              I was responsible for most of the backend development alongside executing test cases created by the team.
            </p>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-image"><img src="/images/symph-graph.png" alt="Symph" title="Symph" /> 
              </div>
            </div>

            <div className="project-tags"> 
              <span className="project-tag">Internship</span> 
              <span className="project-tag">Automation Testing</span>
              <span className="project-tag">Regression Testing</span>
              <span className="project-tag">Bug Tracking</span> 
              <span className="project-tag">Documentation</span>

            </div>

            <p className="project-text">
              During my internship at Symph, I worked on testing a multi-company sustainability dashboard. I built and ran automated test cases using Playwright, and used ClickUp to log and track bugs. I also worked closely with developers and team leads to help resolve issues and improve the overall stability and quality of the system.
            </p>
          </div>

        </div>
      </section> 

      <section id="contact" className="contact-wrapper snap-section">
        <div className="contact-box">

          <h2 className="contact-title">Contact</h2> 

          <div className="contact-list">

            <div className="contact-line">
              <Mail className="contact-icon" />
              <span className="contact-value">giemmelmagno2013@gmail.com</span>
            </div>

            <div className="contact-line">
              <Phone className="contact-icon" />
              <span className="contact-value">+63 919 318 3524</span>
            </div>

            <div className="contact-line">
              <User className="contact-icon" />
              <span className="contact-value">Giemmel Adryeane A. Magno</span>
            </div>

          </div>

        </div>
      </section>
      <footer className="footer">
        <p>© 2026 Giemmel Magno</p>
      </footer>
    </>  
  )
}