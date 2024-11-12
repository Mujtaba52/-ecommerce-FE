
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/sign-in');
      };
  return (
    <>
        <div className="flex gap-32 pt-12 animate-fadeInUp">
            <img src="/assets/images/svg/authPage/authPageSideImg.svg" className="w-[750px] h-[550px]"/>
            <div className="flex  flex-col">
                <div className="font-medium text-4xl pb-6"> Create an account</div>
                <div className="font-normal  pb-12">Enter your details below</div>
                <input
                    type="text"
                    className="mb-12 border-b max-w-96 border-gray-300 focus:outline-none focus:border-black"
                    placeholder="Name"
                />
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
                <button className="bg-[#DB4444] text-white max-w-96 rounded py-4 mb-3">Create Account</button>
                <button className="flex items-center justify-center gap-2 rounded max-w-96 py-4 border mb-4">
                    <img src="/assets/images/svg/authPage/googleIcon.svg" alt="Google logo" className="w-6 h-6" />
                    Sign up with Google
                </button>
                <div className="flex justify-evenly">
                    <a className="font-light">Already have an account ?</a>
                    <button onClick={handleLoginClick} className="underline">Log in</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp