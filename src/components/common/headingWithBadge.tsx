
interface HeadingWithBadgeProps {
    subHeading: string;
    mainHeading: string;
  }

const HeadingWithBadge = ({subHeading, mainHeading}:HeadingWithBadgeProps)=>{
    return (
        <>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-[#DB4444] rounded ">
                </div>
                <div className="text-[#DB4444] font-Poppins font-semibold text-base">
                    {subHeading}
                </div>
            </div>
            <div className="h-12 font-Poppins font-semibold text-4xl mb-6">
                {mainHeading}
            </div>
        </>
        
    )
}

export default HeadingWithBadge;