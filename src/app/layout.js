import "./globals.css";

export const metadata = {
  title: "Write It",
  description: "Write Your Stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
