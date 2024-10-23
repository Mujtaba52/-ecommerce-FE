import { ProductCarouselProps, ProductProp } from "../../types";
import ProductCard from "./productCard";
import Slider from "react-slick";

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
          top: "-70px",
          right: "32px",
        }}
        onClick={onClick}
      >
       <img src="src/assets/images/svg/landingPage/rightArrow.svg" />
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
          top: "-70px",
          right: "96px",
        }}
        onClick={onClick}
      >
        <img src="src/assets/images/svg/landingPage/leftArrow.svg" />
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
  