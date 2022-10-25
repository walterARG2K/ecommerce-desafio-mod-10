import {
    CashIcon,
    FastDeliveryIcon,
    FreeDeliveryIcon,
    MasterCardCardIcon,
    MercadopagoIcon,
    SaveMoneyIcon,
    SupportIcon,
    VisaCardIcon,
} from "ui/icons/banner";
import { TinyText } from "ui/typography";
import { Container, Item, ContainerIcon, Line, ContainerMain } from "./styled";

function Banner() {
    return (
        <ContainerMain>
            <Container>
                <Item>
                    <ContainerIcon>
                        <FastDeliveryIcon />
                        <FreeDeliveryIcon />
                    </ContainerIcon>
                    <Line />
                    <TinyText>Envíos rapídos y gratís a todo el país.</TinyText>
                </Item>
                <Item>
                    <ContainerIcon>
                        <VisaCardIcon />
                        <MasterCardCardIcon />
                        <CashIcon />
                        <MercadopagoIcon />
                    </ContainerIcon>
                    <Line />
                    <TinyText>
                        Pagálo como quieras! <a href="#">Ver todas las formas.</a>
                    </TinyText>
                </Item>
                <Item>
                    <ContainerIcon>
                        <SaveMoneyIcon />
                    </ContainerIcon>
                    <Line />
                    <TinyText>Lo mejor en cuanto a calidad/precio.</TinyText>
                </Item>
                <Item>
                    <ContainerIcon>
                        <SupportIcon />
                    </ContainerIcon>
                    <Line />
                    <TinyText>Te ayudamos con dudas y sugerencias.</TinyText>
                </Item>
            </Container>
        </ContainerMain>
    );
}

export { Banner };
