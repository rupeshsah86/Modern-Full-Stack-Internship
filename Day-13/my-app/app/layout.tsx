export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <h1>Hello from RootLayout</h1>
        {children}
      </body>
    </html>
  )
}