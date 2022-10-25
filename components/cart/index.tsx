import { RemoveItemCart, useGetCart } from "lib/hooks/cart";
import { separator } from "lib/utils";
import { useState } from "react";
import { ErrorMessage } from "ui/alert-messages";
import { CartProductsIcon, DeleteIcon } from "ui/icons/cart";
import { LineBlack } from "ui/line";
import { BodyBoldText, LargeBoldText, TinyText } from "ui/typography";
import { OrderSummary } from "./order-summary";
import {
    ContainerMain,
    ContainerCards,
    CotainerDetails,
    ContainerProductsAdded,
    SubContainerProductsAdded,
    ContainerSubtitle,
    CardProductsAdded,
    CardProduct,
    ContainerImg,
    ContainerTitleProduct,
    ContainerPrice,
    ContainerIconDelete,
    ContainerSubtotal,
    ContainerHr,
    Img,
    ContainerProductsCart,
} from "./styled";

function CartProduct() {
    var totalProducts = 0;
    var totalMount = 0;
    const [error, setError] = useState("");
    const cart = useGetCart() as [];

    return (
        <ContainerMain>
            <ContainerCards>
                <LargeBoldText>Carrito de productos</LargeBoldText>
                <ContainerHr>
                    <LineBlack />
                </ContainerHr>
                {error ? <ErrorMessage>{error}</ErrorMessage> : null}
                <CotainerDetails>
                    <ContainerProductsAdded>
                        <SubContainerProductsAdded>
                            <ContainerSubtitle>
                                <CartProductsIcon />
                                <BodyBoldText>Tus productos</BodyBoldText>
                            </ContainerSubtitle>
                            <hr />
                            <CardProductsAdded>
                                <ContainerProductsCart>
                                    {cart.map((i: any) => {
                                        totalMount += i.product.results["Unit cost"] * i.quantity;
                                        totalProducts += i.quantity;
                                        return (
                                            <CardProduct key={i.product.objectID}>
                                                <ContainerImg>
                                                    <Img
                                                        src={
                                                            i.product.results.Images[0].thumbnails
                                                                .full.url
                                                        }
                                                        alt=""
                                                    />
                                                </ContainerImg>
                                                <ContainerTitleProduct>
                                                    <TinyText>{i.product.results.Name}</TinyText>
                                                    <TinyText> cantidad: {i.quantity}</TinyText>
                                                </ContainerTitleProduct>
                                                <ContainerPrice>
                                                    <ContainerIconDelete
                                                        onClick={() =>
                                                            RemoveItemCart(i.product.objectID)
                                                        }
                                                    >
                                                        <DeleteIcon />
                                                    </ContainerIconDelete>
                                                    <TinyText>
                                                        ${i.product.results["Unit cost"]}
                                                    </TinyText>
                                                </ContainerPrice>
                                            </CardProduct>
                                        );
                                    })}
                                </ContainerProductsCart>
                                <ContainerSubtotal>
                                    <TinyText>Productos: {totalProducts}</TinyText>
                                    <TinyText>
                                        Coste total: {separator(totalMount).slice(0, 10)}$ARS
                                    </TinyText>
                                </ContainerSubtotal>
                            </CardProductsAdded>
                        </SubContainerProductsAdded>
                    </ContainerProductsAdded>
                    <OrderSummary
                        setError={setError}
                        cart={cart}
                        total={totalProducts}
                        cost={separator(totalMount).slice(0, 10)}
                    />
                </CotainerDetails>
            </ContainerCards>
        </ContainerMain>
    );
}

export { CartProduct };
