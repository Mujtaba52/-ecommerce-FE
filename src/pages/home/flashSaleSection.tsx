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
        discount: "25%",
        rating: 4.5,
        totalReviews: 99,
        imageUrl: "src/assets/images/svg/products/chair.svg" ,
        isInStock: true,
        }
    ];
    return (
        <>
            <div className="pt-36 ml-[135px]">
                <HeadingWithBadge heading = {"Today's"} />
            </div>
            <ProductCarousel products = {productsList} />
        </>
    )

}

export default FlashSaleSection;