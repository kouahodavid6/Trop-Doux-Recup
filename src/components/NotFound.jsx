import { Link } from 'react-router-dom';
import { UtensilsCrossed, Home, ChefHat, Pizza, Banana, Coffee, Salad } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#fff5e6] via-[#fff0d9] to-[#ffebcc] text-[#332200] px-4 relative overflow-hidden">
            {/* Effets de fond décoratifs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#ff7a00]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#ff7a00]/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#ff7a00]/10 rounded-full blur-lg"></div>
            
            <motion.div 
                className="max-w-md text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Icône alimentaire */}
                <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                    <div className="bg-gradient-to-br from-[#fff0d9] to-[#ffe6cc] p-5 rounded-2xl border border-[#ff7a00]/30 shadow-lg">
                        <UtensilsCrossed className="h-16 w-16 text-[#ff7a00]" />
                    </div>
                </motion.div>

                {/* Code erreur */}
                <motion.h1 
                    className="text-8xl font-black mb-4 bg-gradient-to-r from-[#ff7a00] to-[#e66a00] bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                >
                    404
                </motion.h1>

                {/* Titre */}
                <motion.h2 
                    className="text-3xl font-bold mb-3 text-[#332200]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Recette non trouvée
                </motion.h2>

                {/* Message */}
                <motion.p 
                    className="mb-8 text-[#664400]/80 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Oups ! Il semble que cette recette ait été dégustée ou n'existe plus. 
                    Revenons à Trop Doux Recup ensemble.
                </motion.p>

                {/* Bouton de retour */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff7a00] to-[#e66a00] hover:from-[#ff8a1a] hover:to-[#ff7a00] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#ff7a00]/30 transform hover:-translate-y-1"
                    >
                        <Home className="h-5 w-5" />
                        Retour à l'accueil
                    </Link>
                </motion.div>

                {/* Message secondaire avec logo */}
                <motion.div 
                    className="mt-6 text-sm text-[#664400]/70 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <img 
                        src="/LogoTropDouxRecupBlack.jpg" 
                        alt="Trop Doux Recup" 
                        className="h-6 w-6 rounded-full object-cover"
                    />
                    Revenez vers nous !
                </motion.div>
            </motion.div>

            {/* Décorations bas de page alimentaires */}
            <div className="absolute bottom-10 left-10 opacity-20">
                <Pizza className="h-8 w-8 text-[#ff7a00]" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-20">
                <Banana className="h-6 w-6 text-[#ff7a00]" />
            </div>

            {/* Éléments décoratifs supplémentaires restaurant */}
            <div className="absolute top-10 right-16 opacity-15">
                <UtensilsCrossed className="h-10 w-10 text-[#ff7a00]" />
            </div>
            
            {/* Nouvelles icônes de restaurant */}
            <div className="absolute top-20 left-16 opacity-15">
                <Coffee className="h-8 w-8 text-[#ff7a00]" />
            </div>
            
            <div className="absolute bottom-32 left-20 opacity-15">
                <Salad className="h-7 w-7 text-[#ff7a00]" />
            </div>
            
            <div className="absolute top-32 right-20 opacity-15">
                <ChefHat className="h-9 w-9 text-[#ff7a00]" />
            </div>

            {/* Logo supplémentaire en décoratif */}
            <div className="absolute bottom-10 right-20 opacity-10">
                <img 
                    src="/LogoTropDouxRecup.jpg" 
                    alt="Trop Doux Recup" 
                    className="h-12 w-12 rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default NotFound;