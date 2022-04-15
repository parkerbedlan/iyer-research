import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { FlickerWrapper } from "../components/FlickerWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FlickerWrapper>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <Component {...pageProps} />
      </MantineProvider>
    </FlickerWrapper>
  );
}

export default MyApp;
