import React from "react";
import "./globals.css";
import { AuthProvider } from "./_utils/auth-context";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Canadian Railway",
  description: "Made by team 8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>
          <AuthProvider>
            <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              <NavBar />
            </div>
            <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              {children}
            </div>
          </AuthProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}
