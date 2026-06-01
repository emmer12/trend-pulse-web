import { defineStore } from "pinia";

interface INotificationCount {
    friend_notification_count: number;
    comment_notification_count: number;
    inbox_notification_count: number;
}

interface ILoading {
    loadingElements: Record<string, boolean>;
    isUILoading: boolean;
    isReporting: boolean;
    toggleElements: Record<string, boolean>;
    isToggle: boolean;
    modalData?: any;
    notificationCount: INotificationCount;
}

export const useGlobalStateStore = defineStore("global_state", {
    state: (): ILoading => {
        return {
            loadingElements: {},
            isUILoading: false,
            isReporting: false,
            toggleElements: {},
            isToggle: false,
            modalData: undefined,
            notificationCount: {
                friend_notification_count: 0,
                inbox_notification_count: 0,
                comment_notification_count: 0,
            },
        };
    },
    actions: {
        setUILoading(isLoading: boolean) {
            this.isUILoading = isLoading;
        },
        setElementLoading(element: string, isLoading: boolean) {
            if (!element || !element.length) {
                return;
            }
            this.loadingElements[element] = isLoading;
            this.isUILoading = isLoading;
        },
        setReporting(val: boolean) {
            this.isReporting = val;
        },
        setToggle(toogleElement: boolean) {
            this.isToggle = toogleElement;
        },
        setToggleElement(element: string, isToggle: boolean) {
            if (!element || !element.length) {
                return;
            }
            this.toggleElements[element] = isToggle;
            this.setToggle(isToggle);
        },
        toggleElement(element: string) {
            if (!element || !element.length) {
                return;
            }
            this.toggleElements[element] = !this.toggleElements[element];
            this.setToggle(this.toggleElements[element]);
        },

        closeElement(element: string) {
            if (!element || !element.length) {
                return;
            }
            this.toggleElements[element] = false;
            this.setToggle(false);
        },
        setNotificationCount(notificationCount: INotificationCount) {
            this.notificationCount = notificationCount;
        },
    },
    getters: {
        notification_count: (state) => {
            return (
                state.notificationCount.friend_notification_count +
                state.notificationCount.comment_notification_count
            );
        },
    },
});
