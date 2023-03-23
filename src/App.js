
import './App.css';
import Hashing from './Hashing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Hashing />} />
          <Route path="/" element={<h1>Login to open Hash code genrator</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
