import Image from "next/image";
import './products.css';

interface ProductProps {
    image: string;
    title: string;
    description: string;
    id: number;
}

const ProductCard = ({ image, title, description }: ProductProps) => {
    return (
        <div className="product-card">
            <Image className="product-image" src={image} alt={title} width={300} height={220} />
            <div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description.substring(0, 100)}...</p>
            </div>
        </div>
    );
};

export default ProductCard;
