import "@/app/_styles/globals.scss";

export const metadata = {
  title: {
    default: "Sodigital",
    template: "%s | Sodigital",
    description: "sodigital is a digital company in Germany",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#efeeef] overflow-x-hidden relative">
        <main className="max-w-[1536px] m-auto">{children}</main>
      </body>
    </html>
  );
}
