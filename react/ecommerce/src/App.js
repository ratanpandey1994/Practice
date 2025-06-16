import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componentns/Header";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing"
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Componentns/Footer";
import ProductModal from "./Componentns/ProductModal";


const MyContext = createContext();



function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false)

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const response = await axios.get(url);
    // Set the country list directly from the data array
    setCountryList(response.data.data);
    //console.log(response.data.data);

  };

  const values = {
    countryList,
    setselectedCountry,
    setisOpenProductModal,
    selectedCountry
  }
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>

        <Footer />

        {
          isOpenProductModal === true && <ProductModal />
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };