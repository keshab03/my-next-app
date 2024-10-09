import styles from "./page.module.css";
import axios from "axios";
import ProductCard from "./Components/products";

interface productDetails {
  images: string;
  title: string;
  description: string;
  id: number;
}

export default async function Home() {
  const getData = async () => {
    try {
      const data = await axios.get('https://dummyjson.com/products')
      if (data) {
        return data.data.products;
      } else {
        console.log("No Data Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const allData = await getData();

  return (
    <div className={styles.page}>
      <h2>Product List</h2>
      <div className="product-grid">
        {allData && allData.map((product: productDetails) => (
          <ProductCard
            key={product.id}
            image={product.images[0]}
            title={product.title}
            description={product.description}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
