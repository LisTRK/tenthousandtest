import axios from "axios";
import { ProductType } from "../types/types";


axios.defaults.baseURL = "https://dummyjson.com";

interface searchProductsType {
    limit:number;
    products: ProductType[];
    skip: number;
    total: number;
}


export async function searchProducts(query: string, page: number, limit: number):Promise<searchProductsType>{
    
    const options ={
        params:{
            ...(query !== "" && {q: query}),
            limit: limit,
            skip: Math.ceil((page-1) * limit),
        }
    };
    const response = await axios.get<searchProductsType>("products/search", options);
        
    return response.data;
}