import { steps } from '../../../data/data';

const Fonctionnement = () => {
    return(
        <section className='py-20 bg-white'>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-black">
                    Comment ça <span className="text-[#ffa700]">fonctionne</span> ?
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className={`bg-gradient-to-br ${step.color} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col items-center text-center space-y-6`}>
                                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                                    <step.icon className="w-12 h-12 text-white" />
                                </div>

                                <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black">
                                    {index + 1}
                                </div>

                                <h3 className="text-2xl font-black text-white">
                                    {step.title}
                                </h3>

                                <p className="text-white/90 text-lg leading-relaxed">
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