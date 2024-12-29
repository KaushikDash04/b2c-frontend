'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mic, ImagePlus, Wand2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from "@/components/ui/checkbox"

export default function CreateBook() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [coverImage, setCoverImage] = useState<string>('/placeholder.svg')
  const [isAIGenerated, setIsAIGenerated] = useState(false);
  const [isAICover, setIsAICover] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCoverImage(reader.result as string)
        setIsAICover(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    // In a real app, this would submit the form data
    router.push('/books/create/success')
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center items-center gap-4 mb-12">
        {[1, 2, 3, 4].map((stepNumber, index) => (
          <div key={stepNumber} className="flex items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
              stepNumber === step ? 'bg-primary' : 'bg-[#1A1B2E]'
            }`}>
              {stepNumber}
            </div>
            {index < 3 && (
              <div className="h-[2px] w-16 bg-[#1A1B2E] mx-2" />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-8 bg-[#1A1B2E] p-8 rounded-lg">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">User Insight</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>User Name:</Label>
                <div className="relative">
                  <Input 
                    placeholder="John Doe" 
                    className="bg-[#0A0B14] border-gray-800"
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
                    className="min-h-[150px] bg-[#0A0B14] border-gray-800"
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
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Book Title</h2>
            
            <div className="space-y-4">
              <Label>Book Cover:</Label>
              <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-gray-700 rounded-lg">
                <Image
                  src={coverImage}
                  alt="Book cover preview"
                  width={200}
                  height={300}
                  className="rounded-lg object-cover bg-[#0A0B14]"
                />
                <div className="flex gap-4">
                  {!isAICover && (
                    <>
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
                        <Button variant="secondary">
                          <ImagePlus className="h-4 w-4 mr-2" />
                          Upload Custom Cover
                        </Button>
                      </Label>
                    </>
                  )}
                  <Button
                    onClick={() => {
                      // Placeholder for AI image generation
                      setIsAICover(true);
                      setCoverImage('/ai-generated-placeholder.svg');
                    }}
                  >
                    <Wand2 className="h-4 w-4 mr-2" />
                    {isAICover ? 'Regenerate AI Cover' : 'Generate AI Cover'}
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Book Title:</Label>
                <div className="relative">
                  <Input 
                    placeholder="Enter book title" 
                    className="bg-[#0A0B14] border-gray-800"
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
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Book Synopsis</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Synopsis:</Label>
                <div className="relative">
                  <Textarea 
                    placeholder="Write a compelling synopsis for your book..."
                    className="min-h-[200px] bg-[#0A0B14] border-gray-800"
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

              <div className="space-y-2">
                <Label>Number of Chapters:</Label>
                <Input 
                  type="number"
                  placeholder="Enter number of chapters"
                  className="bg-[#0A0B14] border-gray-800"
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Book Details</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Author Profile:</Label>
                <Select defaultValue="john">
                  <SelectTrigger className="bg-[#0A0B14] border-gray-800">
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Doe</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>What is the genre of the book:</Label>
                <Select defaultValue="biography">
                  <SelectTrigger className="bg-[#0A0B14] border-gray-800">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biography">Biography</SelectItem>
                    <SelectItem value="fiction">Fiction</SelectItem>
                    <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Book length:</Label>
                <Select>
                  <SelectTrigger className="bg-[#0A0B14] border-gray-800">
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="long">Long</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="generate-images" />
                <Label htmlFor="generate-images">Generate images for chapters</Label>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-6">
          {step > 1 && (
            <Button 
              variant="outline" 
              onClick={() => setStep(step - 1)}
              className="border-gray-800"
            >
              Previous
            </Button>
          )}
          {step < 4 ? (
            <Button 
              onClick={() => setStep(step + 1)}
              className="ml-auto bg-primary hover:bg-primary/90"
            >
              Next
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              className="ml-auto bg-primary hover:bg-primary/90"
            >
              Create Book
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

