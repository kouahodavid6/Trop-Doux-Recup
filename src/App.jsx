import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect } from "react";

import Home from "./Pages/Home/Home";
import AppToaster from "./components/AppToaster"
import NotFound from "./components/NotFound";

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <AppToaster />

        <main>
          <Routes>
            {/* Routes publiques */}
            <Route
              path="/"
              element={ <Home /> }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;