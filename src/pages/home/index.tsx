import CategorySection from "./categorySection";
import FlashSaleSection from "./flashSaleSection";
import ImgSlider from "./imgSlider";
import SideBarMenu from "./sideBarMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ()=>{
    return (
    <div className="animate-fadeInUp">
        <div className="flex gap-8">
            <SideBarMenu />
            <ImgSlider />
        </div>
        <div className="pt-16">
            <FlashSaleSection />
        </div>
        <div className="pt-20">
            <CategorySection />
        </div>
        <div className="pt-20">
            <FlashSaleSection />
        </div>
        <div>
            <img src="/assets/images/svg/landingPage/JBLFrame.svg" className="ml-[135px]" />
        </div>
    </div>
    )
  
}


export default Home;