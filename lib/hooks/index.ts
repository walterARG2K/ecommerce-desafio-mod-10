import { fetchAPI } from "lib/api";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

function useProducts() {
    const { data, error } = useSWRImmutable("/search", fetchAPI);
    if (data) return data;
    else return error;
}

function useGetToken() {
    const [token, setToken] = useState({ email: null, token: null });
    useEffect(() => {
        const tokenStorage = localStorage.getItem("token") as string;
        setToken(JSON.parse(tokenStorage));
    }, []);

    if (typeof window !== "undefined") {
        const listener = () => {
            const tokenStorage = localStorage.getItem("token") as string;
            setToken(JSON.parse(tokenStorage));
            window.removeEventListener("token", listener, false);
        };
        window.addEventListener("token", listener);
    }

    return token;
}

function removeToken() {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("token"));
    return true;
}

function useGetProductBySearch(query: string, offset?: number, limit?: number) {
    const path = `/search?q=${query}&offset=${offset || 0}&limit=${limit || 12}`;
    const { data, error } = useSWR(path, fetchAPI);

    if (error?.status) return false;
    return data;
}

function useGetProductByID(productID: string) {
    const { data } = useSWR("/products/" + productID, fetchAPI);

    if (data) return data[0].results;
    else return false;
}

function useGetOrders() {
    const fetcher = (path: string) => fetchAPI(path, {}, true);
    const { data, error } = useSWR("/me/orders", fetcher);
    if (error?.status) return false;
    return data;
}
export {
    useGetOrders,
    useGetToken,
    useGetProductByID,
    useGetProductBySearch,
    removeToken,
    useProducts,
};
