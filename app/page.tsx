'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Users, Sparkles, Pen, ChevronRight } from 'lucide-react'
import { LoginPopup } from '@/components/login-popup'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This should be managed by your auth system

  const handleCreateBook = () => {
    if (isLoggedIn) {
      // Navigate to book creation page
      console.log('Navigate to book creation page')
    } else {
      setIsLoginPopupOpen(true)
    }
  }

  const featuredBooks = [
    { id: 1, title: 'The AI Revolution', author: 'John Doe', cover: '/placeholder.svg' },
    { id: 2, title: 'Digital Dreams', author: 'Jane Smith', cover: '/placeholder.svg' },
    { id: 3, title: 'Future Horizons', author: 'Alex Johnson', cover: '/placeholder.svg' },
  ]

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="space-y-2 sm:space-y-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Welcome to PUSTAK AI</h1>
        <p className="text-sm sm:text-base text-gray-400">Create AI-powered books with ease using PUSTAK AI</p>
      </section>

      <section className="bg-[#1A1B2E] rounded-lg p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">Ready to Write Your Next Bestseller?</h2>
            <p className="text-sm sm:text-base text-gray-400">Use our AI-powered tools to craft your story based on innovative ideas.</p>
          </div>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            onClick={handleCreateBook}
          >
            <Pen className="mr-2 h-4 w-4" />
            Create Your Book
          </Button>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <Card className="bg-[#1A1B2E] border-gray-800">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Your Books</p>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <p className="text-xl sm:text-2xl font-bold">1</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">Books you're currently writing</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1B2E] border-gray-800">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Account Credits</p>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <p className="text-xl sm:text-2xl font-bold">1</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">Available credits in account</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1B2E] border-gray-800">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">AI Creativity Score</p>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <p className="text-xl sm:text-2xl font-bold">7/10</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">How creative your AI-generated content is</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">Featured Books</h2>
          <Link href="/book-gallery" className="text-primary hover:underline flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="bg-[#1A1B2E] border-gray-800">
              <CardContent className="p-4">
                <div className="aspect-[2/3] relative mb-2">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="font-semibold text-sm">{book.title}</h3>
                <p className="text-xs text-gray-400">{book.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <LoginPopup 
        isOpen={isLoginPopupOpen} 
        onClose={() => setIsLoginPopupOpen(false)} 
      />
    </div>
  )
}

