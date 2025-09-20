import type { UserType } from "../types/Types";
import axios from "../config/AxiosConfig";
import type { AxiosResponse, AxiosError } from "axios";

class RegisterPageService {
    register(newUser: UserType): Promise<UserType> {
        return axios
            .post<UserType, AxiosResponse<UserType>>("/users", newUser)
            .then((response: AxiosResponse<UserType>) => response.data)
            .catch((error: AxiosError) => {
                
                return Promise.reject(error);
            });
    }
}

export default new RegisterPageService();
