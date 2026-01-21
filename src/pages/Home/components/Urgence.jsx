import { AlertCircle, CheckCircle } from 'lucide-react';

const Urgence = () => {
    return (
        <section id='urgence' className="py-8 sm:py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-black">
                        <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#ff7a00]/80" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
                            Chaque soir, des plats cuisinés finissent à la poubelle.
                        </h2>
                    </div>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold">
                        Nous disons <span className="text-[#ff7a00]/80 font-black">STOP.</span>
                    </p>

                    <div className="mt-8 sm:mt-12 bg-gradient-to-r from-[#ff7a00]/80 to-[#ff8c00] text-black p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black">
                                TropDouxRécup : la solution gagnant-gagnant
                            </h3>
                        </div>
                        <p className="text-lg sm:text-xl font-semibold">
                            Connecter les restaurants qui ont des invendus avec les clients qui cherchent des bons plans
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Urgence;