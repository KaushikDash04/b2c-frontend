'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function EditBook({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Implement save functionality
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href={`/books/${params.id}`}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Book
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Edit Book</h1>
            <p className="text-gray-400 mt-2">Update your book details and content</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Book Title</Label>
                <Input 
                  defaultValue="Giggles Against Gloom: A Satirical Survival Guide"
                  className="bg-[#1A1B2E] border-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label>Genre</Label>
                <Select defaultValue="comedy">
                  <SelectTrigger className="bg-[#1A1B2E] border-gray-800">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comedy">Comedy</SelectItem>
                    <SelectItem value="drama">Drama</SelectItem>
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                    <SelectItem value="mystery">Mystery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Synopsis</Label>
                <Textarea 
                  defaultValue="In 'Giggles Against Gloom,' Aumshuman takes young readers on a hilarious journey..."
                  className="min-h-[200px] bg-[#1A1B2E] border-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label>Number of Chapters</Label>
                <Input 
                  type="number"
                  defaultValue="6"
                  className="bg-[#1A1B2E] border-gray-800"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                className="border-gray-800"
                onClick={() => history.back()}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

