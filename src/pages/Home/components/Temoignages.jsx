import { testimonials } from "../../../data/data";
import { Star } from "lucide-react";

const Temoignages = () => {
    return (
        <section id="temoignages" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-black">
                    Ils nous font <span className="text-[#ff7a00]/80">confiance</span>
                </h2>
                <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
                    Découvrez les témoignages de notre communauté
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${testimonial.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-6 h-6 ${testimonial.textColor === 'text-black' ? 'text-black fill-black' : 'text-[#ff7a00]/80 fill-[#ff7a00]/80'}`}
                                    />
                                ))}
                            </div>

                            <p className={`${testimonial.textColor} text-lg mb-6 leading-relaxed font-medium`}>
                                "{testimonial.text}"
                            </p>

                            <div className={`border-t ${testimonial.textColor === 'text-black' ? 'border-black/20' : 'border-white/20'} pt-6`}>
                                <p className={`${testimonial.textColor} font-black text-xl`}>
                                    {testimonial.name}
                                </p>
                                <p className={`${testimonial.textColor === 'text-black' ? 'text-black/70' : 'text-white/70'} font-semibold`}>
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Temoignages;