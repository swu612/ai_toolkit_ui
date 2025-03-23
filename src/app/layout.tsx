import type { Metadata } from "next";
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Math 301 Text Generation Toolkit",
  description: "For educational purposes!"
};

export default function RootLayout({ children } : { children: ReactNode }) {
  return (
      <html lang="en">
      <body>
      <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar/>
          <main style={{flex: 1, padding: '1rem'}}>
              {children}
          </main>
      </div>
      </body>
      </html>
  );
}
