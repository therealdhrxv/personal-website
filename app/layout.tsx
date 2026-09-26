import type { Metadata, Viewport } from "next";
import { Newsreader, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, profile, sameAs } from "./data";
import "./globals.css";

const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.name} is a software engineer in Bengaluru, currently at ${profile.company}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s — ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    "Dhruv Patel", "Dhruv Pankaj Patel", "Dhruv Patel software engineer", "Dhruv Patel Intervue",
    "Dhruv Patel VIT", "Dhruv Patel Bengaluru", "Dhruv Patel Kochi", "therealdhrxv",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: profile.name,
    title,
    description,
    firstName: "Dhruv",
    lastName: "Patel",
    username: "therealdhrxv",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  // Paste the token from Google Search Console here after you add the site:
  // verification: { google: "xxxxxxxx" },
};

export const viewport: Viewport = {
  themeColor: "#d8dee9",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      alternateName: [profile.shortName, "therealdhrxv"],
      givenName: "Dhruv",
      familyName: "Patel",
      url: SITE_URL,
      jobTitle: profile.role,
      worksFor: { "@type": "Organization", name: profile.company, url: profile.companyUrl },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Vellore Institute of Technology" },
      homeLocation: { "@type": "Place", name: profile.location },
      sameAs,
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: title,
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: profile.name,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
