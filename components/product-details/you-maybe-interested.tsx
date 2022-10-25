import { useGetProductBySearch } from "lib/hooks";
import { addToCart } from "lib/hooks/cart";
import { useRouter } from "next/router";
import Carousel from "nuka-carousel";
import { CardProduct } from "ui/card-product";
import { LargeBoldText } from "ui/typography";
import { ContainerInteresedMain, ContainerProducts, ContainerTitle, Hr } from "./styled";

export function MaybeInteresed({ name }: { name: string }) {
    const router = useRouter();
    const queryArr = name.split(" ");
    const query = `${queryArr[0]} ${queryArr[1]}`;
    const products = useGetProductBySearch(query);

    return (
        <ContainerInteresedMain>
            <ContainerTitle>
                <LargeBoldText>También podría interesarte</LargeBoldText>
                <Hr />
            </ContainerTitle>
            <Carousel
                autoplay={true}
                pauseOnHover={true}
                cellSpacing={10}
                wrapAround={true}
                renderCenterLeftControls={() => <div></div>}
                renderCenterRightControls={() => <div></div>}
                defaultControlsConfig={{
                    pagingDotsStyle: { display: "none" },
                }}
            >
                <ContainerProducts>
                    {products?.results?.map((i: any) =>
                        i.results.Name !== name ? (
                            <CardProduct
                                key={i.objectID}
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
                                name={i.results.Name}
                                price={i.results["Unit cost"]}
                                img={i.results.Images[0].thumbnails.full.url}
                            />
                        ) : null
                    )}
                </ContainerProducts>
            </Carousel>
        </ContainerInteresedMain>
    );
}
