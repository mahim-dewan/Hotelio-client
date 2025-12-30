// app/layout.tsx (Next.js 13+ App Router)
import { Inter, Poppins, Allerta_Stencil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
import AuthModal from "@/components/AuthModal";

/* -------------------------------------------------------------------------- */
/*                                Font Setup                                   */
/* -------------------------------------------------------------------------- */

// Primary font for body text
export const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Secondary font for headings / accents
export const secondary = Poppins({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Decorative / luxury font for branding
export const luxury = Allerta_Stencil({
  variable: "--font-luxury",
  subsets: ["latin"],
  weight: ["400"],
});

/* -------------------------------------------------------------------------- */
/*                                 Metadata                                    */
/* -------------------------------------------------------------------------- */
export const metadata = {
  title: "Hotelio",
  description: "Book luxury rooms at affordable prices in Cox's Bazar.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: "Hotelio Hotel",
    description: "Luxury stay experience",
    images: [
      {
        url: "/assets/heroImage.png",
        width: 1200,
        height: 630,
        alt: "Hotelio Hotel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hotelio Hotel",
    description: "Book luxury rooms at affordable prices in Cox's Bazar.",
    images: ["/assets/heroImage.png"],
  },
};

/* -------------------------------------------------------------------------- */
/*                                 Root Layout                                 */
/* -------------------------------------------------------------------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${primary.variable} ${secondary.variable} ${luxury.variable} antialiased`}
      >
        <AuthProvider>
          {/* Main container */}
          <main className="min-h-screen w-full max-w-350 mx-auto">
            {/* Navbar appears on all pages */}
            <Navbar />
            {/* Login and Register Dialog Box  */}
            <AuthModal />
            {/* Page content */}
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
