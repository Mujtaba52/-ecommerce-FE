
const Header = ()=>{
    return (<>
        <div className="border-b">
            <div className="flex ml-[135px] mt-10 mb-4">
                <div className="font-Inter font-bold text-2xl mr-48" >
                    Exclusive
                </div>
                <div className="font-Poppins font-normal text-base flex justify-around gap-x-12 mr-36">
                    <button>
                        Home
                    </button>
                    <button>
                        Contact
                    </button>
                    <button>
                        About
                    </button>
                    <button>
                        Sign Up
                    </button>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center bg-transparent bg-[#f0efef] pl-5 pr-3 py-2 w-64 rounded" >
                        <input
                            type="text"
                            placeholder="What are you looking for ?"
                            className="bg-transparent w-full"
                        />
                        <img src="src/assets/images/svg/landingPage/searchBarIcon.svg"  className="w-6 h-6 cursor-pointer"/>
                    </div>
                    <img  src="src/assets/images/svg/landingPage/heart.svg" alt="Heart Img" className="w-7 h-7 cursor-pointer" />
                    <img src="src/assets/images/svg/landingPage/cart.svg" alt="Cart Img" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
        </div>
    </>
    );
}

export default Header;