import { getProducts } from "@/lib/apis/apiCalls/productApi";
import { ApiResponse } from "@/types";
import { useEffect, useState } from "react"
import Lottie from "lottie-react";
import LoadingCart from "../../../public/assets/lotties/loadingCart.json"

const ProductListings = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState([])
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async ()=>{
    setIsLoading(true);
    try{
      const response: any = await getProducts();
      
      if (response.products.length>0) {
        console.log("Response==>>", response.products)
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
    <div className="h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Lottie animationData={LoadingCart} loop={true} className="h-28" />
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"> {/* Responsive grid */}
          {products.map((product: any) => (
            <div key={product.id} className="p-4 border rounded shadow-sm animate-fadeInUp">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              {/* Add other product details here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListings