import { defineStore } from "pinia";

interface IUserState {
    user: IUser | undefined;
    token: string | undefined;
    completed_setups: string[];
}

export const useAuthStore = defineStore("auth", {
    state: (): IUserState => {
        return {
            user: useCookie("myschool_user", {
                maxAge: MAX_AGE,
            }) as any,
            token: useCookie("myschool_token", {
                maxAge: MAX_AGE,
            }) as any,
            completed_setups: [],
        };
    },
    actions: {
        async setAuth(payload: IUser, token: string) {
            try {
                const curr_user = {
                    id: payload.id,
                    name: payload.name,
                    email: payload.email,
                    phone: payload.phone,
                    phone_ext: payload.phone_ext,
                    profile_image: payload.profile_image,
                    email_verified_at: payload.email_verified_at,
                };

                this.user = curr_user;
                this.token = token;
                setCookie(curr_user, token);
                return Promise.resolve(curr_user);
            } catch (error) {
                return Promise.reject(error);
            }
        },

        async logout() {
            this.$state.user = undefined;
            this.$state.token = undefined;
            const userCookie = useCookie("myschool_user");
            const tokenCookie = useCookie("myschool_token");
            await this.$reset();
            userCookie.value = null;
            tokenCookie.value = null;
        },

    },

    getters: {
        isAdmin: (state) => {
            return state.user ? state.user.is_admin : false;
        },
        loggedIn: (state) => {
            return !!state.user;
        },
        current_user: (state) => {
            return state.user;
        },
    },
});


const setCookie = (user: any, token: string) => {
    const userCookie = useCookie("myschool_user", {
        maxAge: MAX_AGE,
    });
    const tokenCookie = useCookie("myschool_token", {
        maxAge: MAX_AGE,
    });
    userCookie.value = user;
    tokenCookie.value = token;
};
