import CardRejoindre from '../../components/CardRejoindre';
import { restaurantData, clientData } from '../../../data/data';

const Rejoindres = () => {
    return (
        <section id='rejoindres' className="py-12 sm:py-16 md:py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12 md:mb-16 text-white">
                    Rejoignez le <span className="text-[#ff7a00]/80">mouvement</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl lg:max-w-6xl mx-auto">
                    <CardRejoindre {...restaurantData} />
                    <CardRejoindre {...clientData} />
                </div>
            </div>
        </section>
    );
};

export default Rejoindres;