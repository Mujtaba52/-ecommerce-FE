import { ApiResponse } from "@/types";
import { handleApiError } from "@/lib/utils/helperFunctions";
import api from "@/lib/apis";

export const getProducts = async ():Promise<ApiResponse> =>{
    try{
        const response = await api.get<ApiResponse>('/products');
        return response.data;
    }catch(error){
        return handleApiError(error);
    }
};

export const getProductById = async (productId:string):Promise<ApiResponse> => {
    try{
        const response = await api.get<ApiResponse>(`/products/${productId}`);
        return response.data;
    }catch(error){
        return handleApiError(error);
    }
};