import { Inter, Poppins, Allerta_Stencil } from "next/font/google";
import "./globals.css";

export const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const secondary = Poppins({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const luxury = Allerta_Stencil({
  variable: "--font-luxury",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Hotelio",
  description: "Book luxury rooms at affordable prices in Cox's Bazar.",
  openGraph: {
    title: "Stayora Hotel",
    description: "Luxury stay experience",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${primary.variable} ${secondary.variable} ${luxury.variable} antialiased`}
      >
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
