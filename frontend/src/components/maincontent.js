import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function MainContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    fetch('/api/user-data')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleLogin = () => {
    // Perform login logic here, then set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <main>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {isLoggedIn ? (
            <p>Welcome, {userData ? userData.username : 'user'}!</p>
          ) : (
            <div>
              <p>Please log in to access the app.</p>
              <button onClick={handleLogin}>Log In</button>
            </div>
          )}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </main>
  );
}

export default MainContent;
