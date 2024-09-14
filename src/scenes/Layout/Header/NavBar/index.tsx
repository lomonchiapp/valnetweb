
import { useState, useEffect } from 'react'
import {Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ChevronDown, Menu } from 'lucide-react'

// Logo Component
const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link to="/" className="flex items-center space-x-2">
    <img src={isScrolled ? "/logo.png" : "/logo-white.png"} alt="Logo" className="h-10" />
  </Link>
)

// Internet Submenu Component
const InternetSubmenu = () => (
  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <a
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >
          <div className="mb-2 mt-4 text-lg font-medium">Planes de Internet</div>
          <p className="text-sm leading-tight text-muted-foreground">
            Descubre nuestros planes de internet para tu hogar o negocio
          </p>
        </a>
      </NavigationMenuLink>
    </li>
    <li>
      <NavigationMenuLink asChild>
        <a
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href="/"
        >
          <div className="text-sm font-medium leading-none">Residencial</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            High-speed internet for your home
          </p>
        </a>
      </NavigationMenuLink>
    </li>
    <li>
      <NavigationMenuLink asChild>
        <a
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href="/"
        >
          <div className="text-sm font-medium leading-none">Negocios</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Reliable internet solutions for your business
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  </ul>
)

// Nav Items Component
const NavItems = ({ isScrolled, isMobile = false }: { isScrolled: boolean, isMobile?: boolean }) => {
  const itemClass = isMobile
    ? "text-lg font-semibold"
    : `text-sm font-medium ml-5 ${isScrolled ? 'text-primary' : 'text-white'}`
  const megaMenuItemClass = isMobile 
  ? 'text-lg font-semibold' 
  : `border-b-2 border-orange-500 bg-transparent ${isScrolled ? 'text-primary' : 'text-white'}`

  return (
    <>
      <NavigationMenuItem>
        {isMobile ? (
          <NavigationMenuLink href="/" className={itemClass}>
            Internet
          </NavigationMenuLink>
        ) : (
          <>
            <NavigationMenuTrigger className={megaMenuItemClass}>
              Internet
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <InternetSubmenu />
            </NavigationMenuContent>
          </>
        )}
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/" className={itemClass}>
          ValneTV
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/" className={itemClass}>
          Voz / IP
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/" className={itemClass}>
          Soporte
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  )
}

// Desktop Nav Component
const DesktopNav = ({ isScrolled }: { isScrolled: boolean }) => (
  <div className="hidden md:flex items-center space-x-6">
    <NavigationMenu>
      <NavigationMenuList>
        <NavItems isScrolled={isScrolled} />
      </NavigationMenuList>
    </NavigationMenu>
    <Button color={isScrolled ? 'orange-500' : 'orange-500'}>Mi Valnet</Button>
  </div>
)

// Mobile Nav Component
const MobileNav = ({ isScrolled }: { isScrolled: boolean }) => (
  <div className="md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          <NavigationMenu orientation="vertical" className="w-full">
            <NavigationMenuList className="flex-col items-start">
              <NavItems isScrolled={isScrolled} isMobile={true} />
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="w-full">Mi Valnet</Button>
        </nav>
      </SheetContent>
    </Sheet>
  </div>
)

// Main NavMenu Component
export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Logo isScrolled={isScrolled} />
          <DesktopNav isScrolled={isScrolled} />
          <MobileNav isScrolled={isScrolled} />
        </nav>
      </div>
    </header>
  )
}