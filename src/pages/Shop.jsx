import NewsLetter from "../components/NewsLetter.jsx";
import Filters from "../components/filters";
import ProductsList from "../components/ProductsList";
import Sort from "../components/Sort.jsx";

function Shop() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <div className="grid md:grid-cols-[1fr_3fr] py-4">
          <Filters />
          <div>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
export default Shop;
