import axios from 'axios';

export interface UserInfo {
    id: string;
    username: string;
    email: string;
    phone_no: string;
}

export interface UpdateUserDetails {
    password?: string;
    phone_no?: string;
}

export class HomeModel {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'http://localhost:8000/api/v1/auth';
    }

    async fetchUserDetails(userId: string): Promise<UserInfo> {
        const response = await axios.get<UserInfo>(
            `${this.baseUrl}/user/${userId}/`
        );
        return response.data;
    }

    async updateUserDetails(
        userId: string,
        details: UpdateUserDetails
    ): Promise<UserInfo> {
        const response = await axios.put<UserInfo>(
            `${this.baseUrl}/user/${userId}/update/`,
            details
        );
        return response.data;
    }
}
