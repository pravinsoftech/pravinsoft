import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Upgrade AI Skills | Pravinsoft Technologies LLP",
  description: "Enhance your AI skills for the evolving job market of 2026. Learn AGI development, prompt engineering, and multimodal AI systems at our Hinjewadi, Pune center.",
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider>
          {/* Fixed Contact Stripe */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "36px",
              background: "#050505",
              borderBottom: "1px solid var(--glass-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 2rem",
              fontSize: "0.85rem",
              color: "#a1a1aa",
              zIndex: 9999,
            }}
          >
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <span>📞 +91 92090 72989</span>
              <span>📞 +91 92090 72990</span>
            </div>

            <div className="hidden sm:block">✉️ pravinsoftonlinetraining@gmail.com</div>
          </div>
          <Navbar />
          <div style={{ flex: 1, paddingBottom: '4rem', marginTop: "36px" }}>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
