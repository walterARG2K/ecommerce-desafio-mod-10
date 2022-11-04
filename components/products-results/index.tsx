import { useGetProductBySearch } from "lib/hooks";
import { addToCart } from "lib/hooks/cart";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardProduct } from "ui/card-product";
import { Loader } from "ui/loader";
import { BodyText } from "ui/typography";
import { ProductNotFound } from "./not-found";
import { Pagination } from "./pagination";
import { SortByModal } from "./sort-by";
import {
    Arrow,
    ArrowDown,
    Container,
    ContainerMain,
    ContainerProducts,
    Hr,
    SortBy,
    SortByContainer,
    SortByContainerText,
} from "./styled";

interface Props {
    query: string;
}

function ProductsResults({ query }: Props) {
    const [offset, setOffset] = useState(0);
    const [lastQuery, setLastQuery] = useState(query);
    const [pages, setPages] = useState([] as any);
    const [modal, setModal] = useState(false);
    const [productsOrdered, setProductsOrdered] = useState(null as any);
    const productsData = useGetProductBySearch(query, offset);
    const products = productsOrdered || productsData;
    const router = useRouter();
    
    useEffect(() => {
        var offsetAux = 0;
        var pagination = 1;
        var pageColl = [] as any;
        var total = products?.pagination?.total;
        while (offsetAux < total) {
            offsetAux += 12;

            pageColl.push(pagination++);
        }
        setProductsOrdered(null);
        
        if ((lastQuery !== query && pageColl.length) || !pages.length ) {
            setLastQuery(query);
            setPages(pageColl);
        } else if(!productsData.results.length) setPages(pageColl);

        
    }, [productsData]);

    return (
        <ContainerMain>
            {!products ? (
                <Loader />
            ) : !products.results.length ? (
                <ProductNotFound />
            ) : (
                <Container>
                    <SortByContainer>
                        <SortBy onClick={() => setModal(!modal)}>
                            <SortByContainerText>
                                <BodyText>Ordenar Por</BodyText>
                                {modal ? <Arrow /> : <ArrowDown />}
                            </SortByContainerText>
                            <Hr />
                        </SortBy>
                        {modal ? (
                            <SortByModal
                                onClick={() => setModal(!modal)}
                                products={productsData?.results}
                                setProductsOrdered={setProductsOrdered}
                            />
                        ) : null}
                    </SortByContainer>
                    <ContainerProducts>
                        {products?.results?.map((i: any) => (
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
                        ))}
                    </ContainerProducts>
                </Container>
            )}
            {pages.length ? (
                <Pagination offset={offset} setOffset={setOffset} pages={pages} />
            ) : null}
        </ContainerMain>
    );
}

export { ProductsResults };
