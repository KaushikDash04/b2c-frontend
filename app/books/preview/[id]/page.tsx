'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function BookPreview({ params }: { params: { id: string } }) {
  const [want15Copies, setWant15Copies] = useState(false)
  const router = useRouter()

  const handleAddToCart = () => {
    // In a real app, this would add the item(s) to a cart state or API
    // For now, we'll just navigate to the cart page
    router.push('/cart')
  }

  return (
    <div className="container mx-auto px-4">
      <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go back
      </Link>

      <div className="grid md:grid-cols-2 gap-12 bg-[#0A0B14] p-8 rounded-lg">
        <div>
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <Image
              src="/placeholder.svg"
              alt="Book cover"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Book Title: Lorem ipsum</h1>
            <p className="text-xl text-gray-400">By Lorem</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Synopsis:</h2>
            <p className="text-gray-400 leading-relaxed">
              The Encyclopedia of Personal Metamorphosis is a groundbreaking
              non-fiction work that combines journalistic storytelling with
              philosophical reflection to explore the myriad ways individuals
              overcome adversity and embrace personal growth. This
              comprehensive volume, tailored for college students, presents a
              collection of real-life case studies, each serving as a powerful
              testament to human resilience and the capacity for change.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="copies" 
                checked={want15Copies}
                onCheckedChange={(checked) => setWant15Copies(checked as boolean)}
              />
              <label
                htmlFor="copies"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I want the first 15 copies delivered to me
              </label>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="w-40" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Link href={`/books/read/${params.id}`}>
                <Button variant="outline" size="lg" className="w-32">Read Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

