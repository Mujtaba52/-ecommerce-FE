const Contact = () => {
    return (
        <div className="flex mt-32 ml-[135px] mb-36 gap-8 animate-fadeInUp">
            <div className="flex flex-col w-80 p-8 border font-Poppins rounded mb-6 h-[425px]">
                <div className="flex gap-4 mb-6">
                    <img src="/assets/images/svg/contact/phoneIcon.svg" />
                    <span className="text-base font-medium">Call Me</span>
                </div>
                <span className="text-sm mb-4">I am available 24/7, 7 days a week.</span>
                <span className="text-sm  mb-4 pb-8 border-b">Phone: +358 417416705</span>
                <div className="flex gap-4 pt-8 mb-6">
                    <img src="/assets/images/svg/contact/mailIcon.svg" />
                    <span className="font-Poppins text-base font-medium">Write To Me</span>
                </div>
                <span className="text-sm mb-4">Fill out our form and we will contact you within 24 hours.</span>
                <span className="text-sm  mb-4 pb-8">Emails: mujhassan786@gmail.com</span>

            </div>
            <div className="flex flex-col p-8 border rounded w-[835px] h-[425px]">
                <div className="flex gap-4 h-12 mb-8">
                    <input type="text" className="bg-[#F5F5F5] pl-4 rounded w-full" placeholder="Your Name *" />
                    <input type="text" className="bg-[#F5F5F5] pl-4 rounded w-full" placeholder="Your Email *" />
                    <input type="text" className="bg-[#F5F5F5] pl-4 rounded w-full" placeholder="Your Phone *" />
                </div>
                    <textarea className=" h-52  mb-8 bg-[#F5F5F5] pt-3 pl-3 rounded" placeholder="Your Message" />
                <div className="flex justify-end ">
                    <button className="bg-[#DB4444] px-12 py-4 rounded text-white">Send Message</button>
                </div>
            

            </div>
        </div>
    )
}
export default Contact