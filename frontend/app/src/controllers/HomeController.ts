import { HomeModel, UserInfo, UpdateUserDetails } from '../models/HomeModel';
import { toast } from 'react-hot-toast';

export class HomeController {
    private homeModel: HomeModel;

    constructor() {
        this.homeModel = new HomeModel();
    }

    async fetchUserDetails(userId: string): Promise<UserInfo | null> {
        try {
            const userInfo = await this.homeModel.fetchUserDetails(userId);
            return userInfo;
        } catch (error) {
            console.error('Error fetching user details:', error);
            this.renderToast('error', 'Failed to fetch user details.');
            return null;
        }
    }

    async updateUserDetails(
        userId: string,
        details: UpdateUserDetails
    ): Promise<UserInfo | null> {
        try {
            const updatedUserInfo = await this.homeModel.updateUserDetails(
                userId,
                details
            );
            this.renderToast('success', 'User details updated successfully.');
            return updatedUserInfo;
        } catch (error) {
            console.error('Error updating user details:', error);
            this.renderToast('error', 'Failed to update user details.');
            return null;
        }
    }

    private renderToast(type: 'success' | 'error', message: string) {
        if (type === 'success') {
            toast.success(`${type.toUpperCase()}: ${message}`);
        } else if (type === 'error') {
            toast.error(`${type.toUpperCase()}: ${message}`);
        }
    }
}
