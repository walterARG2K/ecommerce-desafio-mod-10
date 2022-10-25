import { CartProduct } from "components/cart";
import { Layout } from "components/layout";
import Head from "next/head";

export default function Cart() {
    return (
        <div>
            <Head>
                <title>Carrito - TitanHardware</title>
                <meta name="description" content="Mirá los productos que más te interesan."></meta>
            </Head>
            <Layout>
                <CartProduct />
            </Layout>
        </div>
    );
}
