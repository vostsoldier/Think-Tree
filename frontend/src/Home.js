import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './Home.css';
import api from './api/apiWrapper';
import logo from './assets/logo.webp';
import FadeInSection from './components/FadeInSection';

function Home({ onLogin }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('token');
    const isDemo = localStorage.getItem('isDemo') === 'true';
    return Boolean(token) || isDemo;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isDemo = localStorage.getItem('isDemo') === 'true';
    setIsAuthenticated(Boolean(token) || isDemo);
  }, []);

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleDemo = () => {
    onLogin(null, true); 
    navigate('/app');
  };

  const handleDashboardClick = () => {
    if (isAuthenticated) {
      navigate('/members');
    }
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo-title">
          <span className="title">Think Tree</span>
        </div>
        <div className="nav-links">
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <header className="hero-section">
        <h1 className="product-name">Think Tree</h1>
        <p className="tagline">Organize your thoughts and ideas seamlessly.</p>
        <div className="button-group">
          {!isAuthenticated && (
            <>
              <button className="btn signup" onClick={() => navigate('/signup')}>
                Signup
              </button>
              <button className="btn login" onClick={() => navigate('/login')}>
                Login
              </button>
            </>
          )}
          {isAuthenticated && (
            <button 
              className="btn dashboard" 
              onClick={handleDashboardClick}
            >
              Dashboard
            </button>
          )}
          <button className="btn demo" onClick={() => handleDemo()}>
            Demo
          </button>
        </div>
      </header>
      <main className="main-content">
        <FadeInSection>
          <section className="features-section">
            <h2>Features</h2>
            <div className="features">
              <div className="feature-item">
                <h3>Intuitive Interface</h3>
                <p>Easy-to-use interface to map out your ideas.</p>
              </div>
              <div className="feature-item">
                <h3>Real-time Collaboration</h3>
                <p>Work with your team in real-time.</p>
              </div>
              <div className="feature-item">
                <h3>Secure Storage</h3>
                <p>Your data is safe with our secure storage solutions.</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="about-section">
            <h2>About Think Tree</h2>
            <p>
              Think Tree is a powerful tool designed to help you organize your thoughts, collaborate with others, and visualize complex ideas effortlessly. Whether you're brainstorming solo or working with a team, Think Tree provides the features you need to bring your ideas to life.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="testimonial-section">
            <h2>What Our Users Say</h2>
            <div className="testimonials">
              <div className="testimonial-item">
                <p>"Think Tree has transformed the way I organize my projects. It's intuitive and incredibly powerful."</p>
                <h4>- Jane Doe</h4>
              </div>
              <div className="testimonial-item">
                <p>"Collaborating with my team has never been easier. Think Tree keeps us all on the same page."</p>
                <h4>- John Smith</h4>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Think Tree. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;