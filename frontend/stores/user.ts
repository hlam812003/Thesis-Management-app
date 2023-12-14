import { defineStore } from 'pinia';

interface UserInfo {
    name?: string;
    // email?: string;
}

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            userInfo: null as UserInfo | null,
            userList: [] as UserInfo,
            isLoggedIn: false
        }
    },
    actions: {
        setUser(userInfo: UserInfo) {
            this.userInfo = userInfo;
            this.isLoggedIn = true;
        },
        clearUser() {
            this.userInfo = null;
            this.isLoggedIn = false;
        }
    }
});