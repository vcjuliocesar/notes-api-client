// src/components/Register.js
import React from 'react';

const Register = () => {
  return (
    <div className="auth auth--register">
      <form className="auth__form">
        <h2 className="auth__title">Register</h2>
        
        <div className="auth__field">
          <label htmlFor="username" className="auth__label">Username</label>
          <input type="text" id="username" className="auth__input" required />
        </div>

        <div className="auth__field">
          <label htmlFor="email" className="auth__label">Email</label>
          <input type="email" id="email" className="auth__input" required />
        </div>

        <div className="auth__field">
          <label htmlFor="password" className="auth__label">Password</label>
          <input type="password" id="password" className="auth__input" required />
        </div>

        <button type="submit" className="auth__button">Register</button>
        <p className="auth__text">
          Already have an account? <a href="/login" className="auth__link">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
