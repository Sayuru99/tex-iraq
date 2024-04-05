import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrandDetails from "./components/ServiceBrands/BrandDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App border-l-8 border-[#00419D]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:brandName" element={<BrandDetails />} />
          {/* <Route path="/corporations" component={Corporations} />
          <Route path="/brands" component={Brands} />
          <Route path="/news-events" component={NewsEvents} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
