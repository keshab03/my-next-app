import Image from "next/image";
import './products.css';
import Link from "next/link";

interface ProductProps {
    image: string;
    title: string;
    description: string;
    id: number;
}

const ProductCard = ({ image, title, description,id }: ProductProps) => {
    return (
        <Link href={`/products/${id}`}>
        <div className="product-card">
            <Image className="product-image" src={image} alt={title} width={300} height={220} />
            <div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description.substring(0, 100)}...</p>
            </div>
        </div>
        </Link>
    );
};

export default ProductCard;
