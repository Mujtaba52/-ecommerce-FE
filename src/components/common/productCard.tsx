import { Product } from "../../types";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard= ({product}:{product: Product})=>{

    const dispatch = useDispatch();
    const addToCart = (product: Product)=>{
        dispatch(add(product));
    }
    const navigate = useNavigate();
    const handleViewProductClick = () => {
        navigate(`/products/${product.id}`);
      };
       
    return (
        <>
            <div className="group relative w-[270px] h-[250px] bg-[#F5F5F5] rounded flex justify-center items-center">
                {
                    product.discountPercentage && (
                        <div className="flex absolute top-3 left-3  text-xs px-3 py-1 bg-red-600 text-white rounded">
                            -{product.discountPercentage}%
                        </div>
                    )
                }
                <div className="flex absolute top-3 right-3 flex-col space-y-2 ">
                    <div className="p-2 bg-white rounded-full shadow-md cursor-pointer">
                        <img src="/assets/images/svg/landingPage/heart.svg" className="w-4 h-4" />
                    </div>
                    <div onClick={handleViewProductClick} className="p-2 bg-white rounded-full shadow-md cursor-pointer">
                        <img src="/assets/images/svg/landingPage/eyeIcon.svg" className="w-4 h-4" />
                    </div>
                    
                </div>
                <img src={product.thumbnailUrl} className="w-48 h-44"/>
                <button onClick={()=>addToCart(product)} className="absolute bottom-0 left-0 w-full py-3 bg-black text-white text-sm font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 active:bg-[#F5F5F5]">
                    Add To Cart
                </button>
            </div>
            <div className="h-[72px] w-[270px] ">
                <div className=" font-medium text-base pb-2">
                    {product.name}
                </div>
                <div className="pb-2 flex items-center space-x-2">
                    <span className="text-red-500 font-semibold">${product.price}</span>
                    <span className="text-gray-500 line-through">${product.price}</span>
                </div>
                {/* <div className="pb-2">{product.totalReviews}</div> */}
            </div>
        </>
    )
}

export default ProductCard;