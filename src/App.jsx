import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import AppToaster from "./components/AppToaster"
import NotFound from "./components/NotFound";

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <AppToaster />

        <main>
          <Routes>
            {/* Route publique principale */}
            <Route path="/" element={<Home />} />

            {/* Page 404 pour toutes les autres routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;