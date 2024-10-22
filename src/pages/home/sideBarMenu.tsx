
const SideBarMenu = ()=>{
    let categories = [
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
            <div className="flex-direction: row mt-10 ml-[135px] w-56 pr-4">
                {categories.map(( category)=> (
                     <div className="mt-4">
                     {category}
                 </div>
                ))}
            </div>

        </div>
    )
}

export default SideBarMenu;