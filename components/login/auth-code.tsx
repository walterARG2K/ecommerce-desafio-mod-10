import { Dispatch, SetStateAction } from "react";
import AuthCode from "react-auth-code-input";
import { BodyText, TinyBoldText } from "ui/typography";
import { AuthCodeEl, AuthMessage, ContainerAuthCode, EmailAuth } from "./styled";
import styles from "./auth.module.css";
interface Props {
    setCode: Dispatch<SetStateAction<string>>;
    email: string;
}

function Auth({ setCode, email }: Props) {
    return (
        <ContainerAuthCode>
            <AuthMessage>
                <BodyText>
                    Se ha envíado un código a<EmailAuth> {email}</EmailAuth>
                </BodyText>
            </AuthMessage>

            <AuthCodeEl>
                <TinyBoldText>Por favor, ingrese el código</TinyBoldText>
                <AuthCode
                    containerClassName={styles["container-auth-code"]}
                    inputClassName={styles["auth-code"]}
                    allowedCharacters="numeric"
                    onChange={(code) => {
                        setCode(code);
                    }}
                />
            </AuthCodeEl>
        </ContainerAuthCode>
    );
}

export { Auth };
