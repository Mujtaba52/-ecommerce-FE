import { getProducts } from "@/lib/apis/apiCalls/productApi";
// import { ApiResponse } from "@/types";
import { useEffect, useState } from "react"
import ProductCard from "@/components/common/productCard";
import ProductCardSkeleton from "@/components/common/ProductCardSkeleton";

const ProductListings = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState([])
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async ()=>{
    (true);
    try{
      const response: any = await getProducts();
      //TODO: update this if cond. after integrating your own backend
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
        <div className="flex flex-wrap gap-4">
        {Array(12).fill(0).map((_, idx) => <ProductCardSkeleton key={idx} />)}
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="flex flex-wrap gap-4">
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