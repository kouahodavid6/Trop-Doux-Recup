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
            <Hero />
            <Urgence />
            <Fonctionnement />
            <Rejoindres />
            <Impact />
            <Temoignages />
            <FAQ />
            <Footer />
        </>
    );
}

export default Home;