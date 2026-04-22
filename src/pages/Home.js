import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import profilePic from "./np.jpeg";

const skills = [
  { cat: 'Languages',    items: ['Java', 'C', 'MySQL'] },
  { cat: 'CS Concepts',  items: ['Data Structures & Algorithms', 'Object Oriented Programming'] },
  { cat: 'AI / ML',      items: ['Machine Learning', 'Natural Language Processing', 'Explainable AI (LIME)'] },
  { cat: 'Design Tools', items: ['Canva'] },
  { cat: 'Web',          items: ['React', 'React Router', 'GitHub Pages'] },
];

const interests = [
  { label: 'Drawing & Painting' },
  { label: 'Thriller Movies'    },
  { label: 'Kabaddi & Kho Kho'  },
  { label: 'Social Service'     },
];

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="hero__eyebrow fade-up">Computer Science Engineer · Mahindra University</p>
          
          <p className="hero__subtitle fade-up-3">
            Passionate about NLP, AI, and crafting meaningful software
          </p>
          <div className="hero__actions fade-up-4">
            <NavLink to="/projects" className="btn btn-filled">View Projects →</NavLink>
          </div>
        </div>

        <div className="hero__scroll">
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* ── ABOUT STRIP ───────────────────────────── */}
      <section className="about-strip">
        <div className="container about-strip__inner">
          <div className="about-strip__text">
            <p>
              I'm a B.Tech Integrated CSE student at Mahindra University, Hyderabad,
              with a strong foundation in algorithms, machine learning, and Java-based
              application development.
            </p>
          </div>
          <div className="about-strip__divider" />
          <div className="about-strip__text">
            <p>
              I love solving real-world problems through technology — from detecting fake news
              with NLP to building desktop utility apps with Java Swing. My goal is to create
              impactful, explainable AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ME (full) ───────────────────────── */}
      <section className="about section-pad">
        <div className="container about__inner">
          <div className="about__photo-col">
            <div className="about__photo-frame">
                
                <img 
                src={profilePic} 
                alt="profile" 
                className="about__photo-placeholder" 
                />

                <div className="about__photo-border" />
            </div>

            <div className="about__contact-card">
                <h3>Personal Details</h3>
                <ul>
                <li><span>📍</span> 60, Nilagiri, Hyderabad – 500043</li>
                <li><span>📞</span> +91 91215 14362</li>
                <li><span>✉️</span> nainakruthip@gmail.com</li>
                <li><span>🎓</span> Se23umcs067@mahindrauniversity.edu.in</li>
                </ul>
            </div>
            </div>

          <div className="about__text-col">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              <em>Nainakruthi Pendyala</em>
            </h2>
            <p className="about__tagline">Your friendly CSE explorer — curious, creative &amp; code-driven.</p>

            <p className="about__body">
              I'm currently pursuing B.Tech in Integrated Computer Science &amp; Engineering at
              Mahindra University (Aug 2023 – Ongoing), maintaining a CGPA of <strong>6.18/10</strong> through
              5 semesters of rigorous coursework in DSA, ML, NLP, and OOP.
            </p>
            <p className="about__body">
              Prior to university, I scored <strong>86.6%</strong> in Intermediate at SR Junior College, Karimnagar,
              and an exceptional <strong>100%</strong> in 10th grade at Abhyasa School, Jagtial.
            </p>

            <div className="about__research">
              <h3>Research Interests</h3>
              <div className="tags">
                <span>Explainable AI</span>
                <span>Natural Language Processing</span>
                <span>Machine Learning</span>
                <span>Desktop App Development</span>
                <span>Fake News Detection</span>
              </div>
            </div>

            <NavLink to="/projects" className="btn" style={{ marginTop: '1.5rem' }}>
              See My Projects →
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────── */}
      <section className="skills section-pad" style={{ background: 'var(--blush-light)' }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>What I Bring</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Skills &amp; Expertise
          </h2>

          <div className="skills__grid">
            {skills.map((s) => (
              <div key={s.cat} className="skill-card">
                <h3 className="skill-card__cat">{s.cat}</h3>
                <ul>
                  {s.items.map(item => (
                    <li key={item}><span className="skill-dot" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENT + INTERESTS ───────────────── */}
      <section className="extras section-pad">
        <div className="container extras__inner">
          <div className="award-card">
            <p className="section-label">Achievement</p>
            <h3>2nd Prize — NASA Drawing Competition</h3>
            <p>Karimnagar, 2021</p>
          </div>

          <div className="interests-card">
            <p className="section-label">Beyond the Screen</p>
            <h3 className="section-title" style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>
              Interests &amp; Activities
            </h3>
            <div className="interests__grid">
              {interests.map(i => (
                <div key={i.label} className="interest-item">
                  <span className="interest-icon">{i.icon}</span>
                  <span>{i.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="cta">
        <div className="container cta__inner">
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title">Ready to work together?</h2>
          <p>Open to internships, research collaborations, and exciting projects.</p>
          <div className="cta__actions">
            <a href="https://github.com/naina-kruthi" target="_blank" rel="noreferrer" className="btn">
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}