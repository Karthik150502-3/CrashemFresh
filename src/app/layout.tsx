import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { montserrat400, montserrat300, montserrat200} from "@/fonts/montserrat";
import NavLarge from "@/components/navLarge/navLarge";
import NavSmall from "@/components/navSmall/navSmall";

export const metadata: Metadata = {
  title: {
    template: "%s | Crashem",
    default: "Crashem"
  },
  description: 'Crashem - A Community for the Gully Cricketers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(montserrat200.className, 'antialiased', 'h-screen w-screen')}>
        {children}
      </body>
    </html>
  );
}
