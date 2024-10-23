import CategorySection from "./categorySection";
import FlashSaleSection from "./flashSaleSection";
import Header from "./header";
import ImgSlider from "./imgSlider";
import SideBarMenu from "./sideBarMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ()=>{
   
    return (<>
    <Header />
    <div className="flex gap-16">
        <SideBarMenu />
        <ImgSlider />
    </div>
    <div className="pt-36">
        <FlashSaleSection />
    </div>
    <div className="pt-20">
        <CategorySection />
    </div>
    <div className="pt-20">
        <FlashSaleSection />
    </div>
    <div>
        <img src="src/assets/images/svg/landingPage/JBLFrame.svg" className="ml-[135px]" />
    </div>
    </>)
  
}


export default Home;