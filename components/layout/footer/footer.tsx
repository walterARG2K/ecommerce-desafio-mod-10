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

    function onClickIcon(socialLink: string) {
        window.open("https://" + socialLink, "_blank");
    }

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
                        <div onClick={() => onClickIcon("linkedin.com/in/walter-ortiz-87747124a/")}>
                            <LinkedinIcon />
                        </div>
                        <div onClick={() => onClickIcon("github.com/walterARG2K")}>
                            <GithubIcon />
                        </div>
                        <div onClick={() => onClickIcon("facebook.com")}>
                            <FacebookIcon />
                        </div>
                        <div onClick={() => onClickIcon("instagram.com")}>
                            <InstagramIcon />
                        </div>
                        <div onClick={() => onClickIcon("twitter.com")}>
                            <TwitterIcon />
                        </div>
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
