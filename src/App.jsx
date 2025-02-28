import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import { DataProvider } from "./assets/context/Products_context.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Shop"
            element={
              <DataProvider>
                <Shop />
              </DataProvider>
            }
          />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
