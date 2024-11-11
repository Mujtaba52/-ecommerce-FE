import { useEffect, useState } from "react";
import HeadingWithBadge from "../../components/common/headingWithBadge";
import ProductCarousel from "../../components/common/productCarousel";
import { useNavigate } from "react-router-dom";
import { getProducts } from "@/lib/apis/apiCalls/productApi";

const FlashSaleSection = ()=>{
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const handleViewProductClick = () => {
        navigate('/products');
      };
    const fetchFlashSaleItems = async ()=>{
        try{
            const response:any = await getProducts();
            setProducts(response.products);
        }
        catch(error){
            console.error("Error fetching flash sale items:", error);
        }
    }
    useEffect(()=>{
        fetchFlashSaleItems();
    }, []);

    return (
        <div className="ml-[135px] animate-fadeInUp">
            <div>
                <HeadingWithBadge subHeading = {"Today's"} mainHeading={"Flash Sales"} countdownTarget="2024-10-30T00:00:00" />
            </div>
            <ProductCarousel products ={products} />
            <div className="flex justify-center py-16 border-b mr-[135px]">
                <button onClick = {()=>handleViewProductClick()}className="py-4 px-12 bg-[#DB4444]  font-medium text-base text-white rounded">View All Products</button>   
            </div>
        </div>
    )

}

export default FlashSaleSection;