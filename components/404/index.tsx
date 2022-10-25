import Image from "next/image";
import { useRouter } from "next/router";
import { PrimaryButton } from "ui/buttons";
import { LargeBoldText } from "ui/typography";
import { Container, ContainerImg } from "./styled";

function NotFound() {
    const router = useRouter();

    return (
        <Container>
            <ContainerImg>
                <Image
                    src="https://res.cloudinary.com/dmycj7gmx/image/upload/v1666565194/dwf-m10/404_escxb6.gif"
                    alt=""
                    layout="fill"
                />
            </ContainerImg>
            <div>
                <LargeBoldText>
                    La página que estás intentando buscar no se encuentra disponible.
                </LargeBoldText>
            </div>
            <PrimaryButton onClick={() => router.push("/")}>¿Volvemos al inicio?</PrimaryButton>
        </Container>
    );
}
export { NotFound };
