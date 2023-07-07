import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import NavBar from "./components/NavBar/NavBar";
import { MacbookProvider } from "./contexts/Macbook";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation()
  return (
    <>
      <MacbookProvider>
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={ location.key }>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </AnimatePresence>
      </MacbookProvider>
    </>
  );
}
