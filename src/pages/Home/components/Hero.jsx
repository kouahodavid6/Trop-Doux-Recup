import ButtonStore from "../../components/ButtonStore";

const Hero = () => {
    return(
        <header className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#ffa700]/20"></div>

            <div className="container mx-auto px-4 py-20 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Partie texte - centrée sur mobile */}
                    <div className="space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-black leading-tight">
                            Stop au gaspillage,{' '}
                            <span className="text-[#ffa700]">bonnes affaires</span> assurées !
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            L'application qui transforme les invendus des restaurants en repas pas chers pour tous
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <ButtonStore 
                                store="App Store"
                                url="https://apps.apple.com/app/id389801252"
                            />
                            <ButtonStore 
                                store="Google Play"
                                url="https://play.google.com/store/apps/details?id=com.instagram.android"
                            />
                        </div>
                    </div>

                    {/* Partie téléphone - centrée sur mobile */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-72 sm:w-80 h-[450px] sm:h-[500px] bg-gradient-to-br from-[#ffa700] to-[#ff8c00] rounded-[3rem] p-3 shadow-2xl shadow-[#ffa700]/50 transform hover:scale-105 transition-transform duration-500 mx-auto">
                            <div className="bg-black h-full rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden">
                                {/* Encoche du téléphone */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-black flex items-center justify-center">
                                    <div className="w-24 h-6 bg-gray-900 rounded-full"></div>
                                </div>

                                {/* Contenu du téléphone */}
                                <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 space-y-6 sm:space-y-8">
                                    {/* Logo principal */}
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-[#ffa700] rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-50"></div>
                                        <img 
                                            src="/LogoTropDouxRecup.jpg" 
                                            alt="Logo Trop Doux Recup"
                                            className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                                        />
                                    </div>

                                    {/* Texte sous le logo */}
                                    <div className="text-center space-y-3">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                                            Trop Doux Recup
                                        </h3>
                                        <p className="text-gray-400 text-sm max-w-xs">
                                            Des repas délicieux à petits prix, 
                                            <span className="text-[#ffa700] block">zéro gaspillage</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Barre de navigation basse */}
                                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 rounded-full p-2 backdrop-blur-sm">
                                    <div className="flex justify-around items-center">
                                        <div className="w-2 h-2 bg-[#ffa700] rounded-full"></div>
                                        <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Effet de lumière d'arrière-plan */}
                        <div className="absolute -z-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#ffa700]/30 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;