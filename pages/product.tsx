import { Layout } from "components/layout";
import { ProductDetail } from "components/product-details";
import { useGetProductByID } from "lib/hooks";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ProductPage() {
    const router = useRouter();
    const product = useGetProductByID(router.query.id as string);
    return (
        <div>
            <Head>
                <title>Ver Producto - TitanHardware</title>
                <meta name="description" content="Descripción del producto."></meta>
            </Head>
            <Layout>
                <ProductDetail productID={router.query.id as string} product={product} />
            </Layout>
        </div>
    );
}
