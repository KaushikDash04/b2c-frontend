import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { BookOpen, Users, TrendingUp, Pen } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome back, Author!</h1>
        <p className="text-gray-400">Stay ahead of the curve with our trending book topics.</p>
      </section>

      <section className="bg-[#1A1B2E] rounded-lg p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Ready to Write Your Next Bestseller?</h2>
            <p className="text-gray-400">Use our AI-powered tools to craft your story based on trending topics.</p>
          </div>
          <Link href="/books/create">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Pen className="mr-2 h-4 w-4" />
              Create Your Book
            </Button>
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-[#1A1B2E] border-gray-800">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Your Books</p>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <p className="text-2xl font-bold">1</p>
              </div>
              <p className="text-xs text-gray-400">Books you're currently writing</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1B2E] border-gray-800">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Account Credits</p>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <p className="text-2xl font-bold">1</p>
              </div>
              <p className="text-xs text-gray-400">Available credits in account</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1B2E] border-gray-800">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Potential Readers</p>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <p className="text-2xl font-bold">1M</p>
              </div>
              <p className="text-xs text-gray-400">Estimated audience for your books</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1B2E] border-gray-800">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Trending Score</p>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <p className="text-2xl font-bold">5/10</p>
              </div>
              <p className="text-xs text-gray-400">How trendy your book topics are</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Trending Books</h2>
        <Card className="bg-[#1A1B2E] border-gray-800">
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Link href={`/books/${i}`} key={i} className="group">
                  <div className="space-y-3">
                    <div className="aspect-[2/3] relative overflow-hidden rounded-lg bg-gray-800">
                      <Image
                        src="/placeholder.svg"
                        alt={`Trending book ${i}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium truncate">Book Title {i}</h3>
                      <p className="text-sm text-gray-400">Author Name</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}

