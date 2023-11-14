
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
        <Nav />
        <div >
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/Shop" element={<Shop />} />
            </Routes>
        </div>
        <Footer />
    </>
  );
}

export default App;
