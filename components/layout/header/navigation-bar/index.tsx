import { Categories } from "components/layout/header/menu-burger/categories";
import { BodyBoldWhiteText } from "ui/typography";
import { useRouter } from "next/router";
import { Anchor, Container, ContainerNav, Ul } from "./styled";

function NavigationBar() {
    const router = useRouter();

    return (
        <Container>
            <ContainerNav>
                <Ul>
                    <li
                        onClick={() => {
                            router.push("/my-profile");
                        }}
                    >
                        <Anchor href="#">
                            <BodyBoldWhiteText>Mi Perfil</BodyBoldWhiteText>
                        </Anchor>
                    </li>

                    <li>
                        <div>
                            <Categories />
                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/contact");
                        }}
                    >
                        <Anchor href="#">
                            <BodyBoldWhiteText>Contactános</BodyBoldWhiteText>
                        </Anchor>
                    </li>
                </Ul>
            </ContainerNav>
        </Container>
    );
}

export { NavigationBar };
