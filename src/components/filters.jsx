import { useState, useContext, useRef, useEffect } from "react";
import UniqueCategories from "../utils/helperFunc.js";
//import { DataContext } from "../assets/context/Products_context";
import { useStore } from "../store/store.js";

const Filters = () => {
  /* const { state, dispatch } = useContext(DataContext);
  const { activeButton, data } = state; */
  const { onFilter, products, valueActive, updateCategorie, allProducts } =
    useStore();
  const [inpuText, setInput] = useState("");

  useEffect(() => {
    console.log("Component shop Rendered!");
  });

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    onFilter(text);
  };

  let categories = ["ALL"];

  if (allProducts) {
    categories = UniqueCategories(allProducts);
  }

  return (
    <div className="pl-4">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* search input */}
        <div className="py-4 form-control">
          <input
            type="text"
            name="text"
            placeholder="search"
            className="border-2 border-[#ef6027] p-2 rounded"
            value={inpuText}
            onChange={handleChange}
          />
        </div>
      </form>

      {/* categories */}
      <div className="py-4 form-control">
        <h5 className="text-lg font-medium">Category</h5>
        <div>
          {categories.map((c, index) => {
            return (
              <button
                key={index}
                id={index}
                onClick={(e) => {
                  const category = e.target.textContent;
                  const valueId = e.target.id;
                  updateCategorie(category, valueId);
                }}
                name="category"
                type="button"
                className={
                  valueActive == index
                    ? "px-2 underline text-gray-700 text-lg"
                    : "px-2 text-gray-200 text-lg"
                }
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Filters;
