import { useQuery } from '@tanstack/react-query';
import { avisService } from '../service/avis.service';

// Clés de query pour TanStack Query
export const avisKeys = {
    all: ['avis'],
    lists: () => [...avisKeys.all, 'list'],
    list: (filters) => [...avisKeys.lists(), { filters }],
};

export const useAvis = () => {
    // QUERY: Récupérer tous les avis
    const avisQuery = useQuery({
        queryKey: avisKeys.lists(),
        queryFn: avisService.getAvis,
        staleTime: 2 * 60 * 1000, // 2 minutes
        gcTime: 5 * 60 * 1000, // 5 minutes
        retry: 2,
    });

    return {
        // Données et état
        avis: avisQuery.data || [],
        isLoading: avisQuery.isLoading,
        isError: avisQuery.isError,
        error: avisQuery.error,
        refetch: avisQuery.refetch,
    };
};