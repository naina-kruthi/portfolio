import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">NAINAKRUTHI PENDYALA</p>
        <p className="footer__sub">B.Tech Integrated CSE · Mahindra University · Hyderabad</p>
        <div className="footer__links">
          <a href="mailto:nainakruthip@gmail.com">nainakruthip@gmail.com</a>
          <span>·</span>
          <a href="mailto:Se23umcs067@mahindrauniversity.edu.in">College Email</a>
          <span>·</span>
          <a href="https://github.com/naina-kruthi" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} · Made with React</p>
      </div>
    </footer>
  );
}