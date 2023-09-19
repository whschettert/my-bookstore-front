// CredentialPrompt.js

import React, { useState } from 'react';

function CredentialPrompt({ onCredentialsSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the credentials to the backend for authentication
    try {
      await onCredentialsSubmit(username, password);

      // Clear the username and password fields after successful submission
      setUsername('');
      setPassword('');
    } catch (error) {
      // Handle authentication error (e.g., display an error message)
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div>
      <h1>Enter Your Credentials</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CredentialPrompt;
