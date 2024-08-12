import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (

    <Router>
      <div style={{backgroundColor: '#f0f033', minHeight: '100vh'}}>
        <nav>
          <ul>
            <li>
           <Link to="/">Home</Link>
          </li>
       <li>
        <Link to="/about">About</Link>
       </li>
       <li>
        <Link to="/contact">Contact</Link>
       </li>
          </ul>
        </nav>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>

</Routes>

      </div>

    </Router>

  );
}

export default App;
