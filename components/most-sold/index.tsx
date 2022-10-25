import { addToCart } from "lib/hooks/cart";
import { CardProduct } from "ui/card-product";
import { LargeBoldText } from "ui/typography";
import { ContainerMain, ContainerProducts, ContainerTitle, Hr } from "./styled";
import { useRouter } from "next/router";

function MostSoldProducts({ products }: any) {
    const router = useRouter();

    return (
        <ContainerMain>
            <ContainerTitle>
                <Hr />
                <LargeBoldText>Lo más vendido</LargeBoldText>
            </ContainerTitle>
            <ContainerProducts>
                {products?.results.map((i: any) => (
                    <CardProduct
                        onClickBuy={() => {
                            addToCart(i);
                            router.push("/cart");
                        }}
                        onClickImg={() =>
                            router.push({
                                pathname: "/product/",
                                query: { id: i.objectID },
                            })
                        }
                        onClickCart={() => addToCart(i)}
                        key={i.objectID}
                        name={i.results.Name}
                        price={i.results["Unit cost"]}
                        img={i.results.Images[0].thumbnails.full.url}
                    />
                ))}
            </ContainerProducts>
        </ContainerMain>
    );
}

export { MostSoldProducts };
