const API_URL = "https://desafio-mod-9-lnzk.vercel.app/api";

interface userInfoTypes {
    name: string;
    email: string;
}

interface userAddressTypes {
    street: string;
    city: string;
    state: string;
    code: string;
}

interface contactTypes {
    email: string;
    name: string;
    message: string;
}
async function fetchAPI(path: string, props: RequestInit, auth?: boolean) {
    try {
        var token = "";
        if (typeof window != "undefined")
            token = JSON.parse(localStorage.getItem("token") || "0").token;

        const res = await fetch(API_URL + path, {
            ...props,
            headers: auth
                ? {
                      authorization: `bearer ${token}`,
                      "Content-Type": "application/json",
                  }
                : undefined,
        });

        if (res.status < 300 && res.status >= 200) return await res.json();
        throw { error: "estado fuera de 2xx", res, status: res.status };
    } catch (error) {
        throw error;
    }
}

async function sendAuthCode(email: string) {
    try {
        const body = JSON.stringify({ email });
        await fetchAPI("/auth", {
            method: "POST",
            body,
        });

        return true;
    } catch (error) {
        return false;
    }
}

async function getToken(email: string, code: number) {
    try {
        const body = JSON.stringify({ email, code });
        const response = await fetchAPI("/auth/token", {
            method: "POST",
            body,
        });
        const tokenToSave = JSON.stringify({ email, token: response.token });
        localStorage.setItem("token", tokenToSave);

        return true;
    } catch (error) {
        return false;
    }
}

async function updateUserInfo({ name, email }: userInfoTypes) {
    try {
        var body;
        const lastEmail = JSON.parse(localStorage.getItem("token") as string).email;
        if (lastEmail === email) body = { fullName: name };
        else body = { fullName: name, email };
        if (!Object.values(body).length || !Object.values(body)[0]) return true;
        return await fetchAPI(
            "/me",
            {
                method: "PATCH",
                body: JSON.stringify(body),
            },
            true
        );
    } catch (error) {
        return false;
    }
}

async function updateUserAddress({ street, city, state, code }: userAddressTypes) {
    try {
        var body = {} as any;
        const address = { direction: street, city, province: state, postalCode: code };
        Object.entries(address).forEach((i) => {
            if (i[1] !== "") body[i[0]] = i[1];
        });
        if (!Object.values(body).length) return true;

        await fetchAPI(
            "/me/address",
            {
                method: "PATCH",
                body: JSON.stringify(body),
            },
            true
        );

        return true;
    } catch (error) {
        return false;
    }
}

async function getUserInfo() {
    try {
        const response = await fetchAPI(
            "/me",
            {
                method: "GET",
            },
            true
        );

        return response;
    } catch (error) {
        return false;
    }
}

async function sendMessage({ email, name, message }: contactTypes) {
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ email, name, message }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    } catch (error) {
        return false;
    }
}

async function createOrder(cart: any) {
    const productsInfo = cart.map((i: any) => {
        return {
            id: i.product.objectID,
            quantity: i.quantity,
        };
    });

    try {
        const response = await fetchAPI(
            "/order",
            {
                method: "POST",
                body: JSON.stringify({
                    productsInfo,
                }),
            },
            true
        );

        return response;
    } catch (error) {
        return false;
    }
}

export {
    fetchAPI,
    sendAuthCode,
    createOrder,
    getToken,
    getUserInfo,
    updateUserAddress,
    updateUserInfo,
    sendMessage,
};
