import { ApiResponse } from "@/types";
import { handleApiError } from "@/lib/utils/helperFunctions";
import api from "@/lib/apis";

export const getProducts = async ( page: number = 1,limit?: number, category?:string, name?:string):Promise<any> =>{
    try{
        const response = await api.get<ApiResponse>(`/products${page ? '?page='+page : ''}${limit ? '&limit='+limit : ''}${category ? '&category='+category : ''}${name ? '&name='+name : ''}`);
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