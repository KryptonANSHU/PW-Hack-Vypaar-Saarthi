import "../styles/globals.scss";
import { StoreProvider } from "../utils/Store";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../utils/googleAnalytics/ga"
import { GoogleOAuthProvider } from "@react-oauth/google";
import Head from "next/head";
import WagmiProvider from "../utils/WagmiProvider";
import "../styles/registermsme/main.css"
import "../styles/registermsme/panel.css"
import "../styles/registermsme/msmeStyles.css"
import '../styles/loadingStyles.css'
import "../styles/dashboard.css"

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            {/* // seo  */}
            <Head>
                <title>Vyapaar Saarthi - Helping MSMEs</title>
                <meta name="description" content="Bridging your real and virtual world with HashCase. Making web3 adoption effortless for users, helping brands get web3 ready." />
                <meta property="og:title" content="Bridging your real and virtual world with HashCase. Focus on web3 Adoption & Accessibility " />
                <meta property="og:description" content="Bridging your real and virtual world with HashCase. Making web3 adoption effortless for users, helping brands get web3 ready." />
                <meta property="og:url" content="https://www.hashcase.co/" />
                <meta property="og:type" content="website" />
            </Head>

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${gtag.GA_TRACKING_ID}');
          `,
                }}
            />
            <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
                <StoreProvider>
                    <WagmiProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </WagmiProvider>
                </StoreProvider>
            </GoogleOAuthProvider>
        </>
    );
}

export default MyApp;
