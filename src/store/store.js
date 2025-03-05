import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import axios from 'axios'

export const useStore = create(devtools((set, get) => ({
    products: [], // Stores the filtered list
    allProducts: [], // Stores the original list for reference
    loading: true,
    error: null,
    valueActive: 0,
    valueCategory : '',
    fetchProducts: async () => {
        // If products are already fetched, skip the request
        if (get().products.length > 0) return;

        set({ loading: true });
      try {
        const response = await axios.get("https://my-store-api-blush.vercel.app/api/products");
        set({ products: response.data ,allProducts: response.data, loading: false});
      } catch (error) {
        console.error("Error fetching products:", error);
      }},
    onFilter: (title) => {
      const valueCategory = get().valueCategory; // Ensure category is retrieved from state

        // If title is empty, reset to all products
        if (!title) {
          set({ products: get().allProducts.filter(
            (product) =>
              valueCategory.toLowerCase() === "all"
          ? true // Return all products if category is "all"
          : product.category.toLowerCase().startsWith(valueCategory.toLowerCase())
          )  });
        } else {
          set({
            products: 
            get().products.filter(
              (product) =>
                product.title.toLowerCase().includes(title.toLowerCase()) // Check if title exists in filtered category
            ) 
          }, false, 'onFilter');
        }
      },
      updateCategorie: (category, index) => {
        set(({products: get().allProducts.filter((product) => {
          return category === 'All' ? product : product.category.toLowerCase().startsWith(category) 
        }
        ),valueActive : index, valueCategory : category}), false, 'updateCategorie')
      }

})))

