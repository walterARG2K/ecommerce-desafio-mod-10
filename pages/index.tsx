import { Banner } from "components/banner";
import { Slider } from "components/carousel";
import { MostSoldProducts } from "components/most-sold";
import { OursProducts } from "components/ours-products";
import { useProducts } from "lib/hooks";
import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../components/layout";

const Line = styled.hr`
    width: 95vw;
    max-width: 500px;
    margin: 50px auto;
    height: 4px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.25);
    border: none;

    @media (min-width: 600px) {
        margin: 100px auto;
    }
`;

const Separator = styled.div`
    height: 100px;
`;

export default function Home() {
    const products = useProducts();

    return (
        <div>
            <Head>
                <title>TitanHardware</title>
                <meta
                    name="description"
                    content="Conseguí los mejores componentes para tu pc gamer."
                ></meta>
            </Head>
            <Layout>
                <div>
                    <Slider />
                    <Banner />
                    <Line />
                    <OursProducts />
                    <MostSoldProducts products={products} />
                </div>
                <Separator />
            </Layout>
        </div>
    );
}
