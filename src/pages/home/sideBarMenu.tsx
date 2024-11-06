
const SideBarMenu = ()=>{
    const categories = [
        "Woman's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty"
      ];
    return (
        <div className="border-r">
            <div className="font-Poppins font-semibold text-sm flex-direction: row mt-10 ml-[135px] w-56 pr-4">
                {categories.map(( category, index)=> (
                     <div key = {index} className="mt-4">
                     {category}
                 </div>
                ))}
            </div>

        </div>
    )
}

export default SideBarMenu;