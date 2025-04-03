// src/app/layout.jsx
import { Providers } from '../provider';
import Navbar from '../Components/common/Navbar';
import '@/global.css'
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