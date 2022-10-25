import { ContactUs } from "components/contact";
import { Layout } from "components/layout";
import Head from "next/head";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contactános - TitanHardware</title>
                <meta
                    name="description"
                    content="¿Tenés dudas o consultas acerca de nuestra tienda?. Entonces envíanos un mensaje."
                ></meta>
            </Head>
            <Layout>
                <ContactUs />
            </Layout>
        </div>
    );
}
