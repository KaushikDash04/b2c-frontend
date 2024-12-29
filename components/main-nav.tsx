'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, CreditCard } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">FastRead</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/my-books"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-600",
                  pathname === "/my-books" ? "text-purple-600" : "text-gray-600"
                )}
              >
                My Books
              </Link>
              <Link
                href="/book-gallery"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-600",
                  pathname === "/book-gallery" ? "text-purple-600" : "text-gray-600"
                )}
              >
                Book Gallery
              </Link>
              <Link
                href="/authors"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-600",
                  pathname === "/authors" ? "text-purple-600" : "text-gray-600"
                )}
              >
                Manage Authors
              </Link>
              <Link
                href="/billing"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-600",
                  pathname === "/billing" ? "text-purple-600" : "text-gray-600"
                )}
              >
                Billing
              </Link>
            </nav>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

