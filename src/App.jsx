import './App.css'
import WebAgencySite from './components/Company'
// import WebAgencySite2 from './Company'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ComingSoonPage from './components/CommingSoon';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermAndCondition';
import RefundPolicy from './components/Refund';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactForm from './components/ContactUs';
import PricingPage from './components/PricingPage';
// import QuizQuestion from './components/QuizQuestion';


function App() {

  return (
    <>
      <Router>
        <div className="min-h-screen text-black-900 font-sans">
          <ScrollToTop/>
          <Header/>
          <Routes>
            <Route path="/" element={<WebAgencySite />} />
            {/* <Route path="/c" element={<WebAgencySite2 />} />
        <Route path="/q" element={<QuizQuestion />} /> */}
            <Route path="/commingsoon" element={<ComingSoonPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/term-condition" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App
