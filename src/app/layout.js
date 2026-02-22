import { Inter } from "next/font/google"
import "./globals.css";
import NavigationBar from "@/components/frontend/layout/NavigationBar";
import Footer from "@/components/frontend/layout/Footer";
import ToastProvider from "@/components/frontend/wrapper/ToastProvider";
import GoogleAdsTracking from "@/components/frontend/layout/GoogleAdsTracking";
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "SDW DS System",
  description: "SDW DS Distribution Solution helps wholesale and distribution businesses manage inventory, sales, accounts, drivers, route management, and operations with one powerful ERP system.",
  keywords: [
    "distribution ERP system",
    "ERP software for distribution",
    "wholesale distribution management",
    "inventory management system",
    "sales and accounting ERP",
    "logistics management software",
    "warehouse management system",
    "enterprise ERP solution",
    "distribution management system",
    "SDW DS system"],
  metadataBase: new URL('https://sdw-ds.com/'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SDW DS System",
    description: "SDW DS Distribution Solution helps wholesale and distribution businesses manage inventory, sales, accounts, drivers, route management and operations with one powerful ERP system.",
    url: "https://sdw-ds.com",
    siteName: "SDW DS Distribution Solution",
    images: [{ url: "/sdw-solutions.jpg", width: 1200, height: 630 }],
    locale: "en_UK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SDW DS System",
    description: "SDW DS Distribution Solution helps wholesale and distribution businesses manage inventory, sales, accounts, drivers, route management and operations with one powerful ERP system.",
    images: ["/sdw-solutions.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true, noimageindex: false },
  },
  icons: {
    icon: [{ url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: [{ url: "/site.webmanifest", type: "application/manifest+json" }]
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SDW DS Distribution Solution",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://sdw-ds.com",
    "description": "All-in-one ERP system for distribution businesses to manage inventory, sales, logistics, and operations."
  }
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.className}`}>
        <GoogleAdsTracking />
        <NavigationBar />
        <main className="min-h-screen">{children}</main>
        <ToastProvider />
        <Footer />
      </body>
    </html>
  );
}
