


const filter_reducer = (state, action) => {
    if (action.type === "LOAD_PRODUCTS") {
        return {
          ...state,
          all_products: [...action.payload],
        };
      }
}
export default filter_reducer;
