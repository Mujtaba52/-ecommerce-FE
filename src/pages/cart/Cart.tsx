import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store.ts"
import { Product } from "@/types";
import { remove} from '@/redux/slices/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);

  const removeItem = (productId: number) => {
    dispatch(remove(productId));
  };

  return (
    <div className="ml-[135px] mt-40">
        <div className="w-[1170px] flex justify-between p-6 shadow rounded">
          <div className="w-36">Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        {cartItems.map((item:Product, index:number)=>(
          <div key={index} className="w-[1170px] flex justify-between p-4 shadow rounded my-10 items-center relative">
            <div className="flex items-center gap-4 w-28 relative group">
            <button className="absolute -top-3 -left-3 bg-transparent text-white flex items-center justify-center w-9 h-9 invisible group-hover:visible">
              <img onClick={()=>removeItem(index)} src="assets/images/svg/cart/cancelIcon.svg" className="w-5 h-5" alt="Remove" />
            </button>
              <img src={item.thumbnail} className="w-20 h-20" />
              <div>{item.title}</div>
            </div>
            <div>${item.price}</div>
            <input type="text" className="w-20 text-center border rounded" value={1}></input>
            <div>${item.price}</div>
          </div>
        ))}
        <div className="flex gap-44 my-20">
          <div className="flex gap-4">
            <input className="w-72 h-14 rounded border pl-5" placeholder="Coupon Code"></input>
            <button className="h-14 bg-[#DB4444] px-12 py-4 rounded text-white">Apply Coupon</button>
          </div>
          <div className="border-2 rounded w-96 h-80 flex-col p-5">
              <div className="text-xl pb-4">
                Cart Total
              </div>
              <div className="w-full flex justify-between mb-4 border-b py-2">
                <div>Subtotal:</div>
                <div>${totalCost}</div>
              </div>
              <div className="w-full flex justify-between mb-4 border-b py-2">
                <div>Shipping:</div>
                <div>Free</div>
              </div>
              <div className="w-full flex justify-between mb-4 py-2">
                <div>Total:</div>
                <div>${totalCost}</div>
              </div>
              <div className="w-full flex justify-center">
                  <button className="bg-[#DB4444] text-white px-12 py-4 rounded">Proceed to checkout</button>
              </div>

          </div>
        </div>
          
        
    </div>
  )
}

export default Cart