import { NotFound } from "components/404";
import Head from "next/head";

export default function NotFoundPage() {
    return (
        <div>
            <Head>
                <title>404 - TitanHardware</title>
                <meta name="description" content="Página no encontrada, ¿Volver al inicio?."></meta>
            </Head>
            <NotFound />
        </div>
    );
}
