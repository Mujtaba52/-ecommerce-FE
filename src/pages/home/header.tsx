import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store.ts"

const Header = ()=>{
    const cartItems = useSelector((state: RootState) => state.cart)
    const navigate = useNavigate();
    const handleViewCartClick = () =>{
        navigate('/cart');
    }
    const cartItemCount = cartItems.length;
    return (<>
        <div className="border-b">
            <div className="flex ml-[135px] mt-6 mb-2 items-center">
                <Link to="/" className="font-Inter font-bold text-2xl mr-48" >
                    Exclusive
                </Link>
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
                    <Link to="/sign-up" className="hover:underline underline-offset-4">
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
                    <div className="relative">
                        <img onClick={handleViewCartClick} src="/assets/images/svg/landingPage/cart.svg" alt="Cart Img" className="w-8 h-8 cursor-pointer" />
                        {cartItemCount > 0 && (
                            <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                                {cartItemCount}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Header;