import ProviderLayout from "@/components/ProviderLayout";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderLayout>
      <Component {...pageProps} />
    </ProviderLayout>
  );
}
