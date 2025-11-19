import { Smartphone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t-4 border-[#ffa700]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-black text-[#ffa700] mb-6">
                            Trop Doux Recup
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            L'application anti-gaspillage qui connecte restaurants et clients pour des repas pas chers.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-[#ffa700] p-3 rounded-full hover:bg-[#ff9500] transition-colors duration-300">
                                <Facebook className="w-5 h-5 text-black" />
                            </a>
                            <a href="#" className="bg-[#ffa700] p-3 rounded-full hover:bg-[#ff9500] transition-colors duration-300">
                                <Instagram className="w-5 h-5 text-black" />
                            </a>
                            <a href="#" className="bg-[#ffa700] p-3 rounded-full hover:bg-[#ff9500] transition-colors duration-300">
                                <Twitter className="w-5 h-5 text-black" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-[#ffa700] mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    Comment ça marche
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    Pour les restaurants
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    Pour les clients
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-[#ffa700] mb-6">
                            Légal
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    Mentions légales
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    Politique de confidentialité
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    CGU
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    CGV
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-[#ffa700] mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#ffa700] flex-shrink-0 mt-1" />
                                <span className="text-gray-400">tropdouxrecup@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#ffa700] flex-shrink-0 mt-1" />
                                <span className="text-gray-400">Abidjan, Côte d'Ivoire</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-gray-400 text-center md:text-left">
                            © 2024 Trop Doux Recup. Tous droits réservés.
                        </p>

                        <div className="flex gap-4">
                            <button 
                                onClick={() => window.open('https://apps.apple.com/app/id389801252', '_blank')}
                                className="flex items-center justify-center gap-2 bg-[#ffa700] text-black px-6 py-3 rounded-full font-bold hover:bg-[#ff9500] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                            >
                                <Smartphone className="w-5 h-5" />
                                App Store
                            </button>
                            <button 
                                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.instagram.android', '_blank')}
                                className="flex items-center justify-center gap-2 bg-[#ffa700] text-black px-6 py-3 rounded-full font-bold hover:bg-[#ff9500] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                            >
                                <Smartphone className="w-5 h-5" />
                                Google Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;