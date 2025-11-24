// components/Navbar.jsx (version responsive complète)
import { navItems } from '../../../data/data';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            const sections = ['urgence', 'fonctionnement', 'rejoindres', 'impact', 'temoignages', 'faq'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };



    return (
        <nav className={`
            fixed top-0 left-0 w-full py-2 z-50 transition-all duration-300
            ${isScrolled 
                ? 'bg-black/60 backdrop-blur-xl shadow-lg' 
                : 'bg-black/40 backdrop-blur-lg'
            }
        `}>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:ring-opacity-50 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            <img 
                                src="/LogoTropDouxRecup.jpg" 
                                alt="Logo TropDouxRécup"
                                className="w-12 h-12 sm:w-15 sm:h-15 md:w-14 md:h-14 rounded-xl object-cover transition-transform duration-500 shadow-lg"
                            />
                        </button>
                    </div>

                    {/* Navigation desktop */}
                    <div className="hidden lg:block">
                        <div className="ml-6 xl:ml-10 flex items-baseline space-x-4 xl:space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        relative text-white font-medium px-2 xl:px-3 py-2 transition-all duration-300
                                        hover:text-[#ff7a00] group text-sm xl:text-base
                                        ${activeSection === item.id ? 'text-[#ff7a00]' : ''}
                                    `}
                                >
                                    {item.label}
                                    <span className={`
                                        absolute bottom-0 left-1/2 h-0.5 bg-[#ff7a00] transition-all duration-300
                                        transform -translate-x-1/2
                                        ${activeSection === item.id 
                                            ? 'w-full' 
                                            : 'w-0 group-hover:w-full'
                                        }
                                    `} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation tablette */}
                    <div className="hidden md:block lg:hidden">
                        <div className="flex items-center space-x-3">
                            {navItems.slice(0, 4).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        relative text-white font-medium px-2 py-2 transition-all duration-300
                                        hover:text-[#ff7a00] group text-xs
                                        ${activeSection === item.id ? 'text-[#ff7a00]' : ''}
                                    `}
                                >
                                    {item.label.split(' ')[0]}
                                    <span className={`
                                        absolute bottom-0 left-1/2 h-0.5 bg-[#ff7a00] transition-all duration-300
                                        transform -translate-x-1/2
                                        ${activeSection === item.id 
                                            ? 'w-full' 
                                            : 'w-0 group-hover:w-full'
                                        }
                                    `} />
                                </button>
                            ))}
                            {/* Menu déroulant pour les items restants */}
                            <div className="relative group">
                                <button className="text-white font-medium px-2 py-2 hover:text-[#ff7a00] transition-colors duration-300 text-xs">
                                    Plus ▾
                                </button>
                                <div className="absolute top-full right-0 mt-2 w-40 bg-black/90 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-white/10">
                                    {navItems.slice(4).map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`
                                                w-full text-left text-white font-medium px-4 py-3 transition-all duration-300
                                                hover:text-[#ff7a00] hover:bg-white/5 text-sm
                                                ${activeSection === item.id ? 'text-[#ff7a00] bg-white/5' : ''}
                                                first:rounded-t-lg last:rounded-b-lg
                                            `}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2 hover:text-[#ff7a00] transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:ring-opacity-50"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        w-full text-white font-medium px-4 py-3 text-left transition-all duration-300
                                        hover:text-[#ff7a00] hover:bg-white/10 rounded-lg
                                        ${activeSection === item.id ? 'text-[#ff7a00] bg-white/5' : ''}
                                        flex items-center
                                    `}
                                >
                                    <span className="flex-1">{item.label}</span>
                                    {activeSection === item.id && (
                                        <div className="w-2 h-2 bg-[#ff7a00] rounded-full ml-2" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;