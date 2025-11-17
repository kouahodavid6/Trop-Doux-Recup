import { LogOut, X, Shield } from "lucide-react";
import { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ConfirmLogoutModal = ({ isOpen, onClose, onConfirm }) => {
    // Bloque le scroll quand le modal est ouvert
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => (document.body.style.overflow = '');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    // Variants d'animation
    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.3 }
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 25,
                stiffness: 300
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2 }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { 
            scale: 0.95,
            transition: { duration: 0.1 }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            rotate: 0,
            transition: { 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Overlay */}
                    <motion.div 
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                        variants={overlayVariants}
                    />
                    
                    {/* Modal */}
                    <motion.div 
                        className="relative z-[10000] bg-white rounded-2xl max-w-md w-full shadow-2xl border border-[#ff7a00]/20"
                        variants={modalVariants}
                    >
                        {/* En-tête avec bouton de fermeture */}
                        <div className="flex justify-between items-center p-6 border-b border-[#ff7a00]/10 bg-gradient-to-r from-[#fff5e6] to-[#ffebcc]">
                            <div className="flex items-center gap-4">
                                <motion.div
                                    className="p-3 rounded-xl bg-gradient-to-br from-[#ff7a00]/20 to-[#ff7a00]/10"
                                    variants={iconVariants}
                                >
                                    <Shield className="h-6 w-6 text-[#ff7a00]" />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#332200]">Confirmer la déconnexion</h3>
                                    <p className="text-[#664400]/70 text-sm">Sécurité de votre compte</p>
                                </div>
                            </div>
                            <motion.button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-[#ff7a00]/10 text-[#ff7a00] hover:text-[#e66a00] transition-all duration-300"
                                aria-label="Fermer la fenêtre"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <X className="h-5 w-5" />
                            </motion.button>
                        </div>
                        
                        {/* Contenu */}
                        <motion.div 
                            className="p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <motion.div
                                    className="p-2 rounded-lg bg-[#ff7a00]/20 mt-1"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                >
                                    <LogOut className="h-5 w-5 text-[#ff7a00]" />
                                </motion.div>
                                <div>
                                    <p className="text-[#332200] font-medium mb-2">
                                        Êtes-vous sûr de vouloir vous déconnecter ?
                                    </p>
                                    <p className="text-[#664400]/80 text-sm">
                                        Vous devrez vous reconnecter pour accéder à nouveau à votre espace.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-end gap-3">
                                <motion.button
                                    onClick={onClose}
                                    className="px-4 sm:px-5 py-3 sm:py-2.5 rounded-xl border border-[#ff7a00]/30 text-[#664400] hover:bg-[#ff7a00]/5 transition-all duration-300 font-medium text-base sm:text-sm w-full sm:w-auto"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Annuler
                                </motion.button>
                                <motion.button
                                    onClick={handleConfirm}
                                    className="px-4 sm:px-5 py-3 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#e66a00] text-white hover:from-[#ff8a1a] hover:to-[#ff7a00] transition-all duration-300 font-medium shadow-lg hover:shadow-[#ff7a00]/30 text-base sm:text-sm w-full sm:w-auto"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <LogOut className="h-4 w-4 sm:h-3 sm:w-3" />
                                        <span>Se déconnecter</span>
                                    </div>
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Pied de page sécuritaire */}
                        <motion.div 
                            className="p-4 border-t border-[#ff7a00]/10 bg-[#ff7a00]/5 rounded-b-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Shield className="h-3 w-3 text-[#ff7a00]" />
                                <p className="text-xs text-[#664400]/70 text-center">
                                    Votre sécurité est notre priorité
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConfirmLogoutModal;