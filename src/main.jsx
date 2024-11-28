import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import "swiper/css";
import "swiper/css/autoplay";
import { HeaderSlider, AboutSection, TeamSection } from './HomePage.jsx';
import { Services } from './Services';
import Account from './Account'
import BookingPage from './BookingPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<><HeaderSlider /><AboutSection /><TeamSection /></>} />
        <Route path="/services" element={<Services />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Booking" element={<BookingPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);