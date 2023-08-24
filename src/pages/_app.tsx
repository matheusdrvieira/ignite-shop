import { Container, Header } from "@/styles/pages/app";
import { globalStyles } from "../styles/global";
import { AppProps } from "next/app";
import Image from "next/image"
import logo from "../assets/Logo.svg"

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

    return (
        <Container>
            <Header>
                <Image src={logo} alt="logo" />
            </Header>
            <Component {...pageProps} />
        </Container>
    )
}