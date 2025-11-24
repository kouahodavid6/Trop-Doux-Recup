import { faqs } from "../../../data/data";
import { useState } from 'react';
import { Minus, Plus } from "lucide-react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-white">
                    Questions <span className="text-[#ff7a00]/80">fréquentes</span>
                </h2>
                <p className="text-center text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                    Tout ce que vous devez savoir sur Trop Doux Récup
                </p>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-[#ff7a00]/80/30 rounded-2xl overflow-hidden hover:border-[#ff7a00]/80 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300"
                            >
                                <span className="text-xl font-bold text-white pr-8">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0 bg-[#ff7a00]/80 rounded-full p-2">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-black" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-black" />
                                    )}
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="p-6 bg-gray-900 border-t-2 border-[#ff7a00]/80/30">
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;