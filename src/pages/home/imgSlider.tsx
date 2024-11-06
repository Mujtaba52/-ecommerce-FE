import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const ImgSlider = ()=>{
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    
      const sliderImages = [
        "/assets/images/svg/landingPage/sliderImg1.svg",
        "/assets/images/png/landingPage/tcl.webp"
      ]

      const handleImageClick = (path:string) => {
        navigate(path);
    };


    return (
        <div className="pt-8 w-[924px]">
            <Slider {...settings}>
                {sliderImages.map((imgUrl, index) => (
                    <div key={index} className="w-full h-96" onClick={() => handleImageClick('/product')}>
                        <img
                            src={imgUrl}
                            className="w-full h-full object-cover rounded-md"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImgSlider