import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollObserver from "@/components/ScrollObserver";
import WhatsAppButton from "@/components/WhatsAppButton";
import CampaignBanner from "@/components/CampaignBanner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// JSON-LD Structured Data for Organization
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Loop Technologies CO LTD",
    "alternateName": "LoopTech",
    "url": "https://looptechnologies.cm",
    "logo": "https://looptechnologies.cm/images/logo.jpg",
    "description": "IT consulting firm offering cloud computing, web development, CCTV installation, and network design services in Cameroon.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buea",
        "addressCountry": "CM"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "French"]
    },
    "sameAs": [
        "https://www.linkedin.com/company/looptechnologies",
        "https://twitter.com/looptechnologies"
    ]
};

// Google Analytics Measurement ID - Replace with your actual ID
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

export const metadata = {
    title: "Loop Technologies CO LTD | IT Consulting & Solutions",
    description: "Transform your business with cutting-edge IT solutions. Loop Technologies delivers comprehensive consulting services including cloud computing, web development, CCTV installation, and network design in Buea, Cameroon.",
    keywords: "IT consulting, cloud computing, GCP partner, web development, CCTV installation, network design, Buea, Cameroon",
    icons: {
        icon: '/images/logo.jpg',
        shortcut: '/images/logo.jpg',
        apple: '/images/logo.jpg',
    },
    openGraph: {
        title: "Loop Technologies CO LTD | IT Consulting & Solutions",
        description: "Your trusted IT consulting partner for digital success",
        type: "website",
        images: ['/images/logo.jpg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Google Analytics */}
                {GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_MEASUREMENT_ID}');
                            `}
                        </Script>
                    </>
                )}
            </head>
            <body className={inter.className}>
                <CampaignBanner />
                <WhatsAppButton />
                <Navbar />
                <main>{children}</main>
                <Footer />
                <BackToTop />
                <ScrollObserver />
            </body>
        </html>
    );
}
