import React, { useEffect, useState } from "react";
import { Profile } from "./profile";
import { OrdersContainer } from "./orders";
import { useGetOrders, useGetToken } from "lib/hooks";
import { ErrorMessage, SuccessMessage } from "ui/alert-messages";
import { LargeBoldText, LargeBoldWhiteText } from "ui/typography";
import { getUserInfo, updateUserAddress, updateUserInfo } from "lib/api";
import { OrdersBlackIcon, OrdersIcon, PerfilBlackIcon, PerfilIcon } from "ui/icons/user";
import {
    ContainerMain,
    ContainerTitle,
    ContainerTitleOrders,
    ContainerTitleProfile,
    Divider,
    SubcontainerTitle,
} from "./styled";

interface Props {
    email: string;
}

interface FormType extends HTMLFormElement {
    full_name: HTMLInputElement;
    email: HTMLInputElement;
    street: HTMLInputElement;
    city: HTMLInputElement;
    state: HTMLInputElement;
    code: HTMLInputElement;
}

function MyProfile({ email }: Props) {
    const token = useGetToken();
    const ordersData = useGetOrders();
    const [info, setInfo] = useState({} as any);
    const [orders, setOrders] = useState(false);
    const [anim, setAnim] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (token?.token) {
            getUserInfo().then((r) => {
                setInfo(r);
            });
        }
    }, [token]);

    async function onSubmitForm(e: React.FormEvent) {
        e.preventDefault();
        const form: FormType = e.target as FormType;
        const name = form.full_name.value;
        const email = form.email.value;
        const street = form.street.value;
        const city = form.city.value;
        const state = form.state.value;
        const code = form.code.value;
        setAnim(true);
        const resUserInfo = await updateUserInfo({ name, email });
        updateUserAddress({ street, city, state, code });

        if (!resUserInfo) {
            setError(true);
            setSuccess(false);
        } else {
            setSuccess(true);
            setError(false);
        }
        window.scrollTo(0, 0);
        setAnim(false);
    }

    return (
        <ContainerMain onSubmit={onSubmitForm}>
            <ContainerTitle>
                <SubcontainerTitle>
                    <ContainerTitleProfile theme={orders} onClick={() => setOrders(false)}>
                        {orders ? <PerfilBlackIcon /> : <PerfilIcon />}
                        {orders ? (
                            <LargeBoldText>Mis Datos</LargeBoldText>
                        ) : (
                            <LargeBoldWhiteText>Mis Datos</LargeBoldWhiteText>
                        )}
                    </ContainerTitleProfile>

                    <Divider />
                    <ContainerTitleOrders
                        onClick={() => {
                            setError(false);
                            setSuccess(false);
                            setOrders(true);
                        }}
                        theme={orders}
                    >
                        {orders ? <OrdersIcon /> : <OrdersBlackIcon />}
                        {orders ? (
                            <LargeBoldWhiteText>Ordenes</LargeBoldWhiteText>
                        ) : (
                            <LargeBoldText>Ordenes</LargeBoldText>
                        )}
                    </ContainerTitleOrders>
                </SubcontainerTitle>
                <hr />
            </ContainerTitle>
            {error ? (
                <ErrorMessage>
                    El email ingresado ya está siendo usada por otra persona.
                </ErrorMessage>
            ) : null}
            {success ? (
                <SuccessMessage>Los datos han sido actualizado correctamente.</SuccessMessage>
            ) : null}
            {orders ? (
                <OrdersContainer ordersData={ordersData} />
            ) : (
                <Profile anim={anim} info={info} email={email} />
            )}
        </ContainerMain>
    );
}

export { MyProfile };
