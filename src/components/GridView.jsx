import React from "react";
import Products from "./ShoppingPage/Products";

//import ProductList from "./ProductList";

const GridView = ({ products }) => {
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-[2rem] px-[2rem]">
        {products.map((product) => {
          return  <Products product={product} key={product.id}  image={product.image} title={product.title} price={product.price} category={product.category.split(' ')[0]} />
          ;
        })}
      </div>
  );
};

export default GridView;