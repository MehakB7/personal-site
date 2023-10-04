import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

import details from '../../data/details.json';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const { author, education, jobs } = details;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>{author.name}</h2>
        <p>
          <a href={`mailto:${author.mail}`}>{author.mail}</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m {author.name}. I am a{' '}
        <a href={education.link}>{education.university}</a> graduate and
        {' '}{jobs[0].position} at{' '}
        <a href={`${jobs[0].link}`}>{' '}{jobs[0].company}</a>. Previously, worked as{' '}
        {jobs[1].position} at {' '}
        <a href={`${jobs[0].link}`}>{' '}{jobs[1].company}</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">
        &copy; {} D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p> */}
    </section>
  </section>
);

export default SideBar;
