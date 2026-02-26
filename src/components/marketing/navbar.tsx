'use client'

import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NavbarSidebar from './navbar-sidebar'
import { MenuIcon } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const NavbarItems = [
  { href: '/', children: 'Home' },
  { href: '/about', children: 'About' },
  { href: '/features', children: 'Features' },
  { href: '/pricing', children: 'Pricing' },
  { href: '/contact', children: 'Contact' },
]

interface NavItemProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const NavItem = ({ href, children, isActive }: NavItemProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        'bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-3.5 text-lg',
        isActive && 'bg-black text-white hover:bg-black hover:text-white',
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}

export const Navbar = () => {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSideBarOpen] = useState(false)

  return (
    <nav className="h-20 flex justify-between font-medium border-b bg-white ">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn('font-semibold text-5xl', poppins.className)}>funRoad</span>
      </Link>
      <div className="items-center gap-4 hidden lg:flex">
        {NavbarItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            children={item.children}
            isActive={pathname === item.href}
          />
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className={cn(
            'h-full border-l border-t-o border-b-0 border-r-0 px-12 rounded-none bg-white hover:bg-pink-400 transition-colors text-lg',
          )}
        >
          <Link href={'/'}>Log in</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className={cn(
            'h-full border-l border-t-o border-b-0 border-r-0 px-12 rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg',
          )}
        >
          <Link href={'/'}>Start selling</Link>
        </Button>
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant={'ghost'}
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSideBarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>

      <NavbarSidebar items={NavbarItems} open={isSidebarOpen} onOpenChange={setIsSideBarOpen} />
    </nav>
  )
}
