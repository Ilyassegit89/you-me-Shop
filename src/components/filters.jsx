import { useState, useContext, useRef, useEffect } from "react";
//import { useFilterContext } from "../assets/context/Filter_context";
import UniqueCategories from "../utils/helperFunc.js";
import { DataContext } from "../assets/context/Products_context";
//import {useFilterContext} from "../assets/context/Filter_context"

const Filters = () => {
  const { state, dispatch } = useContext(DataContext);
  const { activeButton, data } = state;

  const [inpuText, setInput] = useState("");
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, [data]);

  let categories = ["ALL"];

  if (data != null) {
    categories = UniqueCategories(data);
  }

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);

    dispatch({ type: "FILTER_PRODUCTS", payload: text });
  };

  return (
    <div className="pl-4">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* search input */}
        <div className="py-4 form-control">
          <input
            ref={input}
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
                  const value = e.target.textContent;
                  const valueId = e.target.id;
                  dispatch({
                    type: "UPDATE_CATEGORY",
                    payload: value,
                    valueActive: valueId,
                  });

                  console.log(`${activeButton} = ${index}`);
                }}
                name="category"
                type="button"
                className={
                  activeButton == index
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
