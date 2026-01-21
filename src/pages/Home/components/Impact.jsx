import { stats } from "../../../data/data";

const Impact = () => {
    return (
        <section id="impact" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-center mb-3 text-black">
                    Notre <span className="text-[#ff7a00]/80">impact</span>
                </h2>
                <p className="text-center text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto">
                    Ensemble, nous faisons la différence contre le gaspillage alimentaire
                </p>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            <div className={`bg-gradient-to-br ${stat.color} p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 text-center space-y-5 sm:space-y-6`}>
                                <div className="flex justify-center">
                                    <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-2xl">
                                        <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                    </div>
                                </div>

                                <p className="text-4xl sm:text-5xl md:text-5xl font-black text-white">
                                    {stat.value}
                                </p>

                                <p className="text-lg sm:text-xl text-white/90 font-semibold">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Impact;