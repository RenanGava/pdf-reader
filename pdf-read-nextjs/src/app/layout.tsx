import { Roboto, Roboto_Mono } from 'next/font/google'
import { GlobalStyle } from './styles/global'
import StyledComponentsRegistry from './lib/registry'

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '100'
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '100'
})
export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto_mono.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      <GlobalStyle />
    </html>
  )
}

