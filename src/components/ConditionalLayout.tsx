'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import RecentBatchCard from "@/components/RecentBatchCard";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.startsWith('/admin');

  if (isAdminPath) {
    return <>{children}</>;
  }

  return (
    <>
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
          <span>📞 +91 92090 72989</span>
          <span>📞 +91 92090 72990</span>
        </div>
        <div>✉️ pravinsoftonlinetraining@gmail.com</div>
      </div>
      
      <Navbar />
      <div style={{ flex: 1, paddingBottom: '4rem', marginTop: "106px", overflowX: 'clip' }}>
        {children}
      </div>
      <Footer />
      <ChatWidget />
      <RecentBatchCard />
    </>
  );
}
