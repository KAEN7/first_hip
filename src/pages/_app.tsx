import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@/styles/Global";
import { theme } from "@/styles/theme";
import Header from "@/components/ui/Header";

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydrateState}>
                <ThemeProvider theme={theme}>
                    <RecoilRoot>
                        <GlobalStyle />
                        <Header />
                        <Component {...pageProps} />
                        {/* <Footer /> */}
                        {/* <Analytics /> */}
                    </RecoilRoot>
                </ThemeProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}
