'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, Filter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function BookGallery() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch books from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/get_data/', {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBooks(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('Failed to load books');
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesFilter = filter === 'all' || book.details.genre?.toLowerCase() === filter;
    const matchesSearch = book.details.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold">Book Gallery</h1>
          <p className="text-gray-400 mt-2">Explore our collection of AI-generated books</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search books..."
              className="pl-10 bg-[#1A1B2E] border-gray-800"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] bg-[#1A1B2E] border-gray-800">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Books</SelectItem>
              <SelectItem value="fiction">Fiction</SelectItem>
              <SelectItem value="non-fiction">Non-Fiction</SelectItem>
              <SelectItem value="poetry">Poetry</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="bg-[#1A1B2E] border-gray-800">
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredBooks.map((book, i) => (
              <Link href={`/books/${i + 1}`} key={i} className="group block">
                <div className="space-y-3">
                  <div className="aspect-[1/1] relative overflow-hidden rounded-lg bg-gray-800">
                  <Image
                    src={book.image_urls.cover_image || '/placeholder.svg'}
                    alt={book.details.title}
                    width={512}
                    height={512}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg" // Replace with a low-res version of your image
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium truncate hover:text-primary transition-colors">
                      {book.details.title}
                    </h3>
                    <p className="text-sm text-gray-400">{book.details.book_cover}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {book.details.genre || 'Unknown Genre'}
                      </span>
                      <span className="text-xs text-gray-400">
                        {book.details.rating || 'No Rating'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Card>

      <div className="flex justify-center">
        <Button variant="outline" className="bg-[#1A1B2E] border-gray-800">
          Load More
        </Button>
      </div>
    </div>
  )
}
