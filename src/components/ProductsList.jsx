//import {PiStarFourFill} from "react-icons/pi";
//import Products from '../components/ShoppingPage/Products.jsx'
import { useContext } from "react";
import GridView from "./GridView";
//import {useFilterContext} from "../assets/context/Filter_context.jsx"
import { DataContext } from "../assets/context/Products_context";

const ProductsList = () => {
  const { state } = useContext(DataContext);
  const { loading, filteredData, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!filteredData || filteredData.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="bg-[#eee] min-h-screen  ">
      <div className=" py-[3rem] ">
        <GridView products={filteredData} />
      </div>
    </div>
  );
};

export default ProductsList;
