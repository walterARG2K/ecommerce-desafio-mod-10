import { createOrder } from "lib/api";
import { useGetToken } from "lib/hooks";
import { RemoveCart } from "lib/hooks/cart";
import React, { Dispatch, ProfilerProps, SetStateAction, useState } from "react";
import { PrimaryButton } from "ui/buttons";
import { LargeBoldWhiteText, BodyBoldWhiteText } from "ui/typography";
import {
    ContainerOrderSummary,
    ContainerTitle,
    Hr,
    ContainerSummary,
    ContainerMpLogo,
    LogoImg,
    ContainerEndSection,
    ContainerButton,
    ContainerHr,
} from "./styled-order-summary";

interface Props {
    setError: Dispatch<SetStateAction<string>>;
    cart: [];
    total: number;
    cost: string;
}

function OrderSummary({ setError, cart, total, cost }: Props) {
    const token = useGetToken()?.token;
    const [anim, setAnim] = useState(false);

    async function onClickBuy() {
        if (cart.length && token) {
            setAnim(true);
            const { url } = await createOrder(cart);
            setAnim(false);
            RemoveCart();
            window.open(url, "_blank");
        } else if (!token) {
            window.scrollTo(0, 0);
            setError("Para hacer una compra primero debe iniciar sesión");
        } else {
            window.scrollTo(0, 0);
            setError("El carrito está vacío, agrega productos y vuelve a intentar");
        }
    }

    return (
        <ContainerOrderSummary>
            <div>
                <ContainerTitle>
                    <LargeBoldWhiteText>Resúmen del pedido</LargeBoldWhiteText>
                    <Hr />
                </ContainerTitle>
                <ContainerSummary>
                    <div>
                        <BodyBoldWhiteText>Formas de pago</BodyBoldWhiteText>
                        <ContainerMpLogo>
                            <LogoImg
                                src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp"
                                alt=""
                            />
                        </ContainerMpLogo>
                        <ContainerHr>
                            <Hr />
                        </ContainerHr>
                    </div>
                    <div>
                        <BodyBoldWhiteText>Productos totales: {total}</BodyBoldWhiteText>
                        <ContainerHr>
                            <Hr />
                        </ContainerHr>
                    </div>
                </ContainerSummary>
            </div>
            <ContainerEndSection>
                <div>
                    <BodyBoldWhiteText>Total a pagar: {cost}$ARS</BodyBoldWhiteText>
                    <Hr />
                </div>
                <ContainerButton onClick={onClickBuy}>
                    <PrimaryButton anim={anim}>PROCEDER AL PAGO</PrimaryButton>
                </ContainerButton>
            </ContainerEndSection>
        </ContainerOrderSummary>
    );
}

export { OrderSummary };
