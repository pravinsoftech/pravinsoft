import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import RecentBatchCard from "@/components/RecentBatchCard";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pravinsoft.in'),
  title: "Upgrade AI Skills | Pravinsoft Technologies LLP",
  description: "Enhance your AI skills for the evolving job market of 2026. Learn AGI development, prompt engineering, and multimodal AI systems at our Hinjewadi, Pune center.",
  icons: {
    icon: "/ai-skill.ico",
  },
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
            className="contact-bar"
            style={{
              background: "#050505",
              color: "#a1a1aa",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <span className="contact-label">Contact us:</span>
              <span>📞 +91 92090 72989</span>
              <span>📞 +91 92090 72990</span>
            </div>
            <div className="hidden sm-flex">✉️ pravinsoftonlinetraining@gmail.com</div>
          </div>
          <Navbar />
          <div style={{ flex: 1, paddingBottom: '4rem', marginTop: "106px", overflowX: 'clip' }}>
            {children}
          </div>
          <Footer />
          <ChatWidget />
          <RecentBatchCard />
        </ThemeProvider>
      </body>
    </html>
  );
}
