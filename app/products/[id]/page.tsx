import axios from "axios";
import ProductDetails from "../../Components/ProductDetails";
interface ProductDetailsPage {
    params: {
        id: string;
    }
}

const getProductDetails = async (id: string) => {
    try {
        const data = await axios.get(`https://dummyjson.com/products/${id}`)
        if (data) {
            return data.data;
        } else {
            console.log("No Data Found");
        }
    } catch (error) {
        console.log(error);
    }
}
const productDetails = async ({ params }: ProductDetailsPage) => {
    const { id } = params;
    const productDetail = await getProductDetails(id);
    
    return (
        <div>
            <ProductDetails
            image={productDetail.images[0]}
            title={productDetail.title}
            description={productDetail.description}
            price={productDetail.price}
            rating={productDetail.rating}
            />
        </div>
    )
}

export default productDetails