'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import { Mic } from 'lucide-react'

export default function BookOverview() {
  const router = useRouter()

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center items-center gap-4 mb-12">
        {[1, 2, 3].map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
              step === 2 ? 'bg-primary' : 'bg-[#1A1B2E]'
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
          <h2 className="text-2xl font-bold">Book Details</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Book Name:</Label>
              <div className="relative">
                <Input 
                  placeholder="Enter book title" 
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
              <Label>About the Author:</Label>
              <div className="relative">
                <Textarea 
                  placeholder="Small, medium, large."
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

            <div className="space-y-2">
              <Label>Book Synopsis:</Label>
              <div className="relative">
                <Textarea 
                  placeholder="Small, medium, large."
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
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={() => router.push('/books/create/user-experience')}>
            Previous
          </Button>
          <Button onClick={() => router.push('/books/create/success')}>
            Add book Synopsis
          </Button>
        </div>
      </div>
    </div>
  )
}

