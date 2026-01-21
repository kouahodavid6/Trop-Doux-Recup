import { useState } from 'react';
import { Star, MessageSquare, ChevronLeft, ChevronRight, StarHalf } from "lucide-react";
import { useAvis } from '../../../hooks/useAvis'
import { motion, AnimatePresence } from "framer-motion";

const Temoignages = () => {
    const { avis, isLoading, error } = useAvis();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Couleurs alternées pour les cartes
    const cardColors = [
        { bg: 'bg-white', text: 'text-black', border: 'border-gray-200' },
        { bg: 'bg-gradient-to-br from-[#ff7a00] to-[#ff5500]', text: 'text-white', border: 'border-transparent' },
        { bg: 'bg-gray-900', text: 'text-white', border: 'border-gray-800' }
    ];

    // Préparer les données pour l'affichage
    const processedAvis = avis.map(avisItem => {
        // Extraire le prénom du client
        const clientName = avisItem.client?.nom || 'Client';
        const firstName = clientName.split(' ')[0];

        // Déterminer le rôle (client ou marchand)
        const role = avisItem.marchand ? `Client chez ${avisItem.marchand.nom}` : 'Client';

        return {
            ...avisItem,
            firstName,
            role,
            // Générer un texte de témoignage basé sur le commentaire
            testimonialText: avisItem.commentaire || "Excellent service !"
        };
    });

    // Grouper par 3 pour le carousel
    const groupedAvis = [];
    for (let i = 0; i < processedAvis.length; i += 3) {
        groupedAvis.push(processedAvis.slice(i, i + 3));
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % groupedAvis.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + groupedAvis.length) % groupedAvis.length);
    };

    // Composant pour les étoiles
    const StarRating = ({ rating, colorClass }) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star key={`full-${i}`} className={`w-6 h-6 ${colorClass} fill-current`} />
            );
        }

        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative">
                    <Star className={`w-6 h-6 text-gray-300`} />
                    <StarHalf className={`w-6 h-6 ${colorClass} fill-current absolute inset-0`} />
                </div>
            );
        }

        const emptyStars = 5 - stars.length - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <Star key={`empty-${i}`} className={`w-6 h-6 text-gray-300`} />
            );
        }

        return <div className="flex gap-1 mb-4">{stars}</div>;
    };

    return (
        <section id="temoignages" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-black">
                        Nos <span className="text-[#ff7a00]/80">clients</span>
                    </h2>
                    <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
                        Découvrez les témoignages de notre communauté sur nos différents plats
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl shadow-lg animate-pulse"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-6 h-6 bg-gray-200 rounded"></div>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center py-12">
                        <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">Impossible de charger les témoignages</p>
                    </div>
                ) : processedAvis.length === 0 ? (
                    <div className="text-center py-12">
                        <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">Aucun témoignage pour le moment</p>
                    </div>
                ) : (
                    <div className="relative max-w-6xl mx-auto">
                        {/* Carousel pour desktop, grille pour mobile */}
                        <div className="hidden md:block">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-3 gap-8"
                                >
                                    {groupedAvis[currentSlide]?.map((avisItem, index) => {
                                        const colors = cardColors[index % cardColors.length];
                                        const starColor = colors.text === 'text-white' 
                                            ? 'text-white' 
                                            : 'text-[#ff7a00]/80';

                                        return (
                                            <motion.div
                                                key={avisItem.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`${colors.bg} ${colors.text} ${colors.border} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border`}
                                            >
                                                <StarRating 
                                                    rating={avisItem.etoile} 
                                                    colorClass={starColor}
                                                />

                                                <p className={`text-lg mb-6 leading-relaxed font-medium`}>
                                                    "{avisItem.testimonialText}"
                                                </p>

                                                <div className={`border-t ${colors.text === 'text-black' ? 'border-black/20' : 'border-white/20'} pt-6 flex items-center gap-4`}>
                                                    {avisItem.client?.image_client ? (
                                                        <img 
                                                            src={avisItem.client.image_client} 
                                                            alt={avisItem.firstName}
                                                            className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
                                                        />
                                                    ) : (
                                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colors.text === 'text-white' ? 'bg-white/20' : 'bg-gray-100'}`}>
                                                            <span className={`text-lg font-bold ${colors.text === 'text-white' ? 'text-white' : 'text-gray-700'}`}>
                                                                {avisItem.firstName.charAt(0)}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className={`font-black text-xl`}>
                                                            {avisItem.firstName}
                                                        </p>
                                                        <p className={`${colors.text === 'text-black' ? 'text-black/70' : 'text-white/70'} font-semibold`}>
                                                            {avisItem.role}
                                                        </p>
                                                        {avisItem.plat && (
                                                            <p className="text-sm opacity-75">
                                                                Avis sur : {avisItem.plat.nom}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>

                            {/* Contrôles du carousel */}
                            {groupedAvis.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
                                    >
                                        <ChevronRight className="w-6 h-6 text-gray-700" />
                                    </button>

                                    {/* Indicateurs */}
                                    <div className="flex justify-center gap-2 mt-8">
                                        {groupedAvis.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#ff7a00] scale-125' : 'bg-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Version mobile (scroll horizontal) */}
                        <div className="md:hidden">
                            <div className="flex overflow-x-auto pb-4 space-x-4 snap-x snap-mandatory scrollbar-hide">
                                {processedAvis.map((avisItem, index) => {
                                    const colors = cardColors[index % cardColors.length];
                                    const starColor = colors.text === 'text-white' 
                                        ? 'text-white' 
                                        : 'text-[#ff7a00]/80';

                                    return (
                                        <motion.div
                                            key={avisItem.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`${colors.bg} ${colors.text} ${colors.border} p-6 rounded-3xl shadow-xl min-w-[85vw] snap-center border`}
                                        >
                                            <StarRating 
                                                rating={avisItem.etoile} 
                                                colorClass={starColor}
                                            />

                                            <p className={`text-lg mb-6 leading-relaxed font-medium`}>
                                                "{avisItem.testimonialText}"
                                            </p>

                                            <div className={`border-t ${colors.text === 'text-black' ? 'border-black/20' : 'border-white/20'} pt-4 flex items-center gap-4`}>
                                                {avisItem.client?.image_client ? (
                                                    <img 
                                                        src={avisItem.client.image_client} 
                                                        alt={avisItem.firstName}
                                                        className="w-10 h-10 rounded-full object-cover border-2 border-white/50"
                                                    />
                                                ) : (
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colors.text === 'text-white' ? 'bg-white/20' : 'bg-gray-100'}`}>
                                                        <span className={`font-bold ${colors.text === 'text-white' ? 'text-white' : 'text-gray-700'}`}>
                                                            {avisItem.firstName.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                                <div>
                                                    <p className={`font-black text-lg`}>
                                                        {avisItem.firstName}
                                                    </p>
                                                    <p className={`${colors.text === 'text-black' ? 'text-black/70' : 'text-white/70'} font-semibold text-sm`}>
                                                        {avisItem.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* Statistiques */}
                {processedAvis.length > 0 && (
                    <motion.div 
                        className="mt-16 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-4 shadow-lg">
                            <div className="text-center">
                                <div className="text-3xl font-black text-[#ff7a00]">
                                    {processedAvis.length}
                                </div>
                                <div className="text-gray-600 font-medium">Témoignages</div>
                            </div>
                            <div className="h-12 w-px bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-[#ff7a00]">
                                    {processedAvis.length > 0 
                                        ? (processedAvis.reduce((acc, avis) => acc + avis.etoile, 0) / processedAvis.length).toFixed(1)
                                        : '0.0'
                                    }
                                </div>
                                <div className="text-gray-600 font-medium">Moyenne /5</div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

export default Temoignages;