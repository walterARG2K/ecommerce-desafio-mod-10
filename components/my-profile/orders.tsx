import Image from "next/image";
import { LoaderSecond } from "ui/loader";
import { BodyWhiteText, LargeBoldText } from "ui/typography";
import {
    ContainerAllOrders,
    ContainerImg,
    ContainerOrderInfo,
    ContainerOrderName,
    ContainerOrders,
    ContainerOrderStatus,
    ContainerQuantity,
    Img,
    OrderEl,
    OrderName,
    OrdersNotFound,
} from "./styled";

interface ordersType {
    status: string;
    url: string;
    productInfo: any;
}

interface orderType {
    name: string;
    quantity: number;
    img: string;
}

function OrdersContainer({ ordersData }: any) {
    return (
        <ContainerAllOrders>
            {!ordersData ? (
                <LoaderSecond />
            ) : ordersData.length ? (
                ordersData?.map((i: any, index: any) => (
                    <div key={Math.random()}>
                        <ContainerOrders>
                            <div>
                                <AllOrders
                                    url={i.payment_url}
                                    status={i.status}
                                    productInfo={i.productInfo}
                                />
                            </div>
                        </ContainerOrders>
                    </div>
                ))
            ) : (
                <OrdersNotFound>
                    <LargeBoldText>Aún no haz comprado ningún producto</LargeBoldText>
                </OrdersNotFound>
            )}
        </ContainerAllOrders>
    );
}

function AllOrders({ url, status, productInfo }: ordersType) {
    var estado = status === "paid" ? "pagado" : "pendiente";
    return (
        <OrderEl onClick={() => window.open(url, "_blank")}>
            <ContainerOrderStatus theme={status}>
                <BodyWhiteText>Estado de la orden: {estado}</BodyWhiteText>
            </ContainerOrderStatus>
            {productInfo?.map((i: any) => (
                <Order
                    img={i[0].product.Images[0].thumbnails.full.url}
                    key={Math.random()}
                    name={i[0].product.Name}
                    quantity={i[0].quantity}
                />
            ))}
        </OrderEl>
    );
}

function Order({ img, name, quantity }: orderType) {
    return (
        <div>
            <ContainerOrderInfo>
                <ContainerImg>
                    <Img>
                        <Image src={img} layout="fill" />
                    </Img>
                </ContainerImg>
                <ContainerOrderName />
                <OrderName>
                    <BodyWhiteText>{name}</BodyWhiteText>
                </OrderName>
            </ContainerOrderInfo>
            <ContainerQuantity>
                <BodyWhiteText>Cantidad: {quantity}</BodyWhiteText>
            </ContainerQuantity>
        </div>
    );
}

export { OrdersContainer };
