import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>DETEKSI JENIS BERAS SECARA REAL TIME</title>
      <Head>
        <meta name="application-name" content="Real-Time Object Detection" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Deteksi Jenis Beras"
        />
        <meta name="description" content="deteksi jenis beras menggunakan YOLO & Faster R-CNN demo" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icon.png" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
        
        <meta name="google-site-verification" content="kPFEI7Zrf_ZNTei2hRsBk-luHRtoO6a9AvndfpekAc8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
