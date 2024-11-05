import { ArrowProps, ProductCarouselProps, Product } from "../../types";
import ProductCard from "./productCard";
import Slider from "react-slick";

  function SampleNextArrow({ onClick }: ArrowProps) {
    return (
      <div
        style={{
          display: "block",
          background: "#F5F5F5",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          top: "-70px",
          right: "32px",
        }}
        onClick={onClick}
      >
       <img src="/assets/images/svg/landingPage/rightArrow.svg" />
      </div>
    );
  }
  
  function SamplePrevArrow({ onClick }: ArrowProps) {
    return (
      <div
        style={{
          display: "block",
          background: "#F5F5F5",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          top: "-70px",
          right: "96px",
        }}
        onClick={onClick}
      >
        <img src="/assets/images/svg/landingPage/leftArrow.svg" />
      </div>
    );
  }
  
  const ProductCarousel = ({ products }: ProductCarouselProps) => {
    const settings = {
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
            {products.map((productProp: Product) => (
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
  