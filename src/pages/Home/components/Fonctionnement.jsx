import { steps } from '../../../data/data';

const Fonctionnement = () => {
    return(
        <section id='fonctionnement' className='py-16 sm:py-20 bg-gray-50'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-center mb-12 sm:mb-16 text-black">
                    Comment ça <span className="text-[#ff7a00]/80">fonctionne</span> ?
                </h2>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className={`bg-gradient-to-br ${step.color} p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col items-center text-center space-y-5 sm:space-y-6`}>
                                <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-2xl">
                                    <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                </div>

                                <div className="bg-white text-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black">
                                    {index + 1}
                                </div>

                                <h3 className="text-xl sm:text-2xl font-black text-white">
                                    {step.title}
                                </h3>

                                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Fonctionnement;