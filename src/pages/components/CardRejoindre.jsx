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
    rounded-3xl p-10 shadow-2xl transition-all duration-300 transform hover:scale-105
    ${isRestaurant 
      ? 'bg-gradient-to-br from-black to-gray-900 border-4 border-[#ffa700] shadow-[#ffa700]/30 hover:shadow-[#ffa700]/50' 
      : 'bg-gradient-to-br from-[#ffa700] to-[#ff8c00] hover:shadow-3xl'
    }
  `;

  const iconContainerClasses = `
    p-4 rounded-2xl
    ${isRestaurant ? 'bg-[#ffa700]' : 'bg-black'}
  `;

  const iconColor = isRestaurant ? 'text-black' : 'text-[#ffa700]';
  const titleColor = isRestaurant ? 'text-[#ffa700]' : 'text-black';
  const textColor = isRestaurant ? 'text-white' : 'text-black';
  const itemIconColor = isRestaurant ? 'text-[#ffa700]' : 'text-black';

  const statContainerClasses = `
    rounded-2xl p-6 mb-8
    ${isRestaurant 
      ? 'bg-[#ffa700]/20 border-2 border-[#ffa700]' 
      : 'bg-black'
    }
  `;

  const statValueColor = isRestaurant ? 'text-[#ffa700]' : 'text-[#ffa700]';
  const statTextColor = isRestaurant ? 'text-white' : 'text-white';

  const buttonClasses = `
    w-full py-4 rounded-full text-xl font-black transition-all duration-300 transform hover:scale-105
    ${isRestaurant 
      ? 'bg-[#ffa700] text-black hover:bg-[#ff9500] shadow-xl shadow-[#ffa700]/50' 
      : 'bg-black text-[#ffa700] hover:bg-gray-900 shadow-xl'
    }
  `;

  // Debug: Vérifier ce qui est reçu
  console.log('Icon reçu:', Icon);
  console.log('Items reçus:', items);

  return (
    <div className={containerClasses}>
      <div className="flex items-center gap-4 mb-8">
        <div className={iconContainerClasses}>
          {Icon && <Icon className={`w-10 h-10 ${iconColor}`} />}
        </div>
        <h3 className={`text-3xl font-black ${titleColor}`}>
          {title}
        </h3>
      </div>

      <ul className="space-y-5 mb-10">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {item.icon && <item.icon className={`w-6 h-6 ${itemIconColor} flex-shrink-0 mt-1`} />}
            <span className={`text-lg ${textColor} ${!isRestaurant ? 'font-semibold' : ''}`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <div className={statContainerClasses}>
        <p className={`text-4xl font-black text-center ${statValueColor}`}>
          {statValue}
        </p>
        <p className={`text-center text-lg mt-2 ${statTextColor}`}>
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