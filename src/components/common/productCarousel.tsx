import ProductCard from "./productCard";

//TODO:Add this is in the interface folder

interface ProductProp {
    id: number;
    name: string;
    price:  number;
    originalPrice:  number;
    discount:  string;
    rating:  number;
    totalReviews: number,
    imageUrl:  string;
    isInStock: boolean;
}

interface ProductCarouselProps {
    products: ProductProp[]; 
}

const ProductCarousel = ({products}:ProductCarouselProps )=>{

    return (
        <div className="ml-[135px] ">
            <div className="h-12 font-Poppins font-semibold text-4xl mb-10">
                Flash Sales
            </div>
             <div className="flex gap-8">
            {
                products.map((productProp:ProductProp)=>(
                    <div key={productProp.id}>
                        <ProductCard product={productProp}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ProductCarousel