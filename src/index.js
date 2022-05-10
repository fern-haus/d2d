import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import DharmaGem from "./components/dharma-gem/DharmaGem";
import DharmaLookup from "./components/dharma-lookup/DharmaLookup";
import DharmaQuiz from "./components/dharma-quiz/DharmaQuiz";
import PaliLookup from "./components/pali-lookup/PaliLookup";
import PaliQuiz from "./components/pali-quiz/PaliQuiz";

const root = ReactDOM.createRoot(document.getElementById("root"));

// LINK SUTTAS & DEFINE 7 CONSTITUENTS...

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="d2d" element={<App />} />
                <Route path="d2d/dharma-gem" element={<DharmaGem />} />
                <Route path="d2d/dharma-lookup" element={<DharmaLookup />} />
                <Route path="d2d/dharma-quiz" element={<DharmaQuiz size={3} />} />
                <Route path="d2d/pali-lookup" element={<PaliLookup />} />
                <Route path="d2d/pali-quiz" element={<PaliQuiz size={12} />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
