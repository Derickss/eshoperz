import SupabaseProvider from '@/providers/SupabaseProvider'
import Sidebar from './components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar>
                {children}
              </Sidebar>
            </UserProvider>
          </SupabaseProvider>
      </body>
    </html>
  )
}
