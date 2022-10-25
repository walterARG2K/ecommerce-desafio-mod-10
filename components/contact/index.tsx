import { sendMessage } from "lib/api";
import { useState } from "react";
import { SuccessCode } from "ui/alert-messages/styled";
import { PrimaryButton } from "ui/buttons";
import { SecondaryTextField, TextArea } from "ui/text-fields";
import { LargeBoldText, BodyBoldText } from "ui/typography";
import {
    ContainerMain,
    ContainerCard,
    ContainerImg,
    Img,
    Card,
    ContainerTitle,
    ContainerInput,
    ContainerButton,
} from "./styled";

function ContactUs() {
    const [success, setSuccess] = useState(false);
    const [anim, setAnim] = useState(false);

    async function onFormSubmit(e: any) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        setAnim(true);
        await sendMessage({ email, name, message });
        setAnim(false);
        window.scrollTo(0, 0);
        setSuccess(true);
    }

    return (
        <ContainerMain>
            {success ? (
                <SuccessCode>
                    El mensaje se ha enviado correctamente, le responderemos lo antes posible.
                </SuccessCode>
            ) : null}
            <ContainerCard>
                <ContainerImg>
                    <BodyBoldText>
                        Contáctanos, estamos disponible para ayudarte con dudas generales.
                    </BodyBoldText>
                    <Img src="https://i.postimg.cc/dtXfcCg4/contact-6.png" alt="" />
                </ContainerImg>
                <Card>
                    <ContainerTitle>
                        <LargeBoldText>Formulario</LargeBoldText>
                        <hr />
                    </ContainerTitle>
                    <form onSubmit={onFormSubmit}>
                        <ContainerInput>
                            <SecondaryTextField name="name" required={true} type="text">
                                Nombre
                            </SecondaryTextField>
                            <SecondaryTextField name="email" required={true} type="email">
                                Correo eléctronico
                            </SecondaryTextField>
                            <TextArea name="message" required={true} type="email">
                                Mensaje
                            </TextArea>
                        </ContainerInput>
                        <ContainerButton>
                            <PrimaryButton anim={anim}>Envíar</PrimaryButton>
                        </ContainerButton>
                    </form>
                </Card>
            </ContainerCard>
        </ContainerMain>
    );
}

export { ContactUs };
