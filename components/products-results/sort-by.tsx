import { BodyText } from "ui/typography";
import { ContainerModal, Item } from "./styled";

function SortByModal({ onClick, products, setProductsOrdered }: any) {
    function orderByDefault() {
        setProductsOrdered({ results: products });
    }
    function orderByLowerToHigh() {
        const cloneProducts = products.slice(0);
        const ordered = cloneProducts.sort((a: any, b: any) => {
            if (a.results["Unit cost"] > b.results["Unit cost"]) return 1;
            else if (a.results["Unit cost"] < b.results["Unit cost"]) return -1;
            else return 0;
        });
        setProductsOrdered({ results: ordered });
    }

    function orderByHighToLower() {
        const cloneProducts = products.slice(0);
        const ordered = cloneProducts.sort((a: any, b: any) => {
            if (a.results["Unit cost"] < b.results["Unit cost"]) return 1;
            else if (a.results["Unit cost"] > b.results["Unit cost"]) return -1;
            else return 0;
        });
        setProductsOrdered({ results: ordered });
    }

    return (
        <ContainerModal onClick={onClick}>
            <Item onClick={orderByDefault}>
                <BodyText>Por defecto</BodyText>
            </Item>
            <Item onClick={orderByLowerToHigh}>
                <BodyText>Menor precio</BodyText>
            </Item>
            <Item onClick={orderByHighToLower}>
                <BodyText>Mayor precio</BodyText>
            </Item>
        </ContainerModal>
    );
}

export { SortByModal };
