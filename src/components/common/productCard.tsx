
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

const ProductCard = ({product}:{product: ProductProp})=>{

    return (
        <>
            <div className="group relative w-[270px] h-[250px] bg-[#F5F5F5] rounded flex justify-center items-center">
                <div className="flex absolute top-3 left-3 font-Poppins text-xs px-3 py-1 bg-red-600 text-white rounded">
                    -{product.discount}
                </div>
                <div className="flex absolute top-3 right-3 flex-col space-y-2 ">
                    <div className="p-2 bg-white rounded-full shadow-md cursor-pointer">
                        <img src="src/assets/images/svg/landingPage/heart.svg" className="w-4 h-4" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md cursor-pointer">
                        <img src="src/assets/images/svg/landingPage/eyeIcon.svg" className="w-4 h-4" />
                    </div>
                    
                </div>
                <img src={product.imageUrl} className="w-48 h-44"/>
                <button className="absolute bottom-0 left-0 w-full py-3 bg-black text-white text-sm font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    Add To Cart
                </button>
            </div>
            <div className="h-[72px] w-[270px] ">
                <div className="font-Poppins font-medium text-base pb-2">
                    {product.name}
                </div>
                <div className="pb-2">{product.price}</div>
                <div className="pb-2">{product.totalReviews}</div>
            </div>
        </>
    )
}

export default ProductCard;