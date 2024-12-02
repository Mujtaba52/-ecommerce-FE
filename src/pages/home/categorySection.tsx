import { useNavigate } from "react-router-dom";
import HeadingWithBadge from "../../components/common/headingWithBadge";
import { Smartphone, Computer, Camera, Armchair, Salad, Watch } from "lucide-react";

const CategorySection = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: <Smartphone size={36} className="text-current" />,
    },
    {
      id: 2,
      name: "Laptops",
      icon: <Computer size={36} className="text-current" />,
    },
    {
      id: 3,
      name: "Mens-watches",
      icon: <Watch size={36} className="text-current" />,
    },
    {
      id: 4,
      name: "Camera",
      icon: <Camera size={36} className="text-current" />,
    },
    {
      id: 5,
      name: "Furniture",
      icon: <Armchair size={36} className="text-current" />,
    },
    {
      id: 6,
      name: "Groceries",
      icon: <Salad size={36} className="text-current" />,
    },
  ];

  const handleViewCategoryClick= (category: string)=>{
    navigate(`/products?page=1&limit=10&category=${category}`);
  }

  return (
    <div className="ml-[135px]">
      <HeadingWithBadge
        subHeading={"Categories"}
        mainHeading={"Popular Categories"}
      />
      <div className="flex gap-11 mt-4">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={()=>handleViewCategoryClick(category.name.toLowerCase())}
            className="flex flex-col items-center justify-center w-40 h-40 border border-gray-300 rounded-lg cursor-pointer transition-all duration-300 hover:bg-red-500 group"
          >
            <div className="mb-2 transition-colors group-hover:text-white">
              {category.icon}
            </div>
            <span className="text-center text-sm font-medium transition-colors group-hover:text-white">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
