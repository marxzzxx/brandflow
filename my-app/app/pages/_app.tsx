import { AppProps } from "next/app";
import Layout from '../layout'; // Adjust the path if needed


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
