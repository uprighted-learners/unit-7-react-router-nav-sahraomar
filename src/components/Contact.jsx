import React from 'react'
import { Link } from 'react-router-dom';

function Contact () {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Say hello!</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Contact