import CardRejoindre from '../../components/CardRejoindre';
import { restaurantData, clientData } from '../../../data/data';

const Rejoindres = () => {
    return (
        <section className="py-16 sm:py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16 text-white">
                    Rejoignez le <span className="text-[#ffa700]">mouvement</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl lg:max-w-6xl mx-auto">
                    <CardRejoindre {...restaurantData} />
                    <CardRejoindre {...clientData} />
                </div>
            </div>
        </section>
    );
};

export default Rejoindres;