import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import { Arrow, ArrowRight, Container, ContainerImg } from "./styled";

function Slider() {
    const urls = [
        "https://res.cloudinary.com/dmycj7gmx/image/upload/v1666648144/dwf-m10/4_wzjqdn.png",
        "https://res.cloudinary.com/dmycj7gmx/image/upload/v1666504814/dwf-m10/slider1_pv8irm.png",
        "https://res.cloudinary.com/dmycj7gmx/image/upload/v1666504954/dwf-m10/slider3_gmdmgw.png",
        "https://res.cloudinary.com/dmycj7gmx/image/upload/v1666504923/dwf-m10/slider2_bo8auh.png",
    ];

    return (
        <Container>
            <Carousel
                autoplay={true}
                pauseOnHover={true}
                cellSpacing={5}
                wrapAround={true}
                defaultControlsConfig={{
                    pagingDotsStyle: { display: "none" },
                    prevButtonText: <Arrow />,
                    nextButtonText: <ArrowRight />,
                    prevButtonStyle: {
                        backgroundColor: "transparent",
                    },
                    nextButtonStyle: {
                        backgroundColor: "transparent",
                    },
                }}
            >
                {urls.map((url, index) => (
                    <ContainerImg key={index}>
                        <Image src={url} alt="" layout="fill" priority={true} />
                    </ContainerImg>
                ))}
            </Carousel>
        </Container>
    );
}

export { Slider };
