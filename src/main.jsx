// HashRouter -> Ba'zi sabablarga ko'ra URL manzillarini serverga yubora olmaydigan yoki yubora olmaydigan veb-brauzerlarda foydalanish uchun mo'ljallangan.
// zarur bulmasa ishlatmaslik yaxshi

import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;

const About = () => <h2>About Page</h2>;

const App = () => {
  return (
    // HashRouter initialEntries={["/"]} ->  nima activeligi ko'rsatish uchun
    <HashRouter initialEntries={["/"]}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
