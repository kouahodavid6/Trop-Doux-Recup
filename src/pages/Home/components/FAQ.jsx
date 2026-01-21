import { faqs } from "../../../data/data";
import { useState } from 'react';
import { Minus, Plus } from "lucide-react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-16 sm:py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-center mb-3 text-white">
                    Questions <span className="text-[#ff7a00]/80">fréquentes</span>
                </h2>
                <p className="text-center text-lg sm:text-xl text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
                    Tout ce que vous devez savoir sur TropDouxRécup
                </p>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-[#ff7a00]/80/30 rounded-2xl overflow-hidden hover:border-[#ff7a00]/80 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300"
                            >
                                <span className="text-lg sm:text-xl font-bold text-white pr-6 sm:pr-8">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0 bg-[#ff7a00]/80 rounded-full p-1.5 sm:p-2">
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                                    ) : (
                                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                                    )}
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="p-5 sm:p-6 bg-gray-900 border-t-2 border-[#ff7a00]/80/30">
                                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
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