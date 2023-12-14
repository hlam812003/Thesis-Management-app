import { defineStore } from 'pinia';

interface UserInfo {
    name?: string;
    // email?: string;
}

export const useUserStore = defineStore('user', {
    state: () => ({
      userInfo: null as UserInfo | null,
      isLoggedIn: false
    }),
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