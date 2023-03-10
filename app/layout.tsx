import HeaderLay from "@/core/layouts/Header"
import FooterLay from "@/core/layouts/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <HeaderLay />
        {children}
        <FooterLay />
      </body>
    </html>
  )
}
