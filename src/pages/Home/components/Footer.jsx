import { Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import ButtonStore from '../../components/ButtonStore';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t-4 border-[#ffa700]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center justify-content-center gap-4 mb-4">
                            <img 
                                src="/LogoTropDouxRecup.jpg" 
                                alt="Logo Trop Doux Recup"
                                className="relative w-20 h-20 rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                            />
                            <h1 className='text-xl font-bold text-[#ffa700]'>Trop Doux Recup</h1>
                        </div>
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
                                    Nous rejoindre
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#ffa700] transition-colors duration-300">
                                    Impact
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
                        <div>
                            <p className='text-gray-400 text-center md:text-left'>
                                Dev par :{' '}
                                <span 
                                    className='underline hover:text-[#ffa700] cursor-pointer'
                                    onClick={() => window.open('', '_blank')}
                                >
                                    JEED-TECH
                                </span>
                            </p>
                            <p className="text-gray-400 text-center md:text-left">
                                © 2024 Trop Doux Recup. Tous droits réservés.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <ButtonStore 
                                store="App Store"
                                url="https://apps.apple.com/app/id389801252"
                                className="text-xs md:text-lg px-10"
                            />
                            <ButtonStore 
                                store="Google Play"
                                url="https://play.google.com/store/apps/details?id=com.instagram.android"
                                className="text-xs md:text-lg px-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;