import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrandDetails from "./components/ServiceBrands/BrandDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App border-l-8 border-[#00419D]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:brandName" element={<BrandDetails />} />
          <Route path="/services" element={<Services/>} />
          {/* <Route path="/corporations" component={Corporations} />
          
        <Route path="/news-events" component={NewsEvents} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
