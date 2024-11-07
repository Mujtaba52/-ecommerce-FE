import { getProducts } from "@/lib/apis/apiCalls/productApi";
// import { ApiResponse } from "@/types";
import { useEffect, useState } from "react"
import Lottie from "lottie-react";
import LoadingCart from "@/assets/lotties/loadingCart.json"
import ProductCard from "@/components/common/productCard";

const ProductListings = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState([])
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async ()=>{
    setIsLoading(true);
    try{
      const response: any = await getProducts();
      
      if (response.products.length>0) {
        setProducts(response.products as []);
      }else{
        setError("Failed to load products.");
      }
    }catch(error){
      setError("An error occurred while fetching products.");
    } finally{
      setIsLoading(false);
    }

  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return (
    <div className="min-h-screen ml-[135px] mr-40 mt-20">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Lottie animationData={LoadingCart} loop={true} className="h-28" />
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="flex flex-wrap gap-4"> {/* Responsive grid */}
          {products.map((product: any) => (
            <div key={product.id} className="rounded animate-fadeInUp">
              {/* TODO: update this for production */}
             <ProductCard product={{...product,name:product.title, imageUrl: product.thumbnail}}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListings