import { Layout } from "components/layout";
import { ProductsResults } from "components/products-results";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Products() {
    const router = useRouter();
    const { q } = router.query;

    return (
        <div>
            <Head>
                <title>Buscar Productos - TitanHardware</title>
                <meta
                    name="description"
                    content="Busca el producto que más te interese, disponibles con envíos gratuitos."
                ></meta>
            </Head>
            <Layout>
                <ProductsResults query={q as string} />
            </Layout>
        </div>
    );
}
