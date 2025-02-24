

  const products_reducer = (state, action) => {
    if (action.type === "GET_PRODUCTS_BEGIN") {
        return { ...state, products_loading: true };
      }
  }

  export default products_reducer;
