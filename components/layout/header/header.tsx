import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { LogoIcon } from "../../../ui/icons/logo";
import { CartWhite } from "ui/icons/cart";
import { SearchInput } from "../../../ui/text-fields";
import { BurgerMenu } from "components/layout/header/menu-burger";
import { ActionButton } from "ui/buttons";
import { BodyBoldText, TinyText } from "ui/typography";
import { NavigationBar } from "components/layout/header/navigation-bar";
import { useGetLengthCart } from "lib/hooks/cart";
import { removeToken, useGetToken } from "lib/hooks";
import {
    HeaderEl,
    ContainerCart,
    Container,
    ContainerLogin,
    ContainerLogo,
    ContainerMain,
    CounterCart,
    Logout,
} from "./styled";

function Header() {
    const didMount = useRef(0);
    const token = useGetToken();
    const cartLength = useGetLengthCart();
    const containerCart = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (cartLength && didMount.current > 1) {
            (containerCart.current as any).classList.add("animation");
            setTimeout(() => {
                (containerCart?.current as any)?.classList.remove("animation");
            }, 500);
        }
        didMount.current += 1;
    }, [cartLength]);

    return (
        <ContainerMain>
            <HeaderEl>
                <Container>
                    <BurgerMenu />
                    <ContainerLogo
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <LogoIcon />
                    </ContainerLogo>
                    <SearchInput />
                    {token?.email ? (
                        <ContainerLogin>
                            <TinyText>{token.email}</TinyText>
                            <Logout onClick={() => removeToken()}>
                                <BodyBoldText>Cerrar Sesión</BodyBoldText>
                            </Logout>
                        </ContainerLogin>
                    ) : (
                        <div onClick={() => router.push("/login")}>
                            <ActionButton>Iniciar Sesión</ActionButton>
                        </div>
                    )}
                    <ContainerCart onClick={() => router.push("/cart")} ref={containerCart}>
                        <CartWhite />
                        <CounterCart>
                            <BodyBoldText>
                                {typeof cartLength == "undefined" ? "" : cartLength}
                            </BodyBoldText>
                        </CounterCart>
                    </ContainerCart>
                </Container>
                <NavigationBar />
            </HeaderEl>
        </ContainerMain>
    );
}

export { Header };
