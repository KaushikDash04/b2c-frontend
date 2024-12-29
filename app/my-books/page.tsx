'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pen, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface Book {
  id: string
  title: string
  status: string
  genre: string
  words: number
  lastUpdated: string
}

export default function MyBooks() {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      const mockBooks: Book[] = [
        {
          id: '1',
          title: 'Giggles Against Gloom: A Satirical Survival Guide',
          status: 'Published',
          genre: 'Comedy',
          words: 45230,
          lastUpdated: '2 hours ago',
        },
        {
          id: '2',
          title: 'The Quantum Quill: A Journey Through Time and Ink',
          status: 'Draft',
          genre: 'Science Fiction',
          words: 32150,
          lastUpdated: '1 day ago',
        },
      ]
      setBooks(mockBooks)
    } catch (error) {
      console.error('Error fetching books:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    // In a real app, this would call an API to delete the book
    console.log(`Deleting book with id: ${id}`)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">My Books</h1>
          <p className="text-gray-400 mt-2">Manage and track your book collection</p>
        </div>
        <Link href="/books/create">
          <Button className="bg-primary hover:bg-primary/90">
            <Pen className="mr-2 h-4 w-4" />
            Create New Book
          </Button>
        </Link>
      </div>

      <Card className="bg-[#1A1B2E] border-gray-800">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-400">Book Title</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Genre</TableHead>
                <TableHead className="text-gray-400">Words</TableHead>
                <TableHead className="text-gray-400">Last Updated</TableHead>
                <TableHead className="text-gray-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell className="font-medium">{book.title}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      book.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {book.status}
                    </span>
                  </TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell>{book.words.toLocaleString()}</TableCell>
                  <TableCell>{book.lastUpdated}</TableCell>
                  <TableCell className="space-x-2">
                    <Link href={`/books/${book.id}/edit`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">Edit</Button>
                    </Link>
                    <Link href={`/books/${book.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">Preview</Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-600 hover:text-red-500"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  )
}

