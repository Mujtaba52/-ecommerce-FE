import { Skeleton } from "@/components/common/Skeleton";

const ProductCardSkeleton = () => {
    return (
        <div className="flex flex-col">
            <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded">
            </div>
            <div className="h-[72px] w-[270px] mt-2">
                <Skeleton className=" h-4 bg-gray-300 mb-2" />
                <div className="flex space-x-2">
                    <Skeleton className="h-4 w-1/3 bg-red-300" />
                    <Skeleton className="h-4 w-2/3 bg-gray-300 line-through" />
                </div>
            </div>
        </div>
    );
}

export default ProductCardSkeleton;
