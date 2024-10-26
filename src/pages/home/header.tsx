import { Link } from "react-router-dom";

const Header = ()=>{
    
    return (<>
        <div className="border-b">
            <div className="flex ml-[135px] mt-10 mb-4">
                <div className="font-Inter font-bold text-2xl mr-48" >
                    Exclusive
                </div>
                <div className="font-Poppins font-semibold text-sm flex justify-around gap-x-12 mr-36">
                    <Link to="/" className="hover:underline underline-offset-4">
                        Home
                    </Link>
                    <Link to="/contact" className="hover:underline underline-offset-4">
                        Contact
                    </Link>
                    <Link to="/about" className="hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link to="/signup" className="hover:underline underline-offset-4">
                        Sign Up
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center bg-transparent bg-[#e1e1e1] pl-5 pr-3 py-2 w-72 rounded border-2" >
                        <input
                            type="text"
                            placeholder="Search items..."
                            className="bg-transparent w-full focus:outline-none"
                        />
                        <img src="/assets/images/svg/landingPage/searchBarIcon.svg"  className="w-6 h-6 cursor-pointer"/>
                    </div>
                    <img  src="/assets/images/svg/landingPage/heart.svg" alt="Heart Img" className="w-7 h-7 cursor-pointer" />
                    <img src="/assets/images/svg/landingPage/cart.svg" alt="Cart Img" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
        </div>
    </>
    );
}

export default Header;