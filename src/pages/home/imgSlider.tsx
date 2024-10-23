import Slider from "react-slick";

const ImgSlider = ()=>{
    var settings = {
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
        "src/assets/images/svg/landingPage/sliderImg1.svg",
        "src/assets/images/png/landingPage/tcl.webp"
      ]

    return (
        <div className="pt-8 w-[924px]">
            <Slider {...settings}>
                {sliderImages.map((imgUrl, index) => (
                    <div key={index} className="w-full h-96">
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