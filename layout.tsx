import "./globals.css";

export const metadata = {
  title: "Portfolio - Rahul Singh Dhakar",
  description: "Data Analytics & Operations Specialist Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
