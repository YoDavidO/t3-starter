import { withTRPC } from "@trpc/next";
import type { AppProps } from 'next/app'
import { AppRouter } from "@/pages/api/trpc/[trpc]";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

function getBaseUrl() {
  if (process.browser) return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  config({ctx}) {
    const url = `${getBaseUrl()}/api/trpc`;
    
    return {
      url
    };
  },
  ssr: false,
})(MyApp);