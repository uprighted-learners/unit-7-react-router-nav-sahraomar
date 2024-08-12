import React from 'react'
import { Link } from 'react-router-dom';


function Home () {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <Link to="/about">Go to About</Link>

    </div>
  )
}

export default Home