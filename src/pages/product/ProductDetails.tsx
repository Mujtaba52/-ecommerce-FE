import React, { useState } from "react";

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

// Main component for image slider
const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(productsList[0].imageUrl);

  const handleThumbnailClick = (imageUrl:any) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 ml-[135px] mt-32">
          {/* Thumbnail Images */}
          <div className="flex md:flex-col flex-row gap-4">
            {productsList.map((product) => (
            <img
                key={product.id}
                src={product.imageUrl}
                alt={product.name}
                onClick={() => handleThumbnailClick(product.imageUrl)}
                className={`w-20 h-20 rounded-md cursor-pointer bg-[#F5F5F5] ${
                selectedImage === product.imageUrl
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
            />
            ))}
        </div>
      {/* Main Image */}
      <div className="md:w-1/3 w-28 bg-[#F5F5F5] rounded">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
