import { Upload, ShoppingBag, Check } from 'lucide-react';

const steps = [
    {
        icon: Upload,
        title: 'Restaurants : postez vos invendus',
        description: 'Après le service, publiez vos plats disponibles sur l\'application',
        color: 'from-[#ffa700] to-[#ff8c00]',
    },
    {
        icon: ShoppingBag,
        title: 'Clients : réservez et payez moins cher',
        description: 'Parcourez les offres, réservez vos plats préférés à prix réduit via l\'app',
        color: 'from-black to-gray-800',
    },
    {
        icon: Check,
        title: 'Récupération le soir même',
        description: 'Récupérez votre commande, savourez et célébrez le gaspillage évité',
        color: 'from-[#ff8c00] to-[#ffa700]',
    },
];

export default steps;