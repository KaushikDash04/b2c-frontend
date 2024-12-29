'use client'

import { ArrowLeft, Share2, Download, BookOpen, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function BookDetails({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [want15Copies, setWant15Copies] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = 'Check out this amazing book!'
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`, '_blank')
        break
      case 'instagram':
        // Instagram doesn't have a direct share URL, you might want to handle this differently
        console.log('Instagram sharing not directly supported')
        break
      default:
        navigator.share({ title: 'Giggles Against Gloom: A Satirical Survival Guide', text, url })
          .catch(console.error)
    }
  }

  const addToCart = () => {
    const totalQuantity = want15Copies ? quantity + 15 : quantity
    // In a real app, this would update a cart state or call an API
    console.log(`Adding ${totalQuantity} copies to cart`)
    router.push('/cart')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Link 
          href="/book-gallery" 
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go back
        </Link>
        
        <div className="flex gap-4">
          <Link href={`/books/${params.id}/edit`}>
            <Button className="bg-primary hover:bg-primary/90">Edit</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-gray-800">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleShare('facebook')}>
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare('twitter')}>
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare('instagram')}>
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-primary hover:bg-primary/90">
            Recreate
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <div className="space-y-4">
          <div className="bg-[#1A1B2E] p-4 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Book cover"
              width={400}
              height={600}
              className="w-full rounded-lg"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Link href={`/books/${params.id}/read`}>
            <Button variant="outline" className="w-full border-gray-800">
              <BookOpen className="mr-2 h-4 w-4" />
              Read Book
            </Button>
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Giggles Against Gloom: A Satirical Survival Guide
            </h1>
            <Link 
              href="/authors/aumshuman"
              className="text-primary hover:text-primary/90 font-medium"
            >
              Aumshuman
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#1A1B2E] p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">Chapters</p>
              <p className="font-semibold">6 Chapters</p>
            </div>
            <div className="bg-[#1A1B2E] p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">Language</p>
              <p className="font-semibold">English</p>
            </div>
            <div className="bg-[#1A1B2E] p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">Genre</p>
              <p className="font-semibold">Comedy</p>
            </div>
            <div className="bg-[#1A1B2E] p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">Publication date</p>
              <p className="font-semibold">December 21, 2024</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Synopsis</h2>
            <p className="text-gray-400 leading-relaxed">
              In 'Giggles Against Gloom,' Aumshuman takes young readers on a hilarious journey through the ups and downs of life. This satirical fiction is packed with laugh-out-loud moments and quirky characters who face everyday problems with humor and creativity. From dealing with a grumpy math teacher to surviving a sibling's endless pranks, the book offers a lighthearted take on overcoming life's challenges. Through its comedic lens, 'Giggles Against Gloom' delivers a powerful message: even in tough times, laughter can be the best remedy. Perfect for kids who love a good laugh, this book not only entertains but also empowers them to face their fears and embrace life's imperfections with a smile.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Author</h2>
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
              <p className="text-gray-400 leading-relaxed">
                Aumshuman is a creative storyteller with a knack for blending humor and wisdom. Known for his sharp wit and unique perspective, Aumshuman crafts engaging tales that resonate with readers of all ages. With a passion for helping young minds navigate life's challenges, he uses comedy and satire as tools to inspire resilience and positivity.
              </p>
            </div>
          </div>
          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="want15copies" 
                checked={want15Copies}
                onCheckedChange={(checked) => setWant15Copies(checked as boolean)}
              />
              <label
                htmlFor="want15copies"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I want the first 15 copies delivered to me
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <Label htmlFor="quantity">Quantity:</Label>
              <Input 
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min={1}
                className="w-20"
              />
            </div>
            <Button onClick={addToCart} className="w-full">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

