import { Layout } from "components/layout";
import { LoginUser } from "components/login";
import Head from "next/head";

export default function Login() {
    return (
        <div>
            <Head>
                <title>Iniciar Sesión - TitanHardware</title>
                <meta
                    name="description"
                    content="Creá una cuenta o inicia sesión para tener acceso a todos nuestros productos."
                ></meta>
            </Head>
            <Layout>
                <LoginUser />
            </Layout>
        </div>
    );
}
