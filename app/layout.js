import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import CustomeLink from "./components/CustomeLink";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-5 p-4  justify-center">
            <li>
              <CustomeLink path="/">Home </CustomeLink>
            </li>
            <li>
              <CustomeLink prefetch={false} path="/settings">
                Settings
              </CustomeLink>
            </li>

            <li>
              <CustomeLink path="/analytics">Analytics</CustomeLink>
            </li>
            <li>
              <CustomeLink path="/post">Post</CustomeLink>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
