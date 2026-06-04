import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!password) {
      alert('Please enter your password.');
      return;
    }

    // Proceed with login
    console.log('Logging in with:', { email, password });
    alert('Login successful!');
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-hero">Welcome Back</div>
        
        <section className="login-shell">
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <input 
                id="email" 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? 'error-input' : ''}
              />
              {emailError && <span className="error-text">{emailError}</span>}
            </div>
            
            <div className="field-group">
              <input 
                id="password" 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <a className="forgot-link" href="#forgot">
              Forgot Password?
            </a>
            
            <button className="login-button" type="submit">
              Log In
            </button>
          </form>
          
          <div className="divider"></div>

          <div className="login-footer">
            <span>Don't have an account?</span>
            <a href="#signup">Sign up</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
