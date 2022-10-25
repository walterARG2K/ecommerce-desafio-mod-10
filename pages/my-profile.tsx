import { Layout } from "components/layout";
import { MyProfile } from "components/my-profile";
import { useGetToken } from "lib/hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function MyInfo() {
    const tokenData = useGetToken();
    const DidMount = useRef(0);
    const router = useRouter();

    useEffect(() => {
        if (!tokenData?.token && DidMount.current >= 1) {
            router.push("/login");
        }
        DidMount.current += 1;
    }, [tokenData]);

    return (
        <div>
            <Head>
                <title>Mi Perfil - TitanHardware</title>
                <meta
                    name="description"
                    content="Editá tu perfil y conoce todas tus ordenes y sus estados."
                ></meta>
            </Head>
            <Layout>
                <MyProfile email={tokenData?.email as any} />
            </Layout>
        </div>
    );
}
