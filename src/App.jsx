import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Media from 'react-media';

import Beranda from './pages/Beranda_page';
import Faq from './pages/Faq_page';
import FaqMobile from './pages/Faq_mobile_page';
import TanyaApoteker from './pages/Tanya_apoteker_page';
import TanyaApotekerMobile from './pages/Tanya_apoteker_mobile_page';
import DirektoriObat from './pages/Direktori_obat_page';
import DirektoriObatMobile from './pages/Direktori_obat_mobile_page';

import Header from './components/Header';
import Footer from './components/Footer';
import HeaderMobile from './components/HeaderMobile';
import FooterMobile from './components/FooterMobile';

function App() {
  return (
    <Media queries={{ mobile: '(max-width: 599px)', desktop: '(min-width: 600px)' }}>
      {(matches) => (
        <Router>
          {matches.mobile ? <HeaderMobile /> : <Header />}

          <Routes>
            <Route path="/" element={<Beranda />} />

            <Route path="/faq" element={matches.desktop ? <Faq /> : <FaqMobile />} />

            <Route path="/tanya-apoteker" element={matches.desktop ? <TanyaApoteker /> : <TanyaApotekerMobile />} />

            <Route
              path="/direktori-obat/*"
              element={matches.desktop ? <DirektoriObat /> : <DirektoriObatMobile />}
            />
          </Routes>

          {matches.mobile ? <FooterMobile /> : <Footer />}
        </Router>
      )}
    </Media>
  );
}

export default App;
