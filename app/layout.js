// Managing the layout of the app
// { children }: A special prop that represents any child components nested inside <AuthContextProvider>

import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import NavBar from "../components/Navbar";

// Creating a metadata object that helps with SEO
export const metadata = {
  title: "Canadian Railway",
  description: "Made by Team 8",
};

// The main structure of the app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <NavBar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
