import { getProductById } from "@/lib/apis/apiCalls/productApi";
import { Product } from "@/types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

  
// Main component for image slider
const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(product?.thumbnail);
  const { productId } = useParams<{ productId: string }>();
  
  const fetchProductDetail = async (productId:string)=>{
    try{
      const response: any = await getProductById(productId);
      setProduct(response as Product);
    }catch(error){

    }
  }
  useEffect(()=>{
    fetchProductDetail(productId as string);
  }, [])
  const handleThumbnailClick = (imageUrl:string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 ml-[135px] mt-32">
        <div className="flex md:flex-col flex-row gap-4 ">
            {product?.images.map((imageUrl:string, index: number) => (
            <img
                key={index}
                src={imageUrl}
                alt={imageUrl}
                onClick={() => handleThumbnailClick(imageUrl)}
                className={`w-28 h-28 rounded-md cursor-pointer bg-[#F5F5F5] ${
                selectedImage === imageUrl
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
            />
            ))}
        </div>
      {/* Main Image */}
      <div className="w-[500px] h-[625px]  bg-[#F5F5F5] rounded flex items-center justify-center">
        <img
          src={selectedImage?? product?.images[0]}
          alt="Selected"
          className=" w-4/5 h-4/5 rounded-lg object-contain "
        />
      </div>
    <div className="font-Poppins ml-10 w-96">
        <div className="font-semibold text-2xl">${product?.title}</div>
        <div className="mt-2">Reviews</div>
        <div className="text-2xl font-normal mt-3">${product?.price}</div>
        <div className="pb-7 border-b mt-4">{product?.description}</div>
        <div className="flex items-baseline gap-6">
          <div className="mt-7">Colors: </div>
          <div className="flex gap-5">{product?.colors?.map((color:string)=>(
            <div className={`bg-[${color}] border w-5 h-5 rounded-full`}></div>
          ))}</div>
        </div>
        <div className="flex gap-6 items-baseline">
          <a className="mt-4 text-xl">Size:</a>
          <a className="flex gap-6">{product?.sizes?.map((size:string)=>(
            <div className="border text-sm rounded w-10 h-10 flex justify-center items-center hover:bg-red-600 hover:text-white">{size}</div>
          ))}</a>
        </div>
        
        <div className="mt-4 bg-[#DB4444] text-white w-40 px-10 py-3 rounded">Buy Now</div>
        <div className="w-96 h-48 rounded border mt-8 flex flex-col justify-center">
          <div className="border-b flex">
            <img className="m-4" src= "/assets/images/svg/products/deliveryIcon.svg"/>
            <div className="flex flex-col">
              <div className="text-base mt-3 mb-1">Free Delivery</div>
              <div  className="text-xs underline" >Enter your postal code for Delivery Availability</div>
            </div>
          </div>
          <div className="flex">
            <img className="m-4" src= "/assets/images/svg/products/returnIcon.svg"/>
            <div className="flex flex-col">
              <div className="text-base mt-3 mb-1">Return Delivery</div>
              <div className="text-xs underline">Free 30 Days Delivery Returns. Details</div>
            </div>
          </div>

        </div>
    </div>
    </div>
  );
};

export default ProductDetail;
