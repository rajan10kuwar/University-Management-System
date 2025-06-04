import React, { useState, useEffect } from 'react';
import './App.css';

// Main component to display a list of students
function App() {
  // State for students, loading, and error
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch students from backend on mount
  useEffect(() => {
    // Async function to fetch data
    const fetchStudents = async () => {
      try {
        // GET request to backend API
        const response = await fetch('http://localhost:5000/api/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        // Parse JSON data
        const data = await response.json();
        // Update state
        setStudents(data);
        setLoading(false);
      } catch (err) {
        // Handle errors
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); // Run once on mount

  // Show loading message
  if (loading) {
    return <div>Loading students...</div>;
  }

  // Show error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render student list
  return (
    <div className="App">
      <h1>Student List</h1>
      <ul className="student-list">
        {/* Map through students to display each one */}
        {students.map(student => (
          <li key={student.StudentID}>
            ID: {student.StudentID}, Name: {student.Name}, Credits: {student.CreditsEarned}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;