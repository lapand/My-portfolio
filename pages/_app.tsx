import "@/styles/globals.css";
import type { AppProps } from "next/app";
import i18n from "@/modules/i18n";
import { I18nextProvider } from 'react-i18next';
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </React.StrictMode>
  );
}