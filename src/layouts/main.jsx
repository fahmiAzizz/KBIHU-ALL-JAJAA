import Navbar from '../components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Home from '../components/Home.jsx'
import Contact from '../components/Contact.jsx'
import About from '../components/About.jsx'
import GrafikJamaah from '../components/about/GrafikJamaah.jsx';
import IzinOperasional from '../components/about/IzinOperasional.jsx';
import Kepengurusan from '../components/about/Kepengurusan.jsx';
import Partnership from '../components/about/Partnership.jsx';
import VisiMisi from '../components/about/VisiMisi.jsx';
import Gallery from '../components/Gallery.jsx';
import Regulasi from '../components/Regulasi.jsx';
import Berita from '../components/Berita.jsx';

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/grafikjamaah" element={<GrafikJamaah />} />
                        <Route path="/izinoperasional" element={<IzinOperasional />} />
                        <Route path="/kepengurusan" element={<Kepengurusan />} />
                        <Route path="/partnership" element={<Partnership />} />
                        <Route path="/visimisi" element={<VisiMisi />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/regulasi" element={<Regulasi />} />
                        <Route path="/berita" element={<Berita />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Main;