import { Upload, ShoppingBag, Check, Store, Users, DollarSign, UserPlus, TrendingDown, Leaf, Clock, Scale, Heart } from 'lucide-react';

// Données pour le composant Fonctionnement
export const steps = [
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

// Données pour le composant Rejoindres
export const restaurantData = {
    type: 'restaurant',
    title: 'Restaurateur ? Rejoignez-nous',
    icon: Store,
    items: [
        { icon: DollarSign, text: 'Transformez vos invendus en revenus' },
        { icon: UserPlus, text: 'Attirez de nouveaux clients' },
        { icon: TrendingDown, text: 'Réduisez vos coûts de gaspillage' }
    ],
    statValue: '-40%',
    statText: 'de nourriture jetée',
    buttonText: 'Inscrire mon restaurant',
    onButtonClick: () => console.log('Inscription restaurant')
};

export const clientData = {
    type: 'client',
    title: 'Mangez malin, gaspillez moins',
    icon: Users,
    items: [
        { icon: DollarSign, text: 'Repas qualité restaurant à -60%' },
        { icon: Leaf, text: 'Impact écologique immédiat' },
        { icon: Clock, text: 'Réservation express' }
    ],
    statValue: 'Jusqu\'à 40%',
    statText: 'd\'économie par repas',
    buttonText: 'Devenir client',
    onButtonClick: () => console.log('Devenir client')
};

export const stats = [
    {
        icon: Store,
        value: '350+',
        label: 'restaurants partenaires',
        color: 'from-[#ffa700] to-[#ff8c00]',
    },
    {
        icon: Scale,
        value: '2,500',
        label: 'tonnes de nourriture sauvées',
        color: 'from-black to-gray-800',
    },
    {
        icon: Heart,
        value: '15,000+',
        label: 'clients satisfaits',
        color: 'from-[#ff8c00] to-[#ffa700]',
    },
];

export const testimonials = [
    {
        name: 'David Kouaho',
        role: 'Cliente fidèle',
        text: 'Je commande sur l\'application tous les soirs pour une fraction du prix. C\'est incroyable et délicieux !',
        rating: 5,
        bgColor: 'bg-gradient-to-br from-[#ffa700] to-[#ff8c00]',
        textColor: 'text-black',
    },
    {
        name: 'Judicael Cakpo',
        role: 'Propriétaire Restaurant Le Jardin',
        text: 'Nous avons réduit notre gaspillage de 45% tout en générant des revenus supplémentaires. Excellent concept !',
        rating: 5,
        bgColor: 'bg-gradient-to-br from-black to-gray-900',
        textColor: 'text-white',
    },
    {
        name: 'Emmanuel Bamidélé',
        role: 'Étudiant',
        text: 'Parfait pour mon budget ! Je découvre de nouveaux restaurants et je contribue à réduire le gaspillage.',
        rating: 5,
        bgColor: 'bg-gradient-to-br from-[#ff8c00] to-[#ffa700]',
        textColor: 'text-black',
    },
];

export default {
    steps,
    restaurantData,
    clientData,
    stats,
    testimonials
};