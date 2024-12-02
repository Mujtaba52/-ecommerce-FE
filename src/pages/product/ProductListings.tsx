import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/common/productCard";
import ProductCardSkeleton from "@/components/common/ProductCardSkeleton";
import { getProducts } from "@/lib/apis/apiCalls/productApi";
import { Product } from "@/types";
import { useEffect } from "react";

const ProductListings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const pageIndex = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 12);
  const category = searchParams.get("category") || "";

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products", { pageIndex, limit, category }],
    queryFn: () => getProducts(pageIndex, limit, category),
  });

  // Handle Pagination
  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString(), limit: limit.toString(), category });
    navigate(`/products?page=${newPage}&limit=${limit}${category ? '&category='+category : ''}`);
  };

  useEffect(()=>{
    scrollTo(0,0);
  },[pageIndex]);
  
  return (
    <div className="min-h-screen ml-[135px] mr-40 mt-20">
      {isLoading ? (
        <div className="flex flex-wrap gap-4">
          {Array(limit)
            .fill(0)
            .map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
        </div>
      ) : isError ? (
        <p className="text-center text-red-500">{error.message}</p>
      ) : (
        <>
          <div className="flex flex-wrap gap-4">
            {data.products.map((product: Product) => (
              <div key={product.id} className="rounded animate-fadeInUp">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => handlePageChange(pageIndex - 1)}
              disabled={pageIndex === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span>
              Page {pageIndex} of {Math.ceil(data.totalRecords / limit)}
            </span>
            <button
              onClick={() => handlePageChange(pageIndex + 1)}
              disabled={pageIndex * limit >= data.totalRecords}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListings;
