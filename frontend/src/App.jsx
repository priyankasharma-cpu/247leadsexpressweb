import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Global Effects
import GlobalEffects from "./components/GlobalEffects/GlobalEffects";

// Layout & Common Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/home";

function App() {
  return (
    <HelmetProvider>
      <Router>

        {/* Global Animation System */}
        <GlobalEffects />

        <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">

          <Navbar />

          <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
            </Routes>
          </div>

          <Footer />

        </div>

      </Router>
    </HelmetProvider>
  );
}

export default App;