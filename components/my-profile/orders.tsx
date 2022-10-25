import { LoaderSecond } from "ui/loader";
import { BodyWhiteText, LargeBoldText } from "ui/typography";
import {
    ContainerAllOrders,
    ContainerOrderInfo,
    ContainerOrderName,
    ContainerOrders,
    ContainerOrderStatus,
    ContainerQuantity,
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
}

function OrdersContainer({ ordersData }: any) {
    return (
        <div>
            {!ordersData ? (
                <LoaderSecond />
            ) : ordersData.length ? (
                ordersData?.map((i: any, index: any) => (
                    <ContainerAllOrders key={Math.random()}>
                        <ContainerOrders>
                            <div>
                                <AllOrders
                                    url={i.payment_url}
                                    status={i.status}
                                    productInfo={i.productInfo}
                                />
                            </div>
                        </ContainerOrders>
                    </ContainerAllOrders>
                ))
            ) : (
                <OrdersNotFound>
                    <LargeBoldText>Aún no haz comprado ningún producto</LargeBoldText>
                </OrdersNotFound>
            )}
        </div>
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
                <Order key={Math.random()} name={i[0].product.Name} quantity={i[0].quantity} />
            ))}
        </OrderEl>
    );
}

function Order({ name, quantity }: orderType) {
    return (
        <div>
            <ContainerOrderInfo>
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
