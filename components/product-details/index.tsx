import {
    BodyBoldText,
    BodyBoldWhiteText,
    BodyText,
    LargeBoldText,
    TinyBoldText,
    TinyText,
} from "ui/typography";
import { FastDeliveryIcon } from "ui/icons/banner";
import { CheckIcon, WarrantyIcon } from "ui/icons/about-product";
import { PrimaryButton, SecondaryButton } from "ui/buttons";
import { LineBlack } from "ui/line";
import {
    ContainerMain,
    ContainerImg,
    Img,
    ContainerButtons,
    ContainerInfo,
    ContainerPrice,
    ContainerDescription,
    ContainerHr,
    ContainerAllBenefits,
    ContainerBenefit,
    ContainerButtonsSmallView,
    SubContainerImg,
    ContainerMaybeInteresed,
    DescriptionEl,
    Features,
    HrDescription,
} from "./styled";
import { MaybeInteresed } from "./you-maybe-interested";
import { useRouter } from "next/router";
import { addToCart } from "lib/hooks/cart";
import { Loader } from "ui/loader";
import { separator } from "lib/utils";

interface Props {
    product: any;
    productID: string;
}

function ProductDetail({ product, productID }: Props) {
    const router = useRouter();
    const descriptionFormat = product?.Description?.split(",");

    function HandlerBuy() {
        addToCart({ results: product, objectID: productID });
        router.push("/cart");
    }

    function HandlerAddToCart() {
        addToCart({ results: product, objectID: productID });
    }

    return (
        <div>
            {!product ? (
                <Loader />
            ) : (
                <div>
                    <ContainerMain>
                        <ContainerImg>
                            <SubContainerImg>
                                <Img src={product.Images[0].thumbnails.full.url} alt="" />
                            </SubContainerImg>
                            <ContainerButtons>
                                <SecondaryButton onClick={HandlerBuy}>
                                    COMPRAR AHORA
                                </SecondaryButton>
                                <PrimaryButton onClick={HandlerAddToCart}>
                                    AÑADIR AL CARRITO
                                </PrimaryButton>
                            </ContainerButtons>
                        </ContainerImg>
                        <ContainerInfo>
                            <LargeBoldText>{product?.Name}</LargeBoldText>
                            <ContainerHr>
                                <LineBlack />
                            </ContainerHr>
                            <ContainerPrice>
                                <BodyBoldWhiteText>
                                    Precio: {product ? separator(product["Unit cost"]) : "0"}$ARS
                                </BodyBoldWhiteText>
                            </ContainerPrice>
                            <ContainerDescription>
                                <LargeBoldText>Características del producto</LargeBoldText>
                                <ContainerHr>
                                    <LineBlack />
                                </ContainerHr>
                                <Features>
                                    {descriptionFormat.map((i: any, index: number) => (
                                        <Description key={index} text={i as string} />
                                    ))}
                                </Features>
                            </ContainerDescription>
                            <ContainerAllBenefits>
                                <ContainerBenefit>
                                    <FastDeliveryIcon />
                                    <BodyBoldText>Envíos gratís a todo el país</BodyBoldText>
                                </ContainerBenefit>
                                <ContainerBenefit>
                                    <WarrantyIcon />
                                    <BodyBoldText>Garantía - 12 Meses</BodyBoldText>
                                </ContainerBenefit>
                                <ContainerBenefit>
                                    <CheckIcon />
                                    <BodyBoldText>Stock Disponible</BodyBoldText>
                                </ContainerBenefit>
                            </ContainerAllBenefits>
                            <ContainerHr>
                                <LineBlack />
                            </ContainerHr>
                        </ContainerInfo>
                    </ContainerMain>
                    <ContainerButtonsSmallView>
                        <SecondaryButton onClick={HandlerBuy}>COMPRAR AHORA</SecondaryButton>
                        <PrimaryButton onClick={HandlerAddToCart}>AÑADIR AL CARRITO</PrimaryButton>
                    </ContainerButtonsSmallView>
                    <ContainerMaybeInteresed>
                        <MaybeInteresed name={product?.Name} />
                    </ContainerMaybeInteresed>
                </div>
            )}
        </div>
    );
}

function Description({ text }: { text: string }) {
    if (!text || text === " ")
        return (
            <div>
                <HrDescription />
            </div>
        );

    const stringToArray = text?.split(":");
    return (
        <div>
            <HrDescription />
            <DescriptionEl>
                <TinyBoldText>{stringToArray[0]}: </TinyBoldText>
                <TinyBoldText> </TinyBoldText>
                <TinyText> {stringToArray[1]}</TinyText>
            </DescriptionEl>
        </div>
    );
}

export { ProductDetail };
