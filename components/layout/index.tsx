import React from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

interface Props {
    children: React.ReactNode;
}

function Layout({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export { Layout };
