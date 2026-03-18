import { Link } from 'react-router-dom'
import {
  Github,
  Menu,
  ChevronDown,
  LayoutDashboard,
  User,
  Triangle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export function Navbar() {
  const NavLinks = () => (
    <>
      <div className="flex items-center gap-6">
        {['Product', 'Developers', 'Solutions'].map((item) => (
          <DropdownMenu key={item}>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-sb-text hover:text-white transition-colors outline-none">
              {item} <ChevronDown className="h-3 w-3 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-sb-card border-sb-border text-sb-text">
              <DropdownMenuItem className="focus:bg-sb-bg focus:text-sb-green cursor-pointer">
                Overview
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-sb-bg focus:text-sb-green cursor-pointer">
                Features
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-sb-bg focus:text-sb-green cursor-pointer">
                Case Studies
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
        {['Pricing', 'Docs', 'Blog'].map((item) => (
          <Link
            key={item}
            to="#"
            className="text-sm font-medium text-sb-text hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  )

  return (
    <header className="fixed top-0 z-50 w-full border-b border-sb-border bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded bg-sb-card text-sb-green">
              <Triangle className="h-4 w-4 fill-current" />
            </div>
            supabase
          </Link>

          <nav className="hidden lg:block">
            <NavLinks />
          </nav>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-sb-green transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>94.7K</span>
          </a>

          <Button
            asChild
            className="bg-sb-green text-black hover:bg-sb-green/90 font-semibold"
          >
            <Link to="/dashboard">Dashboard</Link>
          </Button>

          <Avatar className="h-8 w-8 cursor-pointer transition-opacity hover:opacity-80">
            <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=male" />
            <AvatarFallback className="bg-sb-border text-sb-text">
              U
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-sb-bg border-r-sb-border w-[80%] sm:w-[350px]"
            >
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-xl font-bold text-white mb-4"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-sb-card text-sb-green">
                    <Triangle className="h-4 w-4 fill-current" />
                  </div>
                  supabase
                </Link>

                <div className="flex flex-col gap-4">
                  {[
                    'Product',
                    'Developers',
                    'Solutions',
                    'Pricing',
                    'Docs',
                    'Blog',
                  ].map((item) => (
                    <Link
                      key={item}
                      to="#"
                      className="text-lg font-medium text-sb-text hover:text-sb-green"
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-sb-border w-full my-2" />

                <div className="flex flex-col gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white"
                  >
                    <Github className="h-5 w-5" />
                    <span>94.7K Stars</span>
                  </a>
                  <Button
                    asChild
                    className="bg-sb-green text-black hover:bg-sb-green/90 w-full"
                  >
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
