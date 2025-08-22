import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Herosection from "./Components/HeroSection/Herosection";
import RestaurantList from "./Components/Restaurant/RestaurantList";
import RestaurantMenu from "./Components/Restaurant/RestaurantMenu";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <RestaurantList />
              <AboutUs />
            </>
          }
        />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
