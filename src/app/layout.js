// src/app/layout.jsx
import { Providers } from '../Provider';
import Navbar from '../Components/common/Navbar';
import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
    </body>
    </html>
  );
}