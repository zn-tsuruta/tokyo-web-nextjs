
// next 系の呼び出し
import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google'
import Script from 'next/script'
import { useRouter } from "next/router";

// components
import Header from 'app/_components/Header'
import Footer from 'app/_components/Footer'
import MainScript from 'app/_components/MainScript'

// styles
import 'app/_styles/globals.scss'

const NotoSans = Noto_Sans({
	weight: ["400", "700","900"],
	subsets: ["latin"],
	preload: true,
});
  

// 変数定義
const favUrl = '/images/favicon.png';
const ogpUrl = '/images/ogp.png';
const GTM_ID = 'GTM-M75XBSLC';

// メタ設定(共通設定)
export const metadata: Metadata = {
	title       : 'タイトルタグ',
	description : 'ディスクリプション',
    icons       : [{ rel: 'icon', url: favUrl }],
	formatDetection: {telephone: false},
	openGraph   : {
		siteName	: 'サイト名',
		title       : 'OGPタイトル',
		url         : 'https://example.com',
		description : 'OGPディスクリプション',
		images      : ogpUrl,
		locale	    : 'ja_JP',
		type        : 'website',
	},
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
		<html lang="ja">
			<Script
				id="gtag-head"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
				__html: `
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','${GTM_ID}');
				`,
				}}
			/>
			<body>
				<noscript
					id="gtag-body"
					// strategy="afterInteractive"
					dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}
				/>
				<Header/>
                <div className="main-wrapper">
                    <main>   
                        {children}
                    </main>
                </div>
				<Footer/>
			</body>
            <MainScript/>
		</html>
    );
}
