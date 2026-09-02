import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Global Effects
import GlobalEffects from "./components/GlobalEffects/GlobalEffects";

// Layout & Common Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/contact";

import LeadGeneration from "./pages/Services/LeadGeneration/LeadGeneration";

function App() {
  return (
    <HelmetProvider>
      <Router>

        {/* Global Animation System */}
        <GlobalEffects />

        <div className="flex flex-col min-h-screen">

          <Navbar />

          <main className="grow">

            <Routes>

              {/* Home */}
              <Route
                path="/"
                element={<Home />}
              />

              {/* Contact */}
              <Route
                path="/contact"
                element={<Contact />}
              />
              {/* LeadGeneration */}
              <Route
                path="/services/lead-generation"
                element={<LeadGeneration />}
              />

            </Routes>

          </main>

          <Footer />

        </div>

      </Router>
    </HelmetProvider>
  );
}

export default App;