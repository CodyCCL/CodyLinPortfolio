
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// layout
import Layout from "./Layout";

// pages
// import Home from "./pages/Home/index";
import Aboutme from "./pages/aboutme";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./pages/resume";


const App = () => {
  return (
    <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Aboutme />} />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />

            </Routes>
          </Layout>
    </Router>
  );
};

export default App;
