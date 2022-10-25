import { PrimaryButton } from "ui/buttons";
import { SecondaryTextField } from "ui/text-fields";
import { LargeBoldText } from "ui/typography";
import {
    ContainerButton,
    ContainerFileds,
    ContainerFirstSection,
    ContainerHr,
    ContainerProfileMain,
    ContainerSecondSection,
} from "./styled";

interface Props {
    info: any;
    email: string;
    anim: boolean;
}

function Profile({ info, email, anim }: Props) {
    return (
        <ContainerProfileMain>
            <ContainerFirstSection>
                <LargeBoldText>Datos Principales</LargeBoldText>
                <ContainerHr>
                    <hr />
                </ContainerHr>
                <ContainerFileds>
                    <SecondaryTextField value={info?.fullName} name="full_name" type="text">
                        Nombre
                    </SecondaryTextField>
                    <SecondaryTextField value={email} name="email" type="text">
                        Correo eléctronico
                    </SecondaryTextField>
                </ContainerFileds>
            </ContainerFirstSection>
            <ContainerSecondSection>
                <LargeBoldText>Dirección</LargeBoldText>
                <ContainerHr>
                    <hr />
                </ContainerHr>
                <ContainerFileds>
                    <SecondaryTextField value={info?.address?.direction} name="street" type="text">
                        Calle
                    </SecondaryTextField>
                    <SecondaryTextField value={info?.address?.city} name="city" type="text">
                        Ciudad
                    </SecondaryTextField>
                    <SecondaryTextField value={info?.address?.province} name="state" type="text">
                        Estado / Provinica
                    </SecondaryTextField>
                    <SecondaryTextField value={info?.address?.postalCode} name="code" type="text">
                        Código Postal
                    </SecondaryTextField>
                </ContainerFileds>
            </ContainerSecondSection>
            <ContainerButton>
                <PrimaryButton anim={anim}>ACTUALIZAR DATOS</PrimaryButton>
            </ContainerButton>
        </ContainerProfileMain>
    );
}

export { Profile };
