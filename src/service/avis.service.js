import axiosInstance from "../api/axiosInstance";

// Récupérer tous les avis
const getAvis = async () => {
    try {
        const response = await axiosInstance.get('/api/avis/page');
        return response.data.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la récupération des avis');
    }
}

export const avisService = {
    getAvis
}