
const SignIn = () => {
    return (
      <>
          <div className="flex gap-32 pt-12 animate-fadeInUp">
              <img src="/assets/images/svg/authPage/authPageSideImg.svg" className="w-[750px] h-[550px]"/>
              <div className="flex  flex-col">
                  <div className="font-medium text-4xl pb-6"> Log in to Exclusive</div>
                  <div className="font-normal  pb-12">Enter your details below</div>
                  <input
                      type="text"
                      className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
                      placeholder="Email or Phone Number"
                  />
                  <input
                      type="password"
                      className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
                      placeholder="Password"
                  />
                  <div className="flex justify-between">
                    <button className="bg-[#DB4444] text-white max-w-36 rounded px-12 ">Log In</button>
                    <a className="font-light py-4">Forget Password?</a>
                  </div>
              </div>
          </div>
      </>
    )
  }
  
  export default SignIn