import { Upload, ShoppingBag, Check, Store, Users, DollarSign, UserPlus, TrendingDown, Leaf, ShoppingBasket, Scale, Heart } from 'lucide-react';

export const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'urgence', label: 'Enjeux' },
    { id: 'fonctionnement', label: 'Fonctionnement' },
    { id: 'rejoindres', label: 'Nous Rejoindre' },
    { id: 'objectif', label: 'Objectif' },
    { id: 'temoignages', label: 'Témoignages' },
    { id: 'faq', label: 'FAQ' }
];

// Données pour le composant Fonctionnement
export const steps = [
    {
        icon: Upload,
        title: 'Restaurants : postez vos invendus',
        description: 'Après le service, publiez vos plats disponibles sur l\'application',
        color: 'from-[#ff7a00]/80 to-[#ff8c00]',
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
        color: 'from-[#ff8c00] to-[#ff7a00]/80',
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
        { icon: ShoppingBasket, text: 'Commande depuis l’application' }
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
        color: 'from-black to-gray-800',
    },
    {
        icon: Scale,
        value: '2,500',
        label: 'tonnes de nourriture sauvées',
        color: 'from-[#ff7a00]/80 to-[#ff7a00]',
    },
    {
        icon: Heart,
        value: '15,000+',
        label: 'clients satisfaits',
        color: 'from-black to-gray-800',
    },
];

export const faqs = [
    {
        question: 'Comment fonctionne la récupération des repas ?',
        answer: 'Après avoir réservé via l\'application, présentez-vous au restaurant avec votre code qr ou votre code de confirmation et récupérez votre repas emballé et prêt à emporter.',
    },
    {
            question: 'Quelle est la réduction moyenne sur les repas ?',
            answer: 'Les réductions varient généralement entre 20% du prix initial. Cela varie en fonction des offres, des repas, des restaurants et le type de plat.',
    },
    {
        question: 'Les restaurants doivent-ils payer pour s\'inscrire ?',
        answer: 'Non, l\'inscription est gratuite pour les restaurants. Nous prenons uniquement une petite commission sur chaque vente réalisée via l\'application.',
    },
    {
        question: 'Comment puis-je payer mes commandes ?',
        answer: 'Le paiement se fait directement dans l\'application via les moyens de paiements locaux. C\'est sécurisé, rapide et sans contact au moment de la récupération.',
    },
    {
        question: 'Quels types de plats sont disponibles ?',
        answer: 'Vous trouverez une grande variété : plats du jour, pâtisseries, sandwiches, plats végétariens, cuisines du monde... Tout dépend des invendus disponibles chaque soir dans les restaurants partenaires.',
    },
];

export default {
    navItems,
    steps,
    restaurantData,
    clientData,
    stats,
    faqs
};