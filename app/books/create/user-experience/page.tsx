'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mic, ImagePlus } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function UserExperience() {
  const router = useRouter()
  const [coverImage, setCoverImage] = useState<string>('/placeholder.svg')

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCoverImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center items-center gap-4 mb-12">
        {[1, 2, 3].map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
              step === 1 ? 'bg-primary' : 'bg-[#1A1B2E]'
            }`}>
              {step}
            </div>
            {index < 2 && (
              <div className="h-[2px] w-16 bg-[#1A1B2E] mx-2" />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-8 bg-[#0A0B14] p-8 rounded-lg">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">User Insight</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>User Name:</Label>
              <div className="relative">
                <Input 
                  placeholder="John Doe" 
                  className="bg-[#1A1B2E] border-gray-800"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>User's Experience:</Label>
              <div className="relative">
                <Textarea 
                  placeholder="Write about your experience in book writing and how does it affect you, thus defining your characteristics."
                  className="min-h-[150px] bg-[#1A1B2E] border-gray-800"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-2 top-2"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Book Cover Image:</Label>
              <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-gray-700 rounded-lg">
                <Image
                  src={coverImage}
                  alt="Book cover preview"
                  width={200}
                  height={300}
                  className="rounded-lg object-cover bg-[#1A1B2E]"
                />
                <div>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="cover-upload"
                    onChange={handleImageUpload}
                  />
                  <Label
                    htmlFor="cover-upload"
                    className="inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Button>
                      <ImagePlus className="h-4 w-4 mr-2" />
                      Upload Cover Image
                    </Button>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={() => router.push('/books/create')}>
            Previous
          </Button>
          <Button onClick={() => router.push('/books/create/overview')}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

