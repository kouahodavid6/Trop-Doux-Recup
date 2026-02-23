import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const OrderResult = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const depositId = searchParams.get("depositId");

        // Sécurité : paramètre obligatoire
        if (!depositId) {
            navigate("/404", { replace: true });
            return;
        }

        const deepLink = `tropdouxrecup://OrderResultScreen/OrderResultScreen?depositId=${depositId}`;

        window.location.href = deepLink;

    }, [searchParams, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-lg font-semibold">
                Vérification de paiement en cours...
            </p>
        </div>
    );
};

export default OrderResult;