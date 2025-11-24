const CardRejoindre = ({ 
  type = 'restaurant',
  title = '',
  icon: Icon,
  items = [],
  statValue = '',
  statText = '',
  buttonText = '',
  onButtonClick = () => {}
}) => {
  const isRestaurant = type === 'restaurant';
  
  const containerClasses = `
    rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl sm:shadow-2xl transition-all duration-300 transform hover:scale-105
    ${isRestaurant 
      ? 'bg-gradient-to-br from-black to-gray-900 border-2 sm:border-4 border-[#ff7a00]/80 shadow-[#ff7a00]/80/20 sm:shadow-[#ff7a00]/80/30 hover:shadow-[#ff7a00]/80/40' 
      : 'bg-gradient-to-br from-[#ff7a00]/80 to-[#ff8c00] hover:shadow-2xl sm:hover:shadow-3xl'
    }
  `;

  const iconContainerClasses = `
    p-3 sm:p-4 rounded-xl sm:rounded-2xl
    ${isRestaurant ? 'bg-[#ff7a00]/80' : 'bg-black'}
  `;

  const iconColor = isRestaurant ? 'text-black' : 'text-[#ff7a00]/80';
  const titleColor = isRestaurant ? 'text-[#ff7a00]/80' : 'text-black';
  const textColor = isRestaurant ? 'text-white' : 'text-black';
  const itemIconColor = isRestaurant ? 'text-[#ff7a00]/80' : 'text-black';

  const statContainerClasses = `
    rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8
    ${isRestaurant 
      ? 'bg-[#ff7a00]/80/20 border border-[#ff7a00]/80' 
      : 'bg-black'
    }
  `;

  const statValueColor = isRestaurant ? 'text-[#ff7a00]/80' : 'text-[#ff7a00]/80';
  const statTextColor = isRestaurant ? 'text-white' : 'text-white';

  const buttonClasses = `
    w-full py-3 sm:py-4 rounded-full text-lg sm:text-xl font-black transition-all duration-300 transform hover:scale-105
    ${isRestaurant 
      ? 'bg-[#ff7a00]/80 text-black hover:bg-[#ff9500] shadow-lg sm:shadow-xl shadow-[#ff7a00]/80/40' 
      : 'bg-black text-[#ff7a00]/80 hover:bg-gray-900 shadow-lg sm:shadow-xl'
    }
  `;

  return (
    <div className={containerClasses}>
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className={iconContainerClasses}>
          {Icon && <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${iconColor}`} />}
        </div>
        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black ${titleColor} leading-tight`}>
          {title}
        </h3>
      </div>

      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 sm:gap-3">
            {item.icon && <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${itemIconColor} flex-shrink-0 mt-0.5 sm:mt-1`} />}
            <span className={`text-sm sm:text-base lg:text-lg ${textColor} ${!isRestaurant ? 'font-semibold' : ''} leading-relaxed`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <div className={statContainerClasses}>
        <p className={`text-2xl sm:text-3xl lg:text-4xl font-black text-center ${statValueColor}`}>
          {statValue}
        </p>
        <p className={`text-center text-base sm:text-lg mt-1 sm:mt-2 ${statTextColor}`}>
          {statText}
        </p>
      </div>

      <button 
        className={buttonClasses}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CardRejoindre;