
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>this is header</h1>
        {children}
        <h1>this is footer</h1>
      </body>
    </html>
  );
}
