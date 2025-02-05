import './App.css'
import WebAgencySite from './components/Company'
import WebAgencySite2 from './Company'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ComingSoonPage from './components/CommingSoon';


function App() {

  return (
    <>
      <Router>
        <div className="min-h-screen text-black-900 font-sans">

        <Routes>
        <Route path="/" element={<WebAgencySite />} />
        <Route path="/c" element={<WebAgencySite2 />} />
        <Route path="/commingsoon" element={<ComingSoonPage />} />
          
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
