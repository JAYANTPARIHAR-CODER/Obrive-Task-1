import "./globals.css";

export const metadata = {
  title: "Jayant Parihar | Full Stack Developer",
  description:
    "Portfolio of Jayant Parihar - Full Stack Developer and Computer Science Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}