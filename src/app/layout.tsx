import "./globals.css";

export const metadata = {
  title: "Kousha Dev",
  description: "My portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
