import ProductCard from "./productCard";
import Slider from "react-slick";


//TODO:Add this is in the interface folder

interface ProductProp {
    id: number;
    name: string;
    price:  number;
    originalPrice:  number;
    discount :  string | null;
    rating:  number;
    totalReviews: number,
    imageUrl:  string;
    isInStock: boolean;
}

interface ProductCarouselProps {
    products: ProductProp[]; 
}

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "block",
          background: "#F5F5F5",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          top: "-75px",
          right: "32px",
        }}
        onClick={onClick}
      >
       <img src="/assets/images/svg/landingPage/rightArrow.svg" />
      </div>
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "block",
          background: "#F5F5F5",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          top: "-75px",
          right: "96px",
        }}
        onClick={onClick}
      >
        <img src="/assets/images/svg/landingPage/leftArrow.svg" />
      </div>
    );
  }
  
  const ProductCarousel = ({ products }: ProductCarouselProps) => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      ,
    };
  
    return (
      <div style={{ position: "relative", paddingTop: "0px" }}>
        <div className="max-w-[1212px]">
            <Slider {...settings}>
            {products.map((productProp: ProductProp) => (
                <div key={productProp.id}>
                <ProductCard product={productProp} />
                </div>
            ))}
            </Slider>
        </div>
       
      </div>
    );
  };
  
  export default ProductCarousel;
  