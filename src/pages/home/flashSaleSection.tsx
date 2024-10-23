import HeadingWithBadge from "../../components/common/headingWithBadge";
import ProductCarousel from "../../components/common/productCarousel";

const FlashSaleSection = ()=>{
    const productsList = [
        {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        originalPrice: 160,
        discount: "40%",
        rating: 4.5,
        totalReviews: 88,
        imageUrl: "src/assets/images/svg/products/ps5Controller.svg",
        isInStock: true,
        },
        {
        id: 2,
        name: "AK-900 Wired Keyboard",
        price: 960,
        originalPrice: 1160,
        discount: "35%",
        rating: 3.5,
        totalReviews: 75,
        imageUrl: "src/assets/images/svg/products/keyboard.svg",
        isInStock: true,
        },
        {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        originalPrice: 400,
        discount: "30%",
        rating: 4.5,
        totalReviews: 99,
        imageUrl: "src/assets/images/svg/products/monitor.svg",
        isInStock: true,
        },
        {
        id: 4,
        name: "S-Series Comfort Chair",
        price: 375,
        originalPrice: 400,
        discount: "25%",
        rating: 4.5,
        totalReviews: 99,
        imageUrl: "src/assets/images/svg/products/chair.svg" ,
        isInStock: true,
        },
        {
        id: 5,
        name: "S-Series Comfort Chair",
        price: 375,
        originalPrice: 400,
        discount: null,
        rating: 4.5,
        totalReviews: 99,
        imageUrl: "src/assets/images/svg/products/chair.svg" ,
        isInStock: true,
        }
    ];
    return (
        <div className="ml-[135px]">
            <div>
                <HeadingWithBadge subHeading = {"Today's"} mainHeading={"Flash Sales"} />
            </div>
            <ProductCarousel products = {productsList} />
            <div className="flex justify-center py-16 border-b mr-[135px]">
                <button className="py-4 px-12 bg-[#DB4444] font-Poppins font-medium text-base text-white rounded">View All Products</button>   
            </div>
        </div>
    )

}

export default FlashSaleSection;