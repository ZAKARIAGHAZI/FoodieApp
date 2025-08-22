import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Herosection from "./Components/HeroSection/Herosection";
import RestaurantList from "./Components/Restaurant/RestaurantList";
import RestaurantMenu from "./Components/Restaurant/RestaurantMenu";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
