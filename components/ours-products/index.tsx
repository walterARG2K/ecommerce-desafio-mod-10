import Image from "next/image";
import { useRouter } from "next/router";
import { BodyBoldText } from "ui/typography";
import {
    Container,
    ContainerSecondSection,
    ContainerTitle,
    FirstSection,
    SecondSection,
    TextAboutSections,
} from "./styled";

function OursProducts() {
    const router = useRouter();

    function onClick(query: string) {
        router.push({
            pathname: "/products",
            query: { q: query },
        });
    }

    return (
        <Container>
            <ContainerTitle>
                <TextAboutSections>
                    <BodyBoldText>Nuestros Productos</BodyBoldText>
                </TextAboutSections>
            </ContainerTitle>
            <FirstSection onClick={() => onClick("gpu")}>
                <Image
                    style={{ borderRadius: 5 }}
                    src="https://res.cloudinary.com/dmycj7gmx/image/upload/v1666505010/dwf-m10/graphic_nhfyz8.png"
                    alt=""
                    layout="fill"
                />
            </FirstSection>
            <ContainerSecondSection>
                <SecondSection onClick={() => onClick("cpu")}>
                    <Image
                        src="https://res.cloudinary.com/dmycj7gmx/image/upload/v1666505040/dwf-m10/cpu-1_ztgbpm.png"
                        alt=""
                        layout="fill"
                    />
                </SecondSection>
                <SecondSection onClick={() => onClick("pc gamer")}>
                    <Image
                        src="https://res.cloudinary.com/dmycj7gmx/image/upload/v1666505054/dwf-m10/gamer_1_akqati.png"
                        alt=""
                        layout="fill"
                    />
                </SecondSection>
            </ContainerSecondSection>
        </Container>
    );
}

export { OursProducts };
