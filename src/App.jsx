
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// layout
import Layout from "./Layout";

// pages
 import Home from "./pages/Home";
import Aboutme from "./pages/aboutme";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./pages/resume";


const App = () => {
  return (
    <Router>
          
            <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/Home/index" element={<Home />} />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
</Route>
            </Routes>
          
    </Router>
  );
};

export default App;
