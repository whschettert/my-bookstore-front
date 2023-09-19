// App.js

import React, { useState } from 'react';
import CredentialPrompt from './components/CredentialPrompt'; // Import the CredentialPrompt component
import BookList from './components/BookList'; // Import the BookList component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleCredentialsSubmit = async (username, password) => {
    // Simulate sending credentials to the backend for authentication
    // You can replace this with your actual authentication logic
    try {
      // Perform authentication logic here (e.g., sending credentials to the backend)
      // If authentication is successful, set isAuthenticated to true
      // Otherwise, handle authentication failure
      if (username === 'yourUsername' && password === 'yourPassword') {
        setIsAuthenticated(true);
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      // Handle authentication error (e.g., display an error message)
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <BookList />
      ) : (
        <CredentialPrompt onCredentialsSubmit={handleCredentialsSubmit} />
      )}
    </div>
  );
}

export default App;
