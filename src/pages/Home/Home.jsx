import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Urgence from "./components/Urgence";
import Fonctionnement from "./components/Fonctionnement";
import Rejoindres from "./components/Rejoindres";
import Impact from "./components/Impact";
import Temoignages from "./components/Temoignages";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const Home = () => {
    return(
        <>
            <Navbar />
            {/* Animation d'apparition initiale pour Hero */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Hero />
            </div>

            {/* Animations au scroll pour les autres sections */}
            <div data-aos="fade-up" data-aos-delay="100">
                <Urgence />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Fonctionnement />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Rejoindres />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Impact />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Temoignages />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <FAQ />
            </div>
            <Footer />
        </>
    );
}

export default Home;