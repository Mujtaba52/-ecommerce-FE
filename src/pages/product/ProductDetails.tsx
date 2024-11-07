import { useState } from "react";

// Dummy product list
const productsList = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    imageUrl: "/assets/images/svg/products/ps5Controller.svg",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    imageUrl: "/assets/images/svg/products/keyboard.svg",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    imageUrl: "/assets/images/svg/products/monitor.svg",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    imageUrl: "/assets/images/svg/products/chair.svg",
  },
  {
    id: 5,
    name: "S-Series Comfort Chair",
    imageUrl: "/assets/images/svg/products/chair.svg",
  },
];
interface Gamepad {
    name: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    price: number;
    description: string;
    colors: string[];
    sizes: string[];
    selectedColor: string;
    selectedSize: string;
    quantity: number;
  }
  
  const havicHVG92Gamepad: Gamepad = {
    name: "Havic HV G-92 Gamepad",
    rating: 4.0,
    reviewCount: 150,
    inStock: true,
    price: 192.00,
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    colors: ["#C0C0C0", "#D27D7D"], // Hex color codes for representation
    sizes: ["XS", "S", "M", "L", "XL"],
    selectedColor: "#D27D7D", // Assuming the red color is selected
    selectedSize: "M", // Assuming "M" size is selected
    quantity: 2
  };
  
// Main component for image slider
const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(productsList[0].imageUrl);

  const handleThumbnailClick = (imageUrl:string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 ml-[135px] mt-32">
        <div className="flex md:flex-col flex-row gap-4 ">
            {productsList.map((product) => (
            <img
                key={product.id}
                src={product.imageUrl}
                alt={product.name}
                onClick={() => handleThumbnailClick(product.imageUrl)}
                className={`w-28 h-28 rounded-md cursor-pointer bg-[#F5F5F5] ${
                selectedImage === product.imageUrl
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
            />
            ))}
        </div>
      {/* Main Image */}
      <div className="w-[500px] h-[625px]  bg-[#F5F5F5] rounded flex items-center justify-center">
        <img
          src={selectedImage}
          alt="Selected"
          className=" w-4/5 h-4/5 rounded-lg object-contain "
        />
      </div>
    <div className="font-Poppins ml-10 w-96">
        <div className="font-semibold text-2xl">Havic HV G-92 Gamepad</div>
        <div className="mt-2">Reviews</div>
        <div className="text-2xl font-normal mt-3">${havicHVG92Gamepad.price}</div>
        <div className="pb-7 border-b mt-4">{havicHVG92Gamepad.description}</div>
        <div className="flex items-baseline gap-6">
          <div className="mt-7">Colors: </div>
          <div className="flex gap-5">{havicHVG92Gamepad.colors.map((color)=>(
            <div className={`bg-[${color}] border w-5 h-5 rounded-full`}></div>
          ))}</div>
        </div>
        <div className="flex gap-6 items-baseline">
          <a className="mt-4 text-xl">Size:</a>
          <a className="flex gap-6">{havicHVG92Gamepad.sizes.map((size)=>(
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

export default ImageSlider;
