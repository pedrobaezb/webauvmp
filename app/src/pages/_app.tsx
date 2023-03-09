import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/png" href="/nueva-version/auvmp_icono.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AUVMP</title>
    </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
