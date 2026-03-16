import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Home from '@/pages/Home';
import UTPT from '@/pages/UTPT';
import Sponsorship from '@/pages/Sponsorship';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Archives from '@/pages/Archives';
import EventDetail from '@/pages/EventDetail';
import Gallery from '@/pages/Gallery';
import Team from '@/pages/Team';
import Register from '@/pages/Register';
import Privacy from '@/pages/Privacy';
import Refund from '@/pages/Refund';
import Terms from '@/pages/Terms';
import PaymentSuccess from '@/pages/PaymentSuccess';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/utpt" element={<UTPT />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/event/:eventName" element={<EventDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            {/* Redirects for legacy routes if needed */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/refund-policy" element={<Refund />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
