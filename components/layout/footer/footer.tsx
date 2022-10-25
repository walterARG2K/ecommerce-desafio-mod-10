import { useRouter } from "next/router";
import { TinyWhiteText, BodyBoldWhiteText, BodyBoldText, LargeBoldWhiteText } from "ui/typography";
import {
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
} from "ui/icons/social-networks";
import {
    Container,
    ContainerContactUs,
    ContainerCopyright,
    ContainerIcons,
    ContainerSocialsNetwork,
    FooterEl,
} from "./styled-footer";

function Footer() {
    const router = useRouter();

    return (
        <FooterEl>
            <Container>
                <div>
                    <LargeBoldWhiteText>Asistencia Técnica</LargeBoldWhiteText>
                    <BodyBoldWhiteText>¿Necesitas ayuda?</BodyBoldWhiteText>
                    <ContainerContactUs
                        onClick={() => {
                            router.push("/contact");
                        }}
                    >
                        <BodyBoldText>Contactanos</BodyBoldText>
                    </ContainerContactUs>
                </div>
                <ContainerSocialsNetwork>
                    <LargeBoldWhiteText>Nuestras Redes</LargeBoldWhiteText>
                    <ContainerIcons>
                        <LinkedinIcon />
                        <GithubIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </ContainerIcons>
                </ContainerSocialsNetwork>
            </Container>
            <ContainerCopyright>
                <TinyWhiteText>©2022 walter2k22</TinyWhiteText>
            </ContainerCopyright>
        </FooterEl>
    );
}

export { Footer };
