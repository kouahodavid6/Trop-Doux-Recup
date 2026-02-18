import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Subscription = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const depositId = searchParams.get("depositId");

        // 🚨 Sécurité : si pas de depositId → NotFound
        if (!depositId) {
            navigate("/404", { replace: true });
            return;
        }

        // ✅ Construction du deeplink
        const deepLink = `tropdouxrecup://merchant/subscription/CheckSubscribtionPayment?depositId=${depositId}`;

        // 🔁 Redirection vers l'application mobile
        window.location.href = deepLink;

    }, [searchParams, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-lg font-semibold">
                Redirection en cours...
            </p>
        </div>
    );
};

export default Subscription;