import { useAuthStore } from "~/store";

export default defineNuxtRouteMiddleware((to, from) => {
    const { loggedIn } = useAuthStore();

    if (!loggedIn) {
        return navigateTo({
            path: "/auth/login",
            query: {
                callback: to.fullPath,
            },
        });
    }
});
