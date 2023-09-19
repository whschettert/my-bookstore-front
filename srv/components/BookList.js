// BookList.js
import React, { useEffect, useState } from 'react';
function BookList({ username, password }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   // Initialize the destination service
   const destService = xsenv.getServices({ dest: { tag: 'Backend' } });

   // Use the destination configuration in your code
   const destination = destService.dest;
 
   // Example: Accessing the destination URL
   const apiUrl = destination.url;

  useEffect(() => {

    // Create an Authorization header with the authenticated credentials
    const headers = new Headers();
    headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);

    // Make the API request with authentication
    fetch(`${apiUrl}/books`, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data); // Update the state with the fetched books
        setIsLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false even in case of an error
      });
  }, [username, password]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
