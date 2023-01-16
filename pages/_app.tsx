import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Heading from "../components/Heading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Heading heading='MDAT Admin Console' message='Password: ' buttonText='Authorize'/>
      <Component {...pageProps} />
    </>
  );
}
