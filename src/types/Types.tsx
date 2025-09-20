export interface LoginFormValues {
    username: string,
    password: string
}

export interface ProductType {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string,
    rating: RatingType,
   
}
export interface RatingType{
    rate: number,
    count:number
}
export interface UserType{
    username: string,
    password: string,
    id:string
}
export interface BasketProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: RatingType;
    count:number
}

