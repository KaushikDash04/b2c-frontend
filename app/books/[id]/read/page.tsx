'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Mock function to simulate fetching book content from backend
const fetchBookContent = async (id: string) => {
  // In a real app, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
  return {
    title: "The Amazing Journey",
    author: "John Doe",
    content: Array(20).fill(null).map((_, i) => `This is page ${i + 1} of the book. It contains the content for this page.`)
  }
}

export default function ReadBook({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<{ title: string; author: string; content: string[] } | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    fetchBookContent(params.id).then(setBook)
  }, [params.id])

  const flipPage = (direction: 'next' | 'prev') => {
    setIsFlipping(true)
    setTimeout(() => {
      if (direction === 'next' && currentPage < (book?.content.length || 0)) {
        setCurrentPage(currentPage + 1)
      } else if (direction === 'prev' && currentPage > 0) {
        setCurrentPage(currentPage - 1)
      }
      setIsFlipping(false)
    }, 500) // Match this with the animation duration
  }

  if (!book) return <div className="text-center">Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href={`/books/${params.id}`} className="inline-flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Book Details
      </Link>

      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <h2 className="text-xl text-gray-400 mb-8">by {book.author}</h2>

      <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] bg-[#1A1B2E] rounded-lg shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: isFlipping ? -90 : 0 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 p-8 flex flex-col"
          >
            {currentPage === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl font-bold mb-4">{book.title}</h2>
                <p className="text-xl">by {book.author}</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-400 mb-4">Page {currentPage} of {book.content.length}</p>
                <p className="text-lg leading-relaxed flex-grow overflow-auto">
                  {book.content[currentPage - 1]}
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          onClick={() => flipPage('prev')}
          disabled={currentPage === 0}
          className="w-32"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={() => flipPage('next')}
          disabled={currentPage >= book.content.length}
          className="w-32"
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

