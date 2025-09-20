import type { UserType } from "../types/Types";
import axios from "../config/AxiosConfig";


class LoginPageService {
    async getAll(): Promise<UserType[]> {
        const res = await axios.get<UserType[]>("/users");
        return res.data;
    }
}

export default new LoginPageService();

