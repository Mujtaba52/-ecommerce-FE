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
        <div className="pt-10 w-[892px]">
             <Slider {...settings}>
                {
                    sliderImages.map((imgUrl)=>(
                        <div>
                                <img src = {imgUrl} className="rounded-sm h-[344px]"/>
                        </div>
                        
                    ))
                }
             </Slider>
            
        </div>
    )
}

export default ImgSlider