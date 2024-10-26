import HeadingWithBadge from "../../components/common/headingWithBadge";

const CategorySection = ()=>{
    const categories = [
        {
          id: 1,
          name: "Phones",
          icon: "/assets/images/svg/landingPage/Category-Computer-Icon.svg",
        },
        {
          id: 2,
          name: "Computers",
          icon: "/assets/images/svg/landingPage/Category-Phone-Icon.svg",
        },
        {
          id: 3,
          name: "SmartWatch",
          icon: "/assets/images/svg/landingPage/Category-Phone-Icon.svg",
        },
        {
          id: 4,
          name: "Camera",
          icon: "/assets/images/svg/landingPage/Category-Phone-Icon.svg",
        },
        {
          id: 5,
          name: "HeadPhones",
          icon: "/assets/images/svg/landingPage/Category-Phone-Icon.svg",
        },
        {
          id: 6,
          name: "Gaming",
          icon: "/assets/images/svg/landingPage/Category-Phone-Icon.svg",
        }
      ];
      
    return (
        <div className="ml-[135px]">
            <HeadingWithBadge subHeading = {"Category"} mainHeading={"Browse By Category"} />
            <div className="flex gap-8">
                {
                    categories.map((category, index)=>(
                        <img key={index} src={category.icon} className=" hover:bg-[#DB4444] rounded" />
                    ))
                }
            </div>
        </div>
    )
}

export default CategorySection;