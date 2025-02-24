const UniqueCategories =  (products) => {
  const uniqueCategories = [...new Set(products.map(product => product.category.split(' ')[0]))];
  uniqueCategories.unshift("All");
  return uniqueCategories;
}
export default UniqueCategories;