import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Employee Suggestion System",
  description: "Streamline employee suggestions and continuous improvement",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen bg-gray-50'>{children}</div>
      </body>
    </html>
  );
}
