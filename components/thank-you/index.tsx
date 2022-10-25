import { useRouter } from "next/router";
import { PrimaryButton } from "ui/buttons";
import { Container, ContainerMain, SubContainer, Text } from "./styled";

function ThankYou() {
    const router = useRouter();

    return (
        <ContainerMain>
            <Container>
                <SubContainer>
                    <div>
                        <Text>¡ Gracias</Text>
                        <Text> por su compra !</Text>
                    </div>
                    <div>
                        <p>Tu compra ha sido registrada. </p>
                        <p>En breves recibirás un email de confirmación. </p>
                    </div>
                </SubContainer>
                <PrimaryButton onClick={() => router.push("/")}>Ir al inicio</PrimaryButton>
            </Container>
        </ContainerMain>
    );
}

export { ThankYou };
