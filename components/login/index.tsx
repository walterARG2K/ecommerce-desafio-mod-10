import { getToken, sendAuthCode } from "lib/api";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorMessage } from "ui/alert-messages";
import { PrimaryButton } from "ui/buttons";
import { SecondaryTextField } from "ui/text-fields";
import { LargeBoldText, TinyText } from "ui/typography";
import { Auth } from "./auth-code";
import {
    Card,
    ContainerButton,
    ContainerCard,
    ContainerImg,
    ContainerInput,
    ContainerMain,
    ContainerTitle,
    Img,
} from "./styled";

function LoginUser() {
    const [errorCode, setErrorCode] = useState(false);
    const [anim, setAnim] = useState(false);
    const [click, setClick] = useState(false);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const router = useRouter();

    async function onSubmit(e: any) {
        e.preventDefault();
        if (!click) {
            const emailInput = (e.target as any).email.value;
            setEmail(emailInput);
            sendAuthCode(emailInput);
            setClick(true);
        } else {
            if (code.length === 6) {
                setAnim(true);
                const response = await getToken(email, parseInt(code));
                setAnim(false);
                window.scrollTo(0, 0);
                response ? router.push("/my-profile") : setErrorCode(true);
            }
        }
    }

    return (
        <ContainerMain>
            {errorCode ? (
                <ErrorMessage>El código que ingresaste es incorrecto.</ErrorMessage>
            ) : null}
            <ContainerCard>
                <ContainerImg>
                    <Img>
                        <Image
                            style={{ borderRadius: 10 }}
                            src="https://i.postimg.cc/YqKS9bxB/login.png"
                            alt=""
                            layout="fill"
                        />
                    </Img>
                    <TinyText>Ingresá O creá una cuenta</TinyText>
                </ContainerImg>
                <Card>
                    <ContainerTitle>
                        <LargeBoldText>Ingresar</LargeBoldText>
                        <hr />
                    </ContainerTitle>
                    <form onSubmit={onSubmit}>
                        <ContainerInput>
                            {click ? (
                                <Auth setCode={setCode} email={email} />
                            ) : (
                                <SecondaryTextField name="email" required={true} type="email">
                                    Correo eléctronico
                                </SecondaryTextField>
                            )}
                        </ContainerInput>
                        <ContainerButton>
                            <PrimaryButton anim={anim}>
                                {click ? "Ingresar" : "Siguiente"}
                            </PrimaryButton>
                        </ContainerButton>
                    </form>
                </Card>
            </ContainerCard>
        </ContainerMain>
    );
}

export { LoginUser };
