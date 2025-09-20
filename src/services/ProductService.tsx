import axios from "axios";
import type { ProductType } from "../types/Types";



class ProductService {
    BASE_URL = "https://fakestoreapi.com";
    async getAll(): Promise<ProductType[]> {
        const response = await axios.get<ProductType[]>(`${this.BASE_URL}/products`);
        
        return response.data;
        
    }
}
export default new ProductService();