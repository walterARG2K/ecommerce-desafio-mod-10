import { useEffect, useState } from "react";

function addToCart(item: {}) {
    if (item && typeof window !== "undefined") {
        const lastItemsCart = localStorage.getItem("cart");
        const lastItemsToJson = JSON.parse(lastItemsCart as string) || "";
        const cartToSave = [...lastItemsToJson, item];
        localStorage.setItem("cart", JSON.stringify(cartToSave));
        window.dispatchEvent(new Event("storage"));
    }
}
function useGetLengthCart() {
    const [length, setLength] = useState(undefined as any);

    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");
        setLength(cartStorage.length);
    });

    if (typeof window !== "undefined") {
        const listener = () => {
            setLength(length + 1 || 0);
            window.removeEventListener("storage", listener, false);
        };
        window.addEventListener("storage", listener);
    }

    return length;
}

function useGetCart() {
    const [cart, setCart] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]") as [];

        const products = localCart.map((i: any) => {
            let repeat = 0;
            localCart.map((item: any) => (i.objectID === item.objectID ? repeat++ : null));
            return { product: i, quantity: repeat };
        });

        let arrSinDuplicaciones = products.reduce((acc: any, current: any) => {
            const x = acc.find((item: any) => item.product.objectID === current.product.objectID);
            if (!x) return acc.concat([current]);
            else return acc;
        }, []);

        setCart(arrSinDuplicaciones as []);
    }, [toggle]);

    if (typeof window !== "undefined") {
        const listener = () => {
            setToggle(!toggle);
            window.removeEventListener("storage", listener, false);
        };
        window.addEventListener("storage", listener);
    }

    return cart;
}

function RemoveItemCart(objectID: string) {
    if (typeof window !== "undefined") {
        const lastItemsCart = localStorage.getItem("cart");
        const lastCartToJson = JSON.parse(lastItemsCart as string);
        const lastItemsToJson = lastCartToJson.map((i: any) => (i.objectID !== objectID ? i : []));
        const cartToSave = lastItemsToJson.filter((i: any) => typeof i.objectID == "string");

        localStorage.setItem("cart", JSON.stringify(cartToSave));
        window.dispatchEvent(new Event("storage"));
    }
}

function RemoveCart() {
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("storage"));
}

export { useGetCart, useGetLengthCart, addToCart, RemoveCart, RemoveItemCart };
