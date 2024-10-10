import Image from "next/image";
import './productsdetails.css'
interface ProductDetails {
    image: string;
    title: string;
    description: string;
    rating: string;
    price: number;
}

const ProductDetails = ({ image, title, description, rating, price }: ProductDetails) => {
    return (
        <div className="product-details-container">
            <Image className="product-image" src={image} alt={title} width={400} height={450} />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="product-info">
                <p><strong>Price: </strong>{price}</p>
                <p><strong>Rating: </strong>{rating}</p>
            </div>
        </div>
    )
}

export default ProductDetails