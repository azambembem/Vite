import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// BrowserRouter - katta orab turuvchi hisoblanadi. keyin katta projlarda main.tsx fileda turadi.
// Routes - parent childlarni o'rab turuvchi
// Route - child
// Link - keyingi pagega otib yuboruvchi

const Home = () => (
  <div style={{ padding: "20px" }}>
    <h2>Home Page</h2>
    <p>Welcome to the home page!</p>
  </div>
);

const About = () => (
  <div style={{ padding: "20px" }}>
    <h2>About Page</h2>
    <p>This is the about page!</p>
  </div>
);

const Contact = () => (
  <div style={{ padding: "20px" }}>
    <h2>Contact Page</h2>
    <p>Contact us at: contact@example.com</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ display: "inline" }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
