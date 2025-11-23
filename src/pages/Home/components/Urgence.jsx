import { AlertCircle, CheckCircle } from 'lucide-react';

const Urgence = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="flex flex-col items-center justify-center gap-4 text-black">
                        <AlertCircle className="w-16 h-16 text-[#ffa700]" />
                        <h2 className="text-4xl md:text-5xl font-black">
                            Chaque soir, des plats cuisinés finissent à la poubelle.
                        </h2>
                    </div>

                    <p className="text-2xl text-gray-600 font-semibold">
                        Nous disons <span className="text-[#ffa700] font-black">STOP.</span>
                    </p>

                    <div className="mt-12 bg-gradient-to-r from-[#ffa700] to-[#ff8c00] text-black p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center justify-center gap-4 mb-4">
                            <CheckCircle className="w-12 h-12" />
                            <h3 className="text-3xl md:text-4xl font-black">
                                Trop Doux Récup : la solution gagnant-gagnant
                            </h3>
                        </div>
                        <p className="text-xl font-semibold">
                            Connecter les restaurants qui ont des invendus avec les clients qui cherchent des bons plans
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Urgence