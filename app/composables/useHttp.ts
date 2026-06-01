
export function useGetFetchOptions(options: IHttpOption) {
    const config = useRuntimeConfig();

    options.baseURL = options?.baseURL || (config.public.baseURL as any);
    options.headers = options?.headers || {};
    options.initialCache = options.initialCache ?? false;
    options.lazy = options.lazy ?? false;
    const token = useCookie("myschool_token").value;

    if (token) {
        options.headers.Authorization = "Bearer " + token;
    }

    options.headers["X-Platform"] = "web";
    return options;
}


export async function useHttp(key: any, url: string, options: IHttpOption) {
    options = useGetFetchOptions(options);
    options.key = key;

    console.log(options);

    // const toast = useToast();
    const config = useRuntimeConfig();
    const token = useCookie("myschool_token");

    async function refreshToken() {
        try {
            const res: any = await $fetch("/refresh", {
                baseURL: config.public.baseURL as string,
                method: "POST",
                credentials: "include",
            });

            token.value = res.access_token;
            return res.access_token;
        } catch (e) {
            token.value = null;
            // logout();
            return null;
        }
    }

    if (options.$) {
        try {
            const res: any = await $fetch(url, options as any);
            return { data: res.data };
        } catch (error: any) {
            const status = error?.status;

            if (status === 401) {
                const newToken = await refreshToken();

                if (newToken) {
                    options.headers = {
                        ...options.headers,
                        Authorization: `Bearer ${newToken}`,
                    };

                    const retryRes: any = await $fetch(url, options as any);
                    return { data: retryRes.data };
                }

                // toast.error("Session expired. Please login again.", {
                //     timeout: 2000,
                // });

                return {
                    error: true,
                    status: 401,
                };
            }

            const msg = error?.data?.message;

            return {
                msg: status == 500 ? "Internal Server Error" : msg,
                error: true,
                status,
            };
        }
    }

    // keep your existing useFetch logic
    let { data, refresh } = await useFetch(url, {
        ...(options as any),
        transform: (res: any) => res,
    });

    return {
        data: toRaw(data.value),
        refresh,
    };
}




// GET
export function useHttpGet(key: any, url: any, options: IHttpOption = {}) {
    options.method = "GET";
    options.$ = options.$ ?? true;
    return useHttp(key, url, options);
}

// POST
export function useHttpPost(key: any, url: any, options: IHttpOption = {}) {
    options.method = "POST";
    options.$ = true;
    return useHttp(key, url, options);
}

// PATCH
export function useHttpPatch(key: any, url: any, options: IHttpOption = {}) {
    options.method = "PATCH";
    return useHttp(key, url, options);
}

// DELETE
export function useHttpDelete(key: any, url: any, options: IHttpOption = {}) {
    options.method = "DELETE";
    return useHttp(key, url, options);
}

export function useHttpGetAsync<T>(
    key: any,
    url: string,
    page?: Ref<number>,
    query?: Ref<Record<string, any>>,
    optionsData?: IHttpOption & { server?: boolean },
) {
    const options: any = useGetFetchOptions(optionsData ?? {});
    options.method = "GET";

    return useAsyncData<T>(
        key,
        async () => {
            try {
                const params = new URLSearchParams();

                if (page?.value) {
                    params.append("page", page.value.toString());
                }

                if (query?.value) {
                    Object.entries(query.value).forEach(([k, value]) => {
                        if (value !== null && value !== undefined && value !== "") {
                            params.append(k, value.toString());
                        }
                    });
                }



                const res: any = await $fetch(`${url}?${params.toString()}`, {
                    ...options,
                });

                return res.data;
            } catch (err: any) {
                throw createError({
                    statusCode: err?.response?.status || err?.statusCode || 500,
                    statusMessage:
                        err?.response?._data?.message ||
                        err?.message ||
                        "Something went wrong",
                    data: err?.response?._data || null,
                });
            }
        },
        {
            watch: [page!, query!],
            lazy: optionsData?.lazy,
            server: optionsData?.server,
        },
    );
}
