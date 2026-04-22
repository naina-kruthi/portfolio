import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Fake News Detection Using NLP with Explainable AI',
    period: 'Oct 2025 – Dec 2025',
    org: 'Mahindra University, Hyderabad',
    tags: ['NLP', 'Machine Learning', 'Python', 'LIME', 'Streamlit'],
    category: 'AI / ML',
    color: '#c9788a',
    icon: '🧠',
    description:
      'Built an NLP-based classification model to detect whether a news article is fake or real. Integrated LIME (Local Interpretable Model-agnostic Explanations) to provide transparent, human-readable explanations for model predictions. Also implemented real-time URL-based article analysis through a Streamlit web interface.',
    highlights: [
      'NLP pipeline for text classification (fake vs. real news)',
      'LIME integration for explainable AI predictions',
      'Real-time article analysis via URL using Streamlit',
      'Interactive web dashboard for predictions',
    ],
    github: 'https://github.com/your-username/fake-news-detection',
  },
  {
    id: 2,
    title: 'Utility Bill Management System',
    period: 'Nov 2025 – Dec 2025',
    org: 'Mahindra University, Hyderabad',
    tags: ['Java', 'Java Swing', 'OOP', 'Desktop App', 'GUI'],
    category: 'Desktop App',
    color: '#7a8ac9',
    icon: '💡',
    description:
      'Developed a feature-rich desktop application for managing utility bills using Java Swing. Designed with a clean GUI and followed OOP principles throughout, with modular architecture separating data handling from the user interface.',
    highlights: [
      'Full CRUD operations — Add, Edit, Delete bills',
      'Advanced search, filter, and sorting functionality',
      'Modular OOP architecture (separate data & GUI classes)',
      'Responsive Java Swing GUI with intuitive controls',
    ],
    github: 'https://github.com/your-username/utility-bill-management',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="projects-page">

      {/* Hero */}
      <section className="projects-hero">
        <div className="container">
          <p className="section-label fade-up">My Work</p>
          <h1 className="section-title fade-up-2">
            Projects &amp; <em>Creations</em>
          </h1>
          <p className="projects-hero__sub fade-up-3">
            A showcase of what I've built — from AI-powered NLP models to Java desktop applications.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((p) => (
              <article
                key={p.id}
                className={`project-card ${active === p.id ? 'project-card--active' : ''}`}
              >
                {/* Card Header */}
                <div className="project-card__header" style={{ background: `${p.color}18`, borderColor: `${p.color}44` }}>
                  <div className="project-card__icon" style={{ background: `${p.color}22`, color: p.color }}>
                    {p.icon}
                  </div>
                  <span className="project-card__category" style={{ color: p.color }}>
                    {p.category}
                  </span>
                  <span className="project-card__period">{p.period}</span>
                </div>

                {/* Card Body */}
                <div className="project-card__body">
                  <h2 className="project-card__title">{p.title}</h2>
                  <p className="project-card__org">📍 {p.org}</p>

                  <div className="project-card__tags">
                    {p.tags.map(t => (
                      <span key={t} style={{ borderColor: `${p.color}55`, color: p.color }}>{t}</span>
                    ))}
                  </div>

                  <p className="project-card__desc">{p.description}</p>

                  {/* Highlights accordion */}
                  <button
                    className="project-card__toggle"
                    onClick={() => setActive(active === p.id ? null : p.id)}
                    style={{ color: p.color, borderColor: `${p.color}44` }}
                  >
                    {active === p.id ? '▲ Hide Details' : '▼ Show Highlights'}
                  </button>

                  {active === p.id && (
                    <ul className="project-card__highlights">
                      {p.highlights.map(h => (
                        <li key={h}>
                          <span style={{ color: p.color }}>✦</span> {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card Footer */}
                <div className="project-card__footer">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-filled"
                    style={{ '--btn-bg': p.color, '--btn-hover': p.color + 'cc' }}
                  >
                    View on GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills used */}
      <section className="tech-used">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Technologies Used Across Projects</p>
          <div className="tech-pills">
            {['Java', 'Java Swing', 'Python', 'NLP', 'Machine Learning', 'LIME', 'Streamlit',
              'MySQL', 'React', 'GitHub Pages', 'OOP', 'DSA'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}