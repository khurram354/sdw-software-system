'use client';
import Script from "next/script";

export default function GoogleAdsTracking() {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17954026163" strategy="afterInteractive"/>
            <Script id="google-ads-tracking" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'AW-17954026163', {page_path: window.location.pathname});
                `}
            </Script>
        </>
    )
}
