
interface HeadingWithBadgeProps {
    heading: string;
  }

const HeadingWithBadge = ({heading}:HeadingWithBadgeProps)=>{
    return (
        <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded ">
            </div>
            <div className="text-[#DB4444] font-Poppins font-semibold text-base">
                {heading}
            </div>
        </div>
        
    )
}

export default HeadingWithBadge;