
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import {ProductProvider} from './assets/context/ProductContext';
import {DataProvider} from "./assets/context/Products_context.jsx";
import {AddToCartContProv} from "./assets/context/AddtoCartCont.jsx";


import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
        <ProductProvider>
        <Nav />
        <div >
            <Routes >
                <Route path="/" element={<Home />} />
                    <Route path="/Shop" element={
                      
                        <DataProvider>
                              <Shop />
                        </DataProvider>
                    
                      } />

                <Route path="/Cart" element={
                  <AddToCartContProv>
                       <Cart />
                  </AddToCartContProv>
                  } />

            </Routes>
        </div>
        </ProductProvider>
        <Footer />
    </>
  );
}

export default App;
