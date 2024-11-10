import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store.ts"
import { Product } from "@/types";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart)
  return (
    <div className="ml-[135px] mt-40">
        <div className="w-[1170px] flex justify-between p-6 shadow rounded">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        {cartItems.map((item:Product, index:number)=>(
          <div key={index} className="w-[1170px] flex justify-between p-6 shadow rounded">
            <img src={item.thumbnail} className="w-20 h-20"></img>
            <div>${item.price}</div>
            <div>1</div>
            <div>${item.price}</div>
          </div>
        ))}
        <div className="flex gap-44 my-20">
          <div className="flex gap-4">
              <input className="w-72 h-14 rounded border pl-5" placeholder="Coupon Code"></input>
              <button className="h-14 bg-[#DB4444] px-12 py-4 rounded text-white">Apply Coupon</button>
            </div>
            <div>

            </div>
        </div>
          
        
    </div>
  )
}

export default Cart