
const SignIn = () => {
    return (
      <>
          <div className="flex gap-32 pt-16">
              <img src="/assets/images/svg/authPage/authPageSideImg.svg" className="w-[700px] h-[700px]"/>
              <div className="flex font-Poppins flex-col">
                  <div className="font-medium text-4xl pb-6"> Log in to Exclusive</div>
                  <div className="font-normal font-Poppins pb-12">Enter your details below</div>
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
                    <button className="bg-[#DB4444] text-white max-w-36 rounded px-12 py-2">Log In</button>
                    <a className="font-light py-4">Forget Password?</a>
                  </div>
              </div>
          </div>
      </>
    )
  }
  
  export default SignIn