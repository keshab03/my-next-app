import axios from "axios";
import ProductCard from "./Components/ProductCard";

interface productDetails {
  images: string;
  title: string;
  description: string;
  id: number;
}

export default async function Home({ searchParams }: { searchParams: { search?: string } }) {
  const searchTerm = searchParams.search?.toLowerCase() || "";

  const getData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      if (response && response.data) {
        return response.data.products;
      } else {
        console.log("No Data Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const allProducts = await getData();

  // Filter products based on search term
  const filteredProducts = allProducts.filter((product: productDetails) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="page">
      <h2>Product List</h2>
      <form method="GET" action="/">
        <input
          type="text"
          name="search"
          placeholder="Search by title"
          defaultValue={searchTerm}
          className="search-bar"
        />
        <button type="submit">Search</button>
      </form>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: productDetails) => (
            <ProductCard
              key={product.id}
              image={product.images[0]}
              title={product.title}
              description={product.description}
              id={product.id}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}