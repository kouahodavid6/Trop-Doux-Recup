import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Subscription from './pages/Subcription/Subscription';
import OrderResult from './pages/OrderResult/OrderResult';
import NotFound from "./components/NotFound";
import { useEffect } from "react";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    },
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Abonnement */}
              <Route path="/subscription" element={<Subscription />} />

              {/* Vérification commande */}
              <Route path="/order-result" element={<OrderResult />} />

              {/* 404 */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;