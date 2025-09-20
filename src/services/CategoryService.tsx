import axios from "axios";
import type { ProductType } from "../types/Types";


class CategoryService {
    BASE_URL = "https://fakestoreapi.com";

    async getAllCategories(): Promise<string[]> {
        try {
            const response = await axios.get<string[]>(
                `${this.BASE_URL}/products/categories`
            );
            return response.data;
        } catch (error) {
            console.error("Kategori alınamadı:", error);
            return [];
        }
    }
      async getByCategoryName(categoryName:string): Promise<ProductType[]> {
        try {
            const response = await axios.get<ProductType[]>(
                `${this.BASE_URL}/products/category/${categoryName}`
            );
            return response.data;
        } catch (error) {
            console.error("Kategori alınamadı:", error);
            return [];
        }
    }

}

    
    export default new CategoryService();