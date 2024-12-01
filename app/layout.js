import "./globals.css";
import Header from "@/header";
import SideNav from "./Components/side-nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 text-gray-900">
        <div className="flex h-screen">
          {/* Sidebar */}
          <SideNav />

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <Header title="Dashboard" />

            {/* Content */}
            <main className="p-6 flex-1 bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
