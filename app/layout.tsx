import "./globals.css";

export const metadata = {
  title: "SelfForge LLC",
  description:
    "We build focused software products that replace complexity with clarity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="sf-background" />
        {children}
      </body>
    </html>
  );
}
